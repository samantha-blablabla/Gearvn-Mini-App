import React, { useRef, useEffect, useState } from 'react';

interface MinigameScreenProps {
  onBack: () => void;
}

// --- GAME CONSTANTS ---
const GRAVITY = 0.6;
const JUMP_FORCE = -10;
const SPEED = 5;
const SPAWN_RATE = 100; // Frames

const MinigameScreen: React.FC<MinigameScreenProps> = ({ onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'GAMEOVER'>('START');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Game Ref to hold mutable data without re-renders
  const gameRef = useRef({
    frames: 0,
    score: 0,
    player: {
      x: 50,
      y: 200,
      width: 30,
      height: 30,
      dy: 0,
      jumpCount: 0,
      maxJumps: 2,
      grounded: false,
    },
    obstacles: [] as { x: number; y: number; width: number; height: number; type: 'GROUND' | 'FLYING' }[],
    particles: [] as { x: number; y: number; vx: number; vy: number; life: number; color: string }[],
    coins: [] as { x: number; y: number; size: number; collected: boolean }[],
    backgroundOffset: 0,
  });

  // --- ENGINE ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fit container
    const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        // Reset player to ground
        gameRef.current.player.y = canvas.height - 100;
    };
    window.addEventListener('resize', resize);
    resize();

    let animationId: number;

    const update = () => {
      if (gameState !== 'PLAYING') return;

      const state = gameRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const groundY = height - 50;

      state.frames++;
      state.backgroundOffset += 2;

      // 1. Player Physics
      const p = state.player;
      p.dy += GRAVITY;
      p.y += p.dy;

      // Ground Collision
      if (p.y + p.height >= groundY) {
        p.y = groundY - p.height;
        p.dy = 0;
        p.grounded = true;
        p.jumpCount = 0;
      } else {
        p.grounded = false;
      }

      // 2. Obstacles Spawning
      if (state.frames % SPAWN_RATE === 0) {
        const type = Math.random() > 0.6 ? 'FLYING' : 'GROUND';
        state.obstacles.push({
          x: width,
          y: type === 'FLYING' ? groundY - 90 : groundY - 40,
          width: 40,
          height: 40,
          type,
        });
      }

      // 3. Coins Spawning
      if (state.frames % 150 === 0) {
          state.coins.push({
              x: width,
              y: groundY - 120 - Math.random() * 50,
              size: 20,
              collected: false
          });
      }

      // 4. Update Obstacles
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        obs.x -= SPEED;

        // Collision Detection (AABB)
        if (
          p.x < obs.x + obs.width &&
          p.x + p.width > obs.x &&
          p.y < obs.y + obs.height &&
          p.y + p.height > obs.y
        ) {
          // HIT!
          createExplosion(p.x + p.width/2, p.y + p.height/2, '#E30019');
          setGameState('GAMEOVER');
          if (state.score > highScore) setHighScore(state.score);
        }

        // Remove off-screen
        if (obs.x + obs.width < 0) {
          state.obstacles.splice(i, 1);
          state.score += 10; // Pass obstacle score
          setScore(state.score);
        }
      }

      // 5. Update Coins
      for (let i = state.coins.length - 1; i >= 0; i--) {
          const coin = state.coins[i];
          coin.x -= SPEED;

          // Collection
          const dx = (p.x + p.width/2) - (coin.x + coin.size/2);
          const dy = (p.y + p.height/2) - (coin.y + coin.size/2);
          const distance = Math.sqrt(dx*dx + dy*dy);

          if (distance < p.width/2 + coin.size/2) {
              state.coins.splice(i, 1);
              state.score += 50;
              setScore(state.score);
              createExplosion(coin.x, coin.y, '#FACC15'); // Yellow sparkles
              // Haptic feedback
              if (navigator.vibrate) navigator.vibrate(50);
          } else if (coin.x + coin.size < 0) {
              state.coins.splice(i, 1);
          }
      }

      // 6. Update Particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
          const part = state.particles[i];
          part.x += part.vx;
          part.y += part.vy;
          part.life -= 0.05;
          if(part.life <= 0) state.particles.splice(i, 1);
      }
    };

    const draw = () => {
      const state = gameRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const groundY = height - 50;

      // Clear Screen
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, width, height);

      // Draw Background (Cyber Grid)
      ctx.strokeStyle = '#222';
      ctx.lineWidth = 1;
      const gridSize = 40;
      const offset = state.backgroundOffset % gridSize;
      
      // Vertical lines moving left
      for (let x = -offset; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      // Horizontal lines (Perspective floor)
      for (let y = groundY; y < height; y += 10) {
         ctx.beginPath();
         ctx.moveTo(0, y);
         ctx.lineTo(width, y);
         ctx.stroke();
      }

      // Draw Ground Line
      ctx.fillStyle = '#222';
      ctx.fillRect(0, groundY, width, height - groundY);
      ctx.strokeStyle = '#E30019'; // Primary Red
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      // Draw Player (Blue Neon Robot Placeholder)
      const p = state.player;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00f';
      ctx.fillStyle = '#00f'; // Blue
      ctx.fillRect(p.x, p.y, p.width, p.height);
      
      // Player Eye
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#fff';
      ctx.fillRect(p.x + 20, p.y + 5, 6, 6);

      // Draw Obstacles (Red Neon Spikes/Drones)
      state.obstacles.forEach(obs => {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#ff0000';
          ctx.fillStyle = '#ff0000';
          if (obs.type === 'GROUND') {
              // Draw Spike
              ctx.beginPath();
              ctx.moveTo(obs.x, obs.y + obs.height);
              ctx.lineTo(obs.x + obs.width/2, obs.y);
              ctx.lineTo(obs.x + obs.width, obs.y + obs.height);
              ctx.fill();
          } else {
              // Draw Drone
              ctx.beginPath();
              ctx.arc(obs.x + obs.width/2, obs.y + obs.height/2, obs.width/2, 0, Math.PI * 2);
              ctx.fill();
              // Drone Eye
              ctx.fillStyle = '#fff';
              ctx.fillRect(obs.x + 10, obs.y + 15, 5, 5);
          }
      });

      // Draw Coins (Yellow Chips)
      state.coins.forEach(coin => {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#FACC15';
          ctx.strokeStyle = '#FACC15';
          ctx.lineWidth = 2;
          
          ctx.save();
          ctx.translate(coin.x + coin.size/2, coin.y + coin.size/2);
          ctx.rotate(state.frames * 0.1);
          ctx.strokeRect(-coin.size/2, -coin.size/2, coin.size, coin.size);
          ctx.restore();
      });

      // Draw Particles
      state.particles.forEach(part => {
          ctx.globalAlpha = part.life;
          ctx.fillStyle = part.color;
          ctx.beginPath();
          ctx.arc(part.x, part.y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
      });

      // Reset Shadow
      ctx.shadowBlur = 0;
    };

    const createExplosion = (x: number, y: number, color: string) => {
        for(let i=0; i<10; i++) {
            gameRef.current.particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 1.0,
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

    return () => cancelAnimationFrame(animationId);
  }, [gameState]);

  // --- CONTROLS ---
  const handleJump = () => {
      const p = gameRef.current.player;
      if (p.grounded || p.jumpCount < p.maxJumps) {
          p.dy = JUMP_FORCE;
          p.grounded = false;
          p.jumpCount++;
          // Sound effect placeholder
          // playJumpSound(); 
      }
  };

  const startGame = () => {
      // Reset Game
      gameRef.current.score = 0;
      gameRef.current.player.y = 200;
      gameRef.current.player.dy = 0;
      gameRef.current.obstacles = [];
      gameRef.current.coins = [];
      gameRef.current.particles = [];
      setScore(0);
      setGameState('PLAYING');
  };

  // Touch/Click handler for the whole screen
  const handleScreenClick = () => {
      if (gameState === 'PLAYING') {
          handleJump();
      }
  };

  return (
    <div 
        className="min-h-screen bg-black relative overflow-hidden flex flex-col font-sans select-none"
        onMouseDown={handleScreenClick}
        onTouchStart={handleScreenClick}
    >
      {/* Game Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 pb-[calc(env(safe-area-inset-bottom)+20px)]">
         {/* Top HUD */}
         <div className="flex justify-between items-start pt-[calc(env(safe-area-inset-top)+10px)]">
             <button 
                onClick={(e) => { e.stopPropagation(); onBack(); }}
                className="pointer-events-auto size-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white active:scale-95"
             >
                <i className="ph-bold ph-caret-left text-xl"></i>
             </button>

             <div className="flex flex-col items-end">
                 <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">SCORE</div>
                 <div className="text-[32px] font-black text-white font-mono leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                     {score.toString().padStart(5, '0')}
                 </div>
                 {highScore > 0 && (
                     <div className="text-[10px] font-bold text-yellow-400 mt-1">HI: {highScore}</div>
                 )}
             </div>
         </div>

         {/* Start Screen */}
         {gameState === 'START' && (
             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-auto z-50">
                 <h1 className="text-[40px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E30019] to-orange-500 italic tracking-tighter -rotate-2 drop-shadow-lg mb-2">
                     G-RUNNER
                 </h1>
                 <p className="text-gray-400 text-[14px] mb-8 font-mono">MISSION: COLLECT CHIPS & SURVIVE</p>
                 
                 <div className="flex gap-4">
                     <button 
                        onClick={(e) => { e.stopPropagation(); startGame(); }}
                        className="h-14 px-10 bg-primary text-white font-bold rounded-[16px] shadow-[0_0_20px_rgba(227,0,25,0.5)] active:scale-95 transition-all flex items-center gap-2"
                     >
                         <i className="ph-fill ph-play"></i> START MISSION
                     </button>
                 </div>
                 
                 <div className="mt-8 flex items-center gap-4 text-gray-500 text-[12px]">
                     <span className="flex items-center gap-1"><i className="ph-bold ph-hand-tap"></i> Tap to Jump</span>
                     <span className="flex items-center gap-1"><i className="ph-bold ph-hand-tap"></i><i className="ph-bold ph-hand-tap"></i> Double Jump</span>
                 </div>
             </div>
         )}

         {/* Game Over Screen */}
         {gameState === 'GAMEOVER' && (
             <div className="absolute inset-0 bg-red-900/40 backdrop-blur-md flex flex-col items-center justify-center pointer-events-auto z-50 animate-in zoom-in duration-300">
                 <i className="ph-fill ph-warning-octagon text-6xl text-red-500 mb-4 animate-bounce"></i>
                 <h2 className="text-[32px] font-black text-white italic uppercase tracking-wider mb-1">SYSTEM FAILURE</h2>
                 <p className="text-red-200 text-[14px] mb-6">You crashed!</p>
                 
                 <div className="bg-black/40 p-4 rounded-[16px] border border-white/10 mb-8 min-w-[200px] text-center">
                     <p className="text-[12px] text-gray-400 uppercase tracking-widest mb-1">Total Score</p>
                     <p className="text-[40px] font-black text-white font-mono">{score}</p>
                 </div>

                 <div className="flex flex-col gap-3 w-full max-w-xs px-6">
                     <button 
                        onClick={(e) => { e.stopPropagation(); startGame(); }}
                        className="h-14 w-full bg-white text-black font-bold rounded-[16px] shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                     >
                         <i className="ph-bold ph-arrows-clockwise text-xl"></i> RETRY
                     </button>
                     <button 
                        onClick={(e) => { e.stopPropagation(); onBack(); }}
                        className="h-14 w-full bg-black/50 text-white font-bold rounded-[16px] border border-white/20 active:scale-95 transition-all"
                     >
                         EXIT
                     </button>
                 </div>
             </div>
         )}
      </div>
    </div>
  );
};

export default MinigameScreen;