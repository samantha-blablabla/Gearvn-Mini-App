import React, { useRef, useEffect, useState } from 'react';
import { SpriteManager } from '../utils/SpriteManager';

interface MinigameScreenProps {
  onBack: () => void;
}

// --- GAME CONSTANTS ---
const GRAVITY = 0.45;
const JUMP_FORCE = -8.5;
const BASE_SPEED = 5; // Faster speed from Preview
const SPAWN_RATE = 180;
const COIN_SPAWN_RATE = 120;
const PIXEL_FONT = "'Press Start 2P', monospace";

const ASSETS = {
  BG_SKY: '/game-assets/oga-swm-bg-gradient-sky.png',
  BG_MOUNTAINS: '/game-assets/desertbg-pal00.png', // New Mountain Layer
  BG_MID: '/game-assets/oga-swm-bg-blobby.png',
  TILES: '/game-assets/oga-swm-tiles-alpha.png',
  TILES_EARTH: '/game-assets/oga-swm-earth-tile-variations-alpha.png', // New Earth Variations
  BRAINGUY: '/game-assets/oga-swm-brainguy-alpha.png',
};

const BRAINGUY_VARIANTS = 5;
const BRAINGUY_W = 91;
const BRAINGUY_H = 74;

// --- PLAYER PIXEL ART ---
const P = '#E30019';
const D = '#9A0007';
const G = '#FFC107';
const W = '#FFFFFF';
const B = '#111111';
const _: null = null;

const PLAYER_FRAMES = [
  [
    [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, P, P, W, W, P, P, W, W, P, _, _, _, _],
    [_, _, _, P, P, W, B, P, P, W, B, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, P, P, G, G, G, P, P, _, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, P, P, D, P, P, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, D, P, G, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, _, _, _, P, P, _, _, _, _, _],
    [_, _, _, P, P, _, _, _, _, _, P, P, _, _, _, _],
    [_, _, P, P, D, _, _, _, _, _, D, P, P, _, _, _],
    [_, _, P, D, D, _, _, _, _, _, D, D, P, _, _, _],
  ],
  [
    [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, P, P, W, W, P, P, W, W, P, _, _, _, _],
    [_, _, _, P, P, W, B, P, P, W, B, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, P, P, G, G, G, P, P, _, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, P, P, D, P, P, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, D, P, G, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, _, P, P, _, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, _, _, _, P, P, _, _, _, _, _],
    [_, _, _, D, P, P, _, _, _, P, P, D, _, _, _, _],
    [_, _, _, D, D, P, _, _, _, P, D, D, _, _, _, _],
  ],
  [
    [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, P, P, W, W, P, P, W, W, P, _, _, _, _],
    [_, _, _, P, P, W, B, P, P, W, B, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, P, P, G, G, G, P, P, _, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, P, P, D, P, P, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, D, P, G, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, _, _, _, _, P, P, _, _, _, _],
    [_, _, _, P, D, _, _, _, _, _, _, D, P, _, _, _],
    [_, _, _, P, D, _, _, _, _, _, _, D, P, _, _, _],
    [_, _, P, D, D, _, _, _, _, _, _, D, D, P, _, _],
  ],
  [
    [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, P, P, W, W, P, P, W, W, P, _, _, _, _],
    [_, _, _, P, P, W, B, P, P, W, B, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, P, P, G, G, G, P, P, _, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, P, P, P, P, P, _, _, _, _, _],
    [_, _, _, P, P, D, P, P, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, D, P, G, P, D, P, P, _, _, _, _],
    [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
    [_, _, _, _, P, P, D, _, D, P, P, _, _, _, _, _],
    [_, _, _, _, P, D, D, _, D, D, P, _, _, _, _, _],
    [_, _, _, _, D, D, _, _, _, D, D, _, _, _, _, _],
  ],
];

const PLAYER_JUMP = [
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, P, P, P, P, P, P, P, P, _, _, _, _],
  [_, _, _, P, P, W, W, P, P, W, W, P, _, _, _, _],
  [_, _, _, P, P, W, B, P, P, W, B, P, _, _, _, _],
  [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
  [_, _, _, _, P, P, G, G, G, P, P, _, _, _, _, _],
  [_, _, G, _, _, P, P, P, P, P, _, _, G, _, _, _],
  [_, G, G, _, P, P, P, P, P, P, P, _, G, G, _, _],
  [_, _, G, P, P, D, P, P, P, D, P, P, G, _, _, _],
  [_, _, _, P, P, D, P, G, P, D, P, P, _, _, _, _],
  [_, _, _, P, P, P, P, P, P, P, P, P, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, P, P, D, _, D, P, P, _, _, _, _, _],
  [_, _, _, P, P, D, _, _, _, D, P, P, _, _, _, _],
  [_, _, _, D, D, _, _, _, _, _, D, D, _, _, _, _],
];

function drawPixelArt(
  ctx: CanvasRenderingContext2D,
  matrix: (string | null)[][],
  dx: number, dy: number,
  size: number
) {
  const cellSize = size / 16;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const color = matrix[row][col];
      if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(
          Math.floor(dx + col * cellSize),
          Math.floor(dy + row * cellSize),
          Math.ceil(cellSize),
          Math.ceil(cellSize)
        );
      }
    }
  }
}

interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'GROUND' | 'FLYING';
  variant: number;
  chaseSpeed: number; // SPEED
  bobPhase: number; // ANIMATION
}

const MinigameScreen: React.FC<MinigameScreenProps> = ({ onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'LOADING' | 'START' | 'PLAYING' | 'GAMEOVER'>('LOADING');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const brainguyImgRef = useRef<HTMLImageElement | null>(null);

  const gameRef = useRef({
    frames: 0,
    score: 0,
    spriteManager: null as SpriteManager | null,
    player: {
      x: 50,
      y: 200,
      width: 48,
      height: 48,
      dy: 0,
      jumpCount: 0,
      maxJumps: 2,
      grounded: false,
      state: 'RUN' as 'RUN' | 'JUMP' | 'FALL',
      frameIndex: 0,
      frameTimer: 0,
    },
    obstacles: [] as Obstacle[],
    particles: [] as { x: number; y: number; vx: number; vy: number; life: number; color: string }[],
    coins: [] as { x: number; y: number; size: number; }[],
    backgroundOffset: 0,
    midgroundOffset: 0,
    mtnOffset: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load brainguy sprites
    const brainguyImg = new Image();
    brainguyImg.src = ASSETS.BRAINGUY;
    brainguyImgRef.current = brainguyImg;

    let bgLoaded = false;
    let enemyLoaded = false;

    const checkReady = () => {
      if (bgLoaded && enemyLoaded) {
        setGameState((prev) => prev === 'LOADING' ? 'START' : prev);
      }
    };

    brainguyImg.onload = () => { enemyLoaded = true; checkReady(); };
    brainguyImg.onerror = () => { enemyLoaded = true; checkReady(); };

    const spriteManager = new SpriteManager(() => {
      bgLoaded = true;
      checkReady();
    });
    gameRef.current.spriteManager = spriteManager;
    spriteManager.loadImages({
      BG_SKY: ASSETS.BG_SKY,
      BG_MOUNTAINS: ASSETS.BG_MOUNTAINS,
      BG_MID: ASSETS.BG_MID,
      TILES: ASSETS.TILES,
    });

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gameRef.current.player.y = canvas.height - 110;
    };
    window.addEventListener('resize', resize);
    resize();

    let animationId: number;

    const update = () => {
      if (gameState !== 'PLAYING') return;
      const state = gameRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const groundY = height - 60;

      state.frames++;
      state.mtnOffset += BASE_SPEED * 0.3;
      state.midgroundOffset += BASE_SPEED * 0.5; // Blobby moves slower than ground
      // state.frames handled below

      const p = state.player;
      p.dy += GRAVITY;
      p.y += p.dy;

      if (p.dy < 0) p.state = 'JUMP';
      else if (p.dy > 0 && !p.grounded) p.state = 'FALL';
      else p.state = 'RUN';

      p.frameTimer++;
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

      // Enemy Spawn (Random variants)
      if (state.frames % SPAWN_RATE === 0) {
        const type = Math.random() > 0.7 ? 'FLYING' : 'GROUND';
        const isGround = type === 'GROUND';
        state.obstacles.push({
          x: width + 20,
          y: isGround ? groundY - 46 : groundY - 90,
          width: 46,
          height: 46,
          type,
          variant: Math.floor(Math.random() * BRAINGUY_VARIANTS),
          // ACTIVE MOVEMENT: Ground enemies crawl slowly toward player
          chaseSpeed: isGround ? 0.2 + Math.random() * 0.4 : 0,
          bobPhase: Math.random() * Math.PI * 2,
        });
      }

      // Coins
      if (state.frames % COIN_SPAWN_RATE === 0) {
        const numCoins = 1 + Math.floor(Math.random() * 3);
        for (let c = 0; c < numCoins; c++) {
          state.coins.push({
            x: width + 20 + (c * 30),
            y: groundY - 80 - Math.random() * 40,
            size: 18,
          });
        }
      }

      // Update Obstacles
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        obs.x -= BASE_SPEED + obs.chaseSpeed; // Scroll + Crawl
        obs.bobPhase += 0.08; // Animation

        const hitPad = 8;
        if (
          p.x + hitPad < obs.x + obs.width &&
          p.x + p.width - hitPad > obs.x &&
          p.y + hitPad < obs.y + obs.height &&
          p.y + p.height - hitPad > obs.y
        ) {
          createExplosion(p.x + p.width / 2, p.y + p.height / 2, '#E30019');
          setGameState('GAMEOVER');
          if (state.score > highScore) setHighScore(state.score);
        }
        if (obs.x + obs.width < -50) {
          state.obstacles.splice(i, 1);
          state.score += 5;
          setScore(state.score);
        }
      }

      // Update Coins
      for (let i = state.coins.length - 1; i >= 0; i--) {
        const coin = state.coins[i];
        coin.x -= BASE_SPEED;
        const dx = (p.x + p.width / 2) - (coin.x + coin.size / 2);
        const dy = (p.y + p.height / 2) - (coin.y + coin.size / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < p.width / 2 + coin.size) {
          state.coins.splice(i, 1);
          state.score += 10;
          setScore(state.score);
          createExplosion(coin.x, coin.y, '#FACC15');
          if (navigator.vibrate) navigator.vibrate(30);
        } else if (coin.x + coin.size < 0) {
          state.coins.splice(i, 1);
        }
      }

      // Update Particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const part = state.particles[i];
        part.x += part.vx;
        part.y += part.vy;
        part.life -= 0.04;
        if (part.life <= 0) state.particles.splice(i, 1);
      }
    };

    const draw = () => {
      const state = gameRef.current;
      const sm = state.spriteManager;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, width, height);
      if (!sm) return;

      const groundY = height - 60;

      // PARALLAX BG (Static Theme)
      // 1. SKY (Fixed)
      sm.drawSprite(ctx, 'BG_SKY', 0, 0, 320, 240, 0, 0, width, height);

      // 2. MOUNTAINS (Parallax 0.3)
      const mtnW = 320;
      const mtnH = 320;
      const mtnDrawH = height * 0.7;
      const mtnDrawW = mtnDrawH; // Square asset aspect ratio
      const mtnCount = Math.ceil(width / mtnDrawW) + 2;

      for (let i = -1; i < mtnCount; i++) {
        const destX = (i * mtnDrawW) - (state.mtnOffset % mtnDrawW);
        sm.drawSprite(ctx, 'BG_MOUNTAINS', 0, 0, mtnW, mtnH, destX, height - mtnDrawH, mtnDrawW, mtnDrawH);
      }

      // 3. MIDGROUND BLOBBY (Parallax 0.5, Transparent)
      const blobW = height * 2; // Stretch standard
      const blobH = height;
      const blobOffset = state.midgroundOffset % blobW;

      ctx.globalAlpha = 0.6;
      sm.drawSprite(ctx, 'BG_MID', 0, 0, 320, 256, -blobOffset, 0, blobW, blobH);
      sm.drawSprite(ctx, 'BG_MID', 0, 0, 320, 256, -blobOffset + blobW, 0, blobW, blobH);
      ctx.globalAlpha = 1.0;

      // GROUND
      const tileDrawSize = 48;
      const tileCount = Math.ceil(width / tileDrawSize) + 2;
      const scrollX = (state.frames * BASE_SPEED) % tileDrawSize;
      for (let i = 0; i < tileCount; i++) {
        sm.drawTile(ctx, 'TILES', 1, 16, (i * tileDrawSize) - scrollX, groundY, tileDrawSize);
        for (let j = 1; j < 4; j++) {
          sm.drawTile(ctx, 'TILES', 17, 16, (i * tileDrawSize) - scrollX, groundY + (j * tileDrawSize), tileDrawSize);
        }
      }

      // PLAYER
      const p = state.player;
      let matrix: (string | null)[][];
      if (p.state === 'JUMP' || p.state === 'FALL') {
        matrix = PLAYER_JUMP;
      } else {
        matrix = PLAYER_FRAMES[p.frameIndex % PLAYER_FRAMES.length];
      }
      drawPixelArt(ctx, matrix, p.x, p.y, p.width);

      // ENEMIES (Sprites with Animation)
      const bgImg = brainguyImgRef.current;
      state.obstacles.forEach(obs => {
        if (bgImg && bgImg.complete && bgImg.naturalHeight > 0) {
          const sx = obs.variant * BRAINGUY_W;

          // Animation: Ground bob vs Flying float
          let drawY = obs.y;
          if (obs.type === 'GROUND') {
            drawY += Math.abs(Math.sin(obs.bobPhase)) * 3; // Bob while running
          } else {
            drawY += Math.sin(obs.bobPhase) * 6; // Float
          }

          ctx.drawImage(
            bgImg,
            sx, 0, BRAINGUY_W, BRAINGUY_H,
            obs.x - 6, drawY - 4,
            obs.width + 12, obs.height + 8
          );
        } else {
          ctx.fillStyle = '#7C3AED';
          ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        }
      });

      // COINS
      state.coins.forEach(coin => {
        const floatY = Math.sin(state.frames * 0.08 + coin.x * 0.1) * 4;
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FACC15';
        ctx.fillStyle = '#FACC15';
        const cx = coin.x + coin.size / 2;
        const cy = coin.y + coin.size / 2 + floatY;
        const r = coin.size / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r);
        ctx.lineTo(cx + r, cy);
        ctx.lineTo(cx, cy + r);
        ctx.lineTo(cx - r, cy);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#FDE68A';
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.5);
        ctx.lineTo(cx + r * 0.5, cy);
        ctx.lineTo(cx, cy + r * 0.5);
        ctx.lineTo(cx - r * 0.5, cy);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.restore();
      });

      // PARTICLES
      state.particles.forEach(part => {
        ctx.globalAlpha = Math.max(0, part.life);
        ctx.fillStyle = part.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = part.color;
        ctx.fillRect(part.x, part.y, 3, 3);
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // HUD (Pixel Font)
      ctx.font = `8px ${PIXEL_FONT}`;
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.textAlign = 'right';
      ctx.fillText('SCORE', width - 16, 22);
      ctx.font = `18px ${PIXEL_FONT}`;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(state.score.toString().padStart(5, '0'), width - 16, 44);
      if (highScore > 0) {
        ctx.font = `7px ${PIXEL_FONT}`;
        ctx.fillStyle = '#FACC15';
        ctx.fillText('BEST: ' + highScore, width - 16, 56);
      }
    };

    const createExplosion = (x: number, y: number, color: string) => {
      for (let i = 0; i < 12; i++) {
        gameRef.current.particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 0.8 + Math.random() * 0.3,
          color
        });
      }
    };

    const loop = () => {
      update();
      draw();
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [gameState]);

  const handleJump = () => {
    const p = gameRef.current.player;
    if (p.grounded || p.jumpCount < p.maxJumps) {
      p.dy = JUMP_FORCE;
      p.grounded = false;
      p.jumpCount++;
    }
  };

  const startGame = () => {
    const canvas = canvasRef.current;
    const groundY = canvas ? canvas.height - 60 : 300;
    gameRef.current.frames = 0;
    gameRef.current.score = 0;
    gameRef.current.player.y = groundY - 48;
    gameRef.current.player.dy = 0;
    gameRef.current.player.grounded = true;
    gameRef.current.player.jumpCount = 0;
    gameRef.current.obstacles = [];
    gameRef.current.coins = [];
    gameRef.current.particles = [];
    setScore(0);
    setGameState('PLAYING');
  };

  const handleScreenClick = () => {
    if (gameState === 'PLAYING') handleJump();
  };

  const pxFont = { fontFamily: PIXEL_FONT };

  return (
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full bg-black z-50 flex flex-col select-none"
      onMouseDown={handleScreenClick}
      onTouchStart={(e) => { e.preventDefault(); handleScreenClick(); }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ imageRendering: 'pixelated' }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col p-4 pt-[calc(env(safe-area-inset-top)+12px)] pb-[calc(env(safe-area-inset-bottom)+12px)]">

        {/* Back button only during gameplay */}
        {gameState === 'PLAYING' && (
          <div className="flex justify-start">
            <button
              onClick={(e) => { e.stopPropagation(); onBack(); }}
              className="pointer-events-auto size-10 bg-black/50 rounded-lg flex items-center justify-center border-2 border-white/20 text-white active:scale-95"
            >
              <i className="ph ph-caret-left text-lg"></i>
            </button>
          </div>
        )}

        {/* Loading Screen */}
        {gameState === 'LOADING' && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-6">
              <div className="w-6 h-6 border-2 border-white/20 border-t-[#E30019] rounded-sm animate-spin"></div>
              <div className="text-white/60 text-[8px] tracking-wider" style={pxFont}>LOADING...</div>
            </div>
          </div>
        )}

        {/* Start Screen */}
        {gameState === 'START' && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center pointer-events-auto z-50 px-6">
            <h1 className="text-[24px] text-[#E30019] text-center mb-2" style={pxFont}>G-RUNNER</h1>
            <p className="text-[7px] text-gray-500 mb-2 tracking-[4px]" style={pxFont}>GEARVN SYNC</p>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#E30019] to-transparent mb-6"></div>
            <p className="text-[8px] text-gray-400 mb-10 text-center leading-relaxed" style={pxFont}>
              Thu thap chip de<br />tich diem doi qua!
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); startGame(); }}
              className="relative w-full max-w-[260px] h-[52px] bg-[#E30019] text-white text-[12px] border-b-4 border-r-4 border-[#9A0007] active:scale-95 transition-all text-center flex items-center justify-center"
              style={pxFont}
            >
              ▶ BAT DAU
            </button>
            <div className="mt-8 flex items-center gap-8 text-[7px] text-gray-600" style={pxFont}>
              <span>TAP = NHAY</span>
              <span>x2 = DOUBLE</span>
            </div>
          </div>
        )}

        {/* Game Over Screen */}
        {gameState === 'GAMEOVER' && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center pointer-events-auto z-50 px-6">
            <div className="text-[32px] mb-4" style={pxFont}>💥</div>
            <h2 className="text-[16px] text-white mb-1 tracking-wide" style={pxFont}>GAME OVER</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
            <div className="w-full max-w-[240px] border-2 border-white/20 bg-black/60 p-5 mb-8 text-center">
              <p className="text-[7px] text-white/40 mb-3 tracking-[3px]" style={pxFont}>SCORE</p>
              <p className="text-[36px] text-white leading-none" style={pxFont}>{score}</p>
              <div className="mt-4 text-[7px] text-yellow-400" style={pxFont}>+{score} DIEM THUONG 🎁</div>
            </div>
            <div className="w-full max-w-[240px] flex flex-col gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); startGame(); }}
                className="w-full h-[46px] bg-white text-black text-[10px] border-b-4 border-r-4 border-gray-400 active:scale-95 transition-all flex items-center justify-center gap-2"
                style={pxFont}
              >
                ↻ CHOI LAI
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onBack(); }}
                className="w-full h-[46px] bg-transparent text-white/70 text-[10px] border-2 border-white/20 active:bg-white/10 transition-all flex items-center justify-center gap-2"
                style={pxFont}
              >
                ← QUAY LAI
              </button>
            </div>
            {highScore > 0 && (
              <div className="mt-6 text-[7px] text-yellow-400/70" style={pxFont}>BEST: {highScore}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MinigameScreen;

