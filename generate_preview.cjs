const fs = require('fs');
const path = require('path');

const assetDir = path.join(__dirname, 'public/game-assets');
const readB64 = (f) => fs.readFileSync(path.join(assetDir, f), 'base64');

console.log('Reading all assets...');
const A = {
    sky: readB64('oga-swm-bg-gradient-sky.png'),
    mountains: readB64('desertbg-pal00.png'),
    blobby: readB64('blobbybg4cbase.png'),
    bgBlobby: readB64('oga-swm-bg-blobby.png'),
    tiles: readB64('oga-swm-tiles-alpha.png'),
    earthTiles: readB64('oga-swm-earth-tile-variations-alpha.png'),
    player: readB64('oga-swm-mainchar-sheet-alpha.png'),
    enemies: readB64('oga-swm-objectsandenemies-sheet-alpha.png'),
    extraEnem: readB64('oga-swm-extra-enemies-alpha.png'),
    fx: readB64('oga-swm-fx-sheet-alpha.png'),
    boss: readB64('oga-swm-brainguy-alpha.png'),
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>G-RUNNER - Game Preview</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
*{margin:0;padding:0;box-sizing:border-box;-webkit-user-select:none;user-select:none;}
body{background:#0a0a12;display:flex;justify-content:center;align-items:center;min-height:100vh;font-family:'Press Start 2P',monospace;overflow:hidden;}
#wrap{position:relative;width:390px;height:844px;background:#000;overflow:hidden;cursor:pointer;}
canvas{display:block;width:100%;height:100%;image-rendering:pixelated;image-rendering:crisp-edges;}
/* Overlays */
.overlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:20;padding:24px;}
#startScreen{background:rgba(0,0,0,0.85);}
#startScreen h1{font-size:22px;color:#E30019;margin-bottom:6px;text-shadow:2px 2px 0 #600;}
#startScreen .sub{font-size:7px;color:#666;letter-spacing:4px;margin-bottom:20px;}
#startScreen .divider{width:120px;height:2px;background:linear-gradient(90deg,transparent,#E30019,transparent);margin-bottom:24px;}
#startScreen .desc{font-size:7px;color:#888;text-align:center;line-height:1.8;margin-bottom:32px;}
#startScreen .btn{width:240px;height:48px;background:#E30019;color:#fff;font-size:11px;font-family:inherit;border:none;border-bottom:4px solid #900;border-right:4px solid #900;cursor:pointer;display:flex;align-items:center;justify-content:center;}
#startScreen .btn:active{transform:scale(0.96);}
#startScreen .hint{font-size:7px;color:#555;margin-top:24px;}
#gameOverScreen{background:rgba(0,0,0,0.85);display:none;}
#gameOverScreen .emoji{font-size:32px;margin-bottom:12px;}
#gameOverScreen h2{font-size:16px;color:#fff;margin-bottom:4px;}
#gameOverScreen .score-box{width:220px;border:2px solid rgba(255,255,255,0.2);background:rgba(0,0,0,0.6);padding:20px;text-align:center;margin:16px 0 24px;}
#gameOverScreen .score-label{font-size:7px;color:rgba(255,255,255,0.4);letter-spacing:3px;margin-bottom:8px;}
#gameOverScreen .score-val{font-size:32px;color:#fff;}
#gameOverScreen .bonus{font-size:7px;color:#FACC15;margin-top:12px;}
#gameOverScreen .btn-retry{width:220px;height:44px;background:#fff;color:#000;font-size:9px;font-family:inherit;border:none;border-bottom:4px solid #aaa;border-right:4px solid #aaa;cursor:pointer;margin-bottom:8px;}
#gameOverScreen .btn-back{width:220px;height:44px;background:transparent;color:rgba(255,255,255,0.6);font-size:9px;font-family:inherit;border:2px solid rgba(255,255,255,0.2);cursor:pointer;}
/* HUD */
#hud{position:absolute;top:0;left:0;right:0;padding:12px 16px;display:flex;justify-content:flex-end;z-index:10;pointer-events:none;}
#hud .score-area{text-align:right;}
#hud .score-label{font-size:7px;color:rgba(255,255,255,0.4);}
#hud .score-num{font-size:16px;color:#fff;margin-top:2px;}
</style>
</head>
<body>
<div id="wrap">
    <canvas id="c"></canvas>
    
    <div id="hud">
        <div class="score-area">
            <div class="score-label">SCORE</div>
            <div class="score-num" id="scoreVal">00000</div>
        </div>
    </div>

    <div id="startScreen" class="overlay">
        <h1>G-RUNNER</h1>
        <div class="sub">GEARVN SYNC</div>
        <div class="divider"></div>
        <div class="desc">Thu thap chip de<br>tich diem doi qua!</div>
        <button class="btn" onclick="doStart()">▶ BAT DAU</button>
        <div class="hint">TAP = NHAY &nbsp;&nbsp; x2 = DOUBLE</div>
    </div>
    
    <div id="gameOverScreen" class="overlay">
        <div class="emoji">💥</div>
        <h2>GAME OVER</h2>
        <div class="divider" style="margin:12px 0 0;width:80px;height:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);"></div>
        <div class="score-box">
            <div class="score-label">SCORE</div>
            <div class="score-val" id="finalScore">0</div>
            <div class="bonus" id="bonusText">+0 DIEM THUONG 🎁</div>
        </div>
        <button class="btn-retry" onclick="doStart()">↻ CHOI LAI</button>
        <button class="btn-back" onclick="doStart()">← QUAY LAI</button>
    </div>
</div>

<script>
// ============================================================
// ASSETS
// ============================================================
const IMG = {};
const ASSET_DATA = {
    sky:        'data:image/png;base64,${A.sky}',
    mountains:  'data:image/png;base64,${A.mountains}',
    blobby:     'data:image/png;base64,${A.blobby}',
    bgBlobby:   'data:image/png;base64,${A.bgBlobby}',
    tiles:      'data:image/png;base64,${A.tiles}',
    earthTiles: 'data:image/png;base64,${A.earthTiles}',
    player:     'data:image/png;base64,${A.player}',
    enemies:    'data:image/png;base64,${A.enemies}',
    extraEnem:  'data:image/png;base64,${A.extraEnem}',
    fx:         'data:image/png;base64,${A.fx}',
    boss:       'data:image/png;base64,${A.boss}',
};

let loadCount = 0;
const totalAssets = Object.keys(ASSET_DATA).length;
function loadAssets(cb) {
    for (const key in ASSET_DATA) {
        const img = new Image();
        img.src = ASSET_DATA[key];
        img.onload = img.onerror = () => { IMG[key] = img; loadCount++; if(loadCount>=totalAssets) cb(); };
    }
}

// ============================================================
// CONSTANTS (Matching MinigameScreen.tsx)
// ============================================================
const GRAVITY = 0.45;
const JUMP_FORCE = -8.5;
const BASE_SPEED = 5;
const SPAWN_RATE = 180;
const COIN_SPAWN_RATE = 120;

// BrainGuy enemy: 455x74, 5 variants of 91x74 each
const BRAINGUY_W = 91;
const BRAINGUY_H = 74;
const BRAINGUY_VARIANTS = 5;

// Player pixel art (same as app)
const P = '#E30019', D = '#9A0007', G = '#FFC107', W = '#FFFFFF', B = '#111111', _ = null;
const PLAYER_FRAMES = [
  [[_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,P,P,W,W,P,P,W,W,P,_,_,_,_],[_,_,_,P,P,W,B,P,P,W,B,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,P,P,G,G,G,P,P,_,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,P,P,D,P,P,P,D,P,P,_,_,_,_],[_,_,_,P,P,D,P,G,P,D,P,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,_,_,_,P,P,_,_,_,_,_],[_,_,_,P,P,_,_,_,_,_,P,P,_,_,_,_],[_,_,P,P,D,_,_,_,_,_,D,P,P,_,_,_],[_,_,P,D,D,_,_,_,_,_,D,D,P,_,_,_]],
  [[_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,P,P,W,W,P,P,W,W,P,_,_,_,_],[_,_,_,P,P,W,B,P,P,W,B,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,P,P,G,G,G,P,P,_,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,P,P,D,P,P,P,D,P,P,_,_,_,_],[_,_,_,P,P,D,P,G,P,D,P,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,_,P,P,_,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,_,_,_,P,P,_,_,_,_,_],[_,_,_,D,P,P,_,_,_,P,P,D,_,_,_,_],[_,_,_,D,D,P,_,_,_,P,D,D,_,_,_,_]],
  [[_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,P,P,W,W,P,P,W,W,P,_,_,_,_],[_,_,_,P,P,W,B,P,P,W,B,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,P,P,G,G,G,P,P,_,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,P,P,D,P,P,P,D,P,P,_,_,_,_],[_,_,_,P,P,D,P,G,P,D,P,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_],[_,_,_,P,D,_,_,_,_,_,_,D,P,_,_,_],[_,_,_,P,D,_,_,_,_,_,_,D,P,_,_,_],[_,_,P,D,D,_,_,_,_,_,_,D,D,P,_,_]],
  [[_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,P,P,W,W,P,P,W,W,P,_,_,_,_],[_,_,_,P,P,W,B,P,P,W,B,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,P,P,G,G,G,P,P,_,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,P,P,D,P,P,P,D,P,P,_,_,_,_],[_,_,_,P,P,D,P,G,P,D,P,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,P,P,D,_,D,P,P,_,_,_,_,_],[_,_,_,_,P,D,D,_,D,D,P,_,_,_,_,_],[_,_,_,_,D,D,_,_,_,D,D,_,_,_,_,_]]
];
const PLAYER_JUMP = [[_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],[_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,P,P,W,W,P,P,W,W,P,_,_,_,_],[_,_,_,P,P,W,B,P,P,W,B,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,P,P,G,G,G,P,P,_,_,_,_,_],[_,_,G,_,_,P,P,P,P,P,_,_,G,_,_,_],[_,G,G,_,P,P,P,P,P,P,P,_,G,G,_,_],[_,_,G,P,P,D,P,P,P,D,P,P,G,_,_,_],[_,_,_,P,P,D,P,G,P,D,P,P,_,_,_,_],[_,_,_,P,P,P,P,P,P,P,P,P,_,_,_,_],[_,_,_,_,_,P,P,P,P,P,_,_,_,_,_,_],[_,_,_,_,_,_,P,P,P,_,_,_,_,_,_,_],[_,_,_,_,P,P,D,_,D,P,P,_,_,_,_,_],[_,_,_,P,P,D,_,_,_,D,P,P,_,_,_,_],[_,_,_,D,D,_,_,_,_,_,D,D,_,_,_,_]];

// ============================================================
// GAME STATE
// ============================================================
let canvas, ctx;
let W_PX, H_PX;
let gameState = 'START'; // START, PLAYING, GAMEOVER
let frames = 0;
let score = 0;
let bgOffset = 0;
let midOffset = 0;

const player = {
    x: 50, y: 200, width: 48, height: 48,
    dy: 0, jumpCount: 0, maxJumps: 2,
    grounded: false, state: 'RUN',
    frameIndex: 0, frameTimer: 0
};

let obstacles = [];
let coins = [];
let particles = [];

// ============================================================
// DRAWING HELPERS
// ============================================================
function drawPixelArt(matrix, dx, dy, size) {
    const cell = size / 16;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            const color = matrix[r][c];
            if (color) {
                ctx.fillStyle = color;
                ctx.fillRect(
                    Math.floor(dx + c * cell),
                    Math.floor(dy + r * cell),
                    Math.ceil(cell), Math.ceil(cell)
                );
            }
        }
    }
}

// ============================================================
// GAME LOGIC (Matching MinigameScreen.tsx)
// ============================================================
function update() {
    if (gameState !== 'PLAYING') return;
    
    frames++;
    bgOffset += 0.5;
    midOffset += 1.8;
    
    const groundY = H_PX - 60;
    const p = player;
    
    // Physics
    p.dy += GRAVITY;
    p.y += p.dy;
    
    // State
    if (p.dy < 0) p.state = 'JUMP';
    else if (p.dy > 0 && !p.grounded) p.state = 'FALL';
    else p.state = 'RUN';
    
    // Animation (only run frames)
    p.frameTimer++;
    if (p.frameTimer > 4) {
        p.frameIndex = (p.frameIndex + 1) % PLAYER_FRAMES.length;
        p.frameTimer = 0;
    }
    
    // Ground collision
    if (p.y + p.height >= groundY) {
        p.y = groundY - p.height;
        p.dy = 0;
        p.grounded = true;
        p.jumpCount = 0;
    } else {
        p.grounded = false;
    }
    
    // SPAWN ENEMIES (BrainGuy variants, same as app)
    if (frames % SPAWN_RATE === 0) {
        const type = Math.random() > 0.7 ? 'FLYING' : 'GROUND';
        const isGround = type === 'GROUND';
        obstacles.push({
            x: W_PX + 20,
            y: isGround ? groundY - 46 : groundY - 90,
            width: 46, height: 46,
            type,
            variant: Math.floor(Math.random() * BRAINGUY_VARIANTS),
            chaseSpeed: isGround ? 0.2 + Math.random() * 0.4 : 0,
            bobPhase: Math.random() * Math.PI * 2
        });
    }
    
    // SPAWN COINS
    if (frames % COIN_SPAWN_RATE === 0) {
        const num = 1 + Math.floor(Math.random() * 3);
        for (let c = 0; c < num; c++) {
            coins.push({
                x: W_PX + 20 + c * 30,
                y: groundY - 80 - Math.random() * 40,
                size: 18
            });
        }
    }
    
    // UPDATE OBSTACLES
    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= BASE_SPEED + obs.chaseSpeed;
        obs.bobPhase += 0.08;
        
        // Collision
        const hitPad = 8;
        if (p.x + hitPad < obs.x + obs.width &&
            p.x + p.width - hitPad > obs.x &&
            p.y + hitPad < obs.y + obs.height &&
            p.y + p.height - hitPad > obs.y) {
            createExplosion(p.x + p.width/2, p.y + p.height/2, '#E30019');
            gameOver();
        }
        
        if (obs.x + obs.width < -50) {
            obstacles.splice(i, 1);
            score += 5;
        }
    }
    
    // UPDATE COINS
    for (let i = coins.length - 1; i >= 0; i--) {
        const coin = coins[i];
        coin.x -= BASE_SPEED;
        const dx = (p.x + p.width/2) - (coin.x + coin.size/2);
        const dy = (p.y + p.height/2) - (coin.y + coin.size/2);
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < p.width/2 + coin.size) {
            coins.splice(i, 1);
            score += 10;
            createExplosion(coin.x, coin.y, '#FACC15');
        } else if (coin.x + coin.size < 0) {
            coins.splice(i, 1);
        }
    }
    
    // UPDATE PARTICLES
    for (let i = particles.length - 1; i >= 0; i--) {
        const part = particles[i];
        part.x += part.vx;
        part.y += part.vy;
        part.life -= 0.04;
        if (part.life <= 0) particles.splice(i, 1);
    }
    
    // HUD
    document.getElementById('scoreVal').textContent = score.toString().padStart(5, '0');
}

function createExplosion(x, y, color) {
    for (let i = 0; i < 12; i++) {
        particles.push({
            x, y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            life: 0.8 + Math.random() * 0.3,
            color
        });
    }
}

// ============================================================
// DRAWING (Matching MinigameScreen.tsx)
// ============================================================
// LOGIC CONSTANTS
// ============================================================
let currentHue = 0;
let targetHue = 0;
let gameSpeed = 5;
const START_SPEED = 5;
const MAX_SPEED = 9;

function getBiome(dist) {
    // 0-300m: GearVN (Red/Orange) -> Hue 0 (Default)
    // 300-600m: Toxic Jungle (Green) -> Hue 110
    // 600-900m: Neon Glacier (Blue) -> Hue 200
    // 900m+: Golden/Purple (Wastes) -> Hue 280
    const cycle = dist % 1200;
    if (cycle < 300) return 0;
    if (cycle < 600) return 110;
    if (cycle < 900) return 200;
    return 280;
}

function getDifficulty(dist) {
    // 0 -> 1.0 (Easy)
    // 1000 -> 2.0 (Hard)
    return Math.min(2.5, 1 + dist / 1000);
}

function drawSkyStructures() {
    // INDUSTRIAL CEILING PIPES
    // Parallax layer: Slower than ground
    const parallaxSpeed = 0.5; 
    const scroll = (midOffset * parallaxSpeed); // Continuous scroll value
    
    ctx.save();
    
    // 1. Draw continuous horizontal rails at the very top
    // Using tile at 16,0 (generic pipe/block) repeats endlessly
    const tileSize = 32;
    const cols = Math.ceil(W_PX / tileSize) + 2;
    // We need to calculate start loop based on scroll to "wrap" correctly or just tile large enough
    const tileScroll = scroll % tileSize;
    
    for (let i = -1; i < cols; i++) {
        const x = i * tileSize - tileScroll;
        
        // Row 1: Darker base rail (y=10)
        ctx.globalAlpha = 0.5;
        // Tile 32,0 is a nice block
        ctx.drawImage(IMG.tiles, 32, 0, 16, 16, x, 10, tileSize, tileSize);
        
        // Row 2: Lighter pipe details running below (y=30)
        ctx.globalAlpha = 0.7;
        // Tile 48,0 is a pipe-like block
        ctx.drawImage(IMG.tiles, 48, 0, 16, 16, x, 30, tileSize, 16); 
        
        // Hanging Features (every 6 blocks)
        // Pseudo-random based on absolute index (i + scroll/tileSize)
        const absIndex = Math.floor((scroll + x) / tileSize) + i; // Approximate unique index
        // Actually simpler: just use i combined with a frame offset counter? No, needs to be static to world.
        // Let's use world position: (scroll + x) is stable world X.
        const worldBlockIndex = Math.floor((midOffset * parallaxSpeed + x) / tileSize);
        
        if (Math.abs(worldBlockIndex) % 6 === 0) {
             ctx.globalAlpha = 0.9;
             // Draw a "Vent" hanging down
             // Tile 80,16 looking like a vent/fan
             ctx.drawImage(IMG.tiles, 80, 16, 16, 16, x + 4, 46, 24, 24);
             // A thin vertical tether connecting pipe to vent
             ctx.fillStyle = '#444';
             ctx.fillRect(x + 14, 38, 4, 8);
        }
    }
    
    ctx.restore();
}

function update() {
    if (gameState !== 'PLAYING') return;
    
    frames++;
    
    // PROGRESSIVE DIFFICULTY (More Gradual)
    const dist = Math.floor(player.x / 16);
    const difficulty = getDifficulty(dist);
    
    // Speed: Increases much slower now. 
    // +1 speed every 1000m instead of 300m. Max 9.
    gameSpeed = Math.min(MAX_SPEED, START_SPEED + (dist / 1000)); 
    
    bgOffset += gameSpeed * 0.2; 
    midOffset += gameSpeed * 0.8; 
    
    // ... (Physic & State) ...
    const groundY = H_PX - 60;
    const p = player;
    p.dy += GRAVITY;
    p.y += p.dy;
    
    if (p.dy < 0) p.state = 'JUMP';
    else if (p.dy > 0 && !p.grounded) p.state = 'FALL';
    else p.state = 'RUN';
    
    p.frameTimer += (gameSpeed / START_SPEED);
    if (p.frameTimer > 6) {
        p.frameIndex = (p.frameIndex + 1) % PLAYER_FRAMES.length;
        p.frameTimer = 0;
    }
    
    if (p.y + p.height >= groundY) {
        p.y = groundY - p.height;
        p.dy = 0;
        p.grounded = true;
        p.jumpCount = 0;
    } else {
        p.grounded = false;
    }
    
    // SPAWN ENEMIES (Dynamic Difficulty)
    // As difficulty increases, spawn rate decreases (more enemies)
    // Base 180 frames, Min 60 frames
    const currentSpawnRate = Math.max(60, Math.floor(180 / (difficulty * 0.8)));
    
    if (frames % currentSpawnRate === 0) {
        const typeRand = Math.random();
        // Difficulty > 1.2 : Introduce Flyers
        // Difficulty > 1.8 : Swarm Flyers
        const flyerChance = difficulty > 1.8 ? 0.6 : (difficulty > 1.2 ? 0.3 : 0.0);
        
        const type = typeRand < flyerChance ? 'FLYING' : 'GROUND';
        
        const isGround = type === 'GROUND';
        obstacles.push({
            x: W_PX + 20,
            y: isGround ? groundY - 46 : groundY - 80 - (Math.random()*60),
            width: 46, height: 46,
            type,
            variant: Math.floor(Math.random() * BRAINGUY_VARIANTS),
            chaseSpeed: (isGround ? 0 : 2) + Math.random(), // Flyers chase faster
            bobPhase: Math.random() * Math.PI * 2
        });
    }
    
    // SPAWN COINS
    if (frames % COIN_SPAWN_RATE === 0) {
        const num = 1 + Math.floor(Math.random() * 3);
        const pattern = Math.random();
        for (let c = 0; c < num; c++) {
            let cy = groundY - 80 - Math.random() * 40;
            // Pattern: Arc
            if(pattern > 0.7) cy = groundY - 80 - Math.sin(c)*30;
            
            coins.push({
                x: W_PX + 20 + c * 30,
                y: cy,
                size: 18
            });
        }
    }
    
    // UPDATE OBSTACLES
    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= gameSpeed + obs.chaseSpeed; // Use variable gameSpeed
        obs.bobPhase += 0.08;
        
        // Collision
        const hitPad = 8;
        if (p.x + hitPad < obs.x + obs.width &&
            p.x + p.width - hitPad > obs.x &&
            p.y + hitPad < obs.y + obs.height &&
            p.y + p.height - hitPad > obs.y) {
            createExplosion(p.x + p.width/2, p.y + p.height/2, '#E30019');
            gameOver();
        }
        
        if (obs.x + obs.width < -50) {
            obstacles.splice(i, 1);
            score += 5 * Math.floor(difficulty); // Higher score for harder difficulty
        }
    }
    
    // UPDATE COINS
    for (let i = coins.length - 1; i >= 0; i--) {
        const coin = coins[i];
        coin.x -= gameSpeed;
        const dx = (p.x + p.width/2) - (coin.x + coin.size/2);
        const dy = (p.y + p.height/2) - (coin.y + coin.size/2);
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < p.width/2 + coin.size) {
            coins.splice(i, 1);
            score += 10;
            createExplosion(coin.x, coin.y, '#FACC15');
        } else if (coin.x + coin.size < 0) {
            coins.splice(i, 1);
        }
    }
    
    // UPDATE PARTICLES
    for (let i = particles.length - 1; i >= 0; i--) {
        const part = particles[i];
        part.x += part.vx;
        part.y += part.vy;
        part.life -= 0.04;
        if (part.life <= 0) particles.splice(i, 1);
    }
    
    // HUD REFRESH
    document.getElementById('scoreVal').textContent = score.toString().padStart(5, '0');
}

function draw() {
    // Update Theme
    const dist = Math.floor(player.x / 16); 
    targetHue = getBiome(dist);
    if (Math.abs(targetHue - currentHue) > 1) {
        currentHue += (targetHue - currentHue) * 0.05;
    } else {
        currentHue = targetHue;
    }

    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0, 0, W_PX, H_PX);
    
    ctx.filter = 'hue-rotate(' + currentHue + 'deg)';
    
    const groundY = H_PX - 60;
    
    // 0. SKY
    ctx.drawImage(IMG.sky, 0, 0, 640, 512, 0, 0, W_PX, H_PX);
    
    // 0.5. SKY STRUCTURES (Tiles)
    drawSkyStructures();
    
    // 1. BLOBBY
    const bgW = H_PX * 2;
    const bgH = H_PX;
    const offset = midOffset % bgW;
    ctx.globalAlpha = 0.6;
    ctx.drawImage(IMG.bgBlobby, 0, 0, 320, 256, -offset, 0, bgW, bgH);
    ctx.drawImage(IMG.bgBlobby, 0, 0, 320, 256, -offset + bgW, 0, bgW, bgH);
    ctx.globalAlpha = 1.0;

    // 2. MOUNTAINS
    const mtnW = 320;
    const mtnH = 320;
    const mtnDrawH = H_PX * 0.7;
    const mtnDrawW = mtnDrawH; 
    const mtnCount = Math.ceil(W_PX / mtnDrawW) + 2;
    
    // Mountains move slower than ground but faster than sky
    // Use bgOffset variable which we update in update()
    for(let i = -1; i < mtnCount; i++) {
       const destX = (i * mtnDrawW) - (bgOffset % mtnDrawW);
       ctx.drawImage(IMG.mountains, 0, 0, mtnW, mtnH, destX, H_PX - mtnDrawH, mtnDrawW, mtnDrawH);
    }
    
    // 3. GROUND
    const tileDrawSize = 48;
    const tileCount = Math.ceil(W_PX / tileDrawSize) + 2;
    // Calculate scroll based on TOTAL distance (frames * variable speed is tricky if speed changes)
    // Simplified: Just accumulate scroll in a variable instead of calc from frames
    // But for preview, let's estimate tileScroll roughly
    // Better: Add groundScroll variable
    const scrollX = (frames * gameSpeed) % tileDrawSize; // Note: Visual glitches might occur when speed changes, acceptable for preview
    
    for (let i = 0; i < tileCount; i++) {
        const tx = i * tileDrawSize - scrollX;
        ctx.drawImage(IMG.tiles, 16, 0, 16, 16, tx, groundY, tileDrawSize, tileDrawSize);
        for (let j = 1; j < 4; j++) {
            ctx.drawImage(IMG.tiles, 272, 0, 16, 16, tx, groundY + j*tileDrawSize, tileDrawSize, tileDrawSize);
        }
    }
    
    ctx.filter = 'none';
    
    // PLAYER
    const p = player;
    let matrix;
    if (p.state === 'JUMP' || p.state === 'FALL') matrix = PLAYER_JUMP;
    else matrix = PLAYER_FRAMES[p.frameIndex % PLAYER_FRAMES.length];
    
    drawPixelArt(matrix, p.x, p.y, p.width);
    
    // ENEMIES (Use BOSS for Ground, EXTRA for Air)
    obstacles.forEach(obs => {
        let drawY = obs.y;
        if (obs.type === 'GROUND') {
            drawY += Math.abs(Math.sin(obs.bobPhase)) * 3;
            // Draw BrainGuy
             ctx.drawImage(
                IMG.boss,
                obs.variant * BRAINGUY_W, 0, BRAINGUY_W, BRAINGUY_H,
                obs.x - 6, drawY - 4,
                obs.width + 12, obs.height + 8
            );
        } else {
            // FLYING ENEMY (From Extra Sheet)
            // Extra sheet has 320x144. Let's pick a distinctive flyer at (0,0) size 40x40
            drawY += Math.sin(obs.bobPhase) * 6;
            ctx.drawImage(
                IMG.extraEnem,
                0, 0, 40, 40, // Source: First sprite 
                obs.x, drawY,
                32, 32 // Draw size
            );
        }
    });
    
    coins.forEach(coin => {
         // ... (Same coin drawing code)
         const floatY = Math.sin(frames * 0.08 + coin.x * 0.1) * 4;
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FACC15';
        ctx.fillStyle = '#FACC15';
        const cx = coin.x + coin.size/2;
        const cy = coin.y + coin.size/2 + floatY;
        const r = coin.size/2;
        ctx.beginPath();
        ctx.moveTo(cx, cy-r); ctx.lineTo(cx+r, cy);
        ctx.lineTo(cx, cy+r); ctx.lineTo(cx-r, cy);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#FDE68A';
        ctx.beginPath();
        ctx.moveTo(cx, cy-r*0.5); ctx.lineTo(cx+r*0.5, cy);
        ctx.lineTo(cx, cy+r*0.5); ctx.lineTo(cx-r*0.5, cy);
        ctx.closePath(); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.restore();
    });
    
    particles.forEach(part => {
        ctx.globalAlpha = Math.max(0, part.life);
        ctx.fillStyle = part.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = part.color;
        ctx.fillRect(part.x, part.y, 3, 3);
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    });

    // DISTANCE INDICATOR
    ctx.font = '10px "Press Start 2P"';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.textAlign = 'center';
    
    // Reuse dist declared in draw() scope if we used 'var', but here it's let/const in update vs draw.
    // Re-calculate safely
    if (dist > 0 && dist % 100 < 5 && gameState === 'PLAYING') {
         ctx.fillText(dist + 'm', W_PX/2, H_PX/2 - 50);
    }
}

// ============================================================
// GAME FLOW
// ============================================================
// ============================================================
// GAME FLOW
// ============================================================
function doJump() {
    if (gameState !== 'PLAYING') return;
    const p = player;
    // Reset jump if on ground (just in case)
    if (p.grounded) p.jumpCount = 0;
    
    if (p.jumpCount < p.maxJumps) {
        p.dy = JUMP_FORCE;
        p.grounded = false;
        p.jumpCount++;
    }
}

function doStart() {
    console.log('Starting Game...');
    const groundY = H_PX - 60;
    frames = 0; score = 0;
    
    // Reset Player
    player.y = groundY - player.height;
    player.dy = 0; 
    player.grounded = true; 
    player.jumpCount = 0;
    player.frameIndex = 0; 
    player.frameTimer = 0;
    player.x = 50; // Reset X position for biome calculation
    
    // Reset Objects
    obstacles = []; 
    coins = []; 
    particles = [];
    
    // Reset Offsets
    bgOffset = 0;
    midOffset = 0;
    currentHue = 0;
    
    gameState = 'PLAYING';
    
    // Hide Screens
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('scoreVal').textContent = '00000';
}
// Expose to window for HTML onclick
window.doStart = doStart;

function gameOver() {
    console.log('Game Over');
    gameState = 'GAMEOVER';
    document.getElementById('finalScore').textContent = score;
    document.getElementById('bonusText').textContent = '+' + score + ' DIEM THUONG 🎁';
    document.getElementById('gameOverScreen').style.display = 'flex';
}

// ============================================================
// GAME LOOP
// ============================================================
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// ============================================================
// INIT
// ============================================================
function init() {
    console.log('Init Game');
    canvas = document.getElementById('c');
    W_PX = 390; H_PX = 844;
    canvas.width = W_PX;
    canvas.height = H_PX;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    player.y = H_PX - 60 - player.height;
    
    // Input: TAP = JUMP (click wrapper)
    const wrap = document.getElementById('wrap');
    
    // Mouse Click
    wrap.addEventListener('mousedown', (e) => {
        if (gameState === 'PLAYING') { 
            e.preventDefault(); 
            doJump(); 
        }
    });
    
    // Touch
    wrap.addEventListener('touchstart', (e) => {
        if (gameState === 'PLAYING') { 
            e.preventDefault(); 
            doJump(); 
        }
    }, { passive: false });
    
    // Keyboard
    window.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (gameState === 'START') doStart();
            else if (gameState === 'PLAYING') doJump();
            else if (gameState === 'GAMEOVER') doStart();
        }
    });
    
    gameLoop();
}

// Start loading
loadAssets(init);
</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'public/game_preview.html'), html);
console.log('G-RUNNER Preview generated: public/game_preview.html');
console.log('Assets embedded: ' + Object.keys(A).length);
