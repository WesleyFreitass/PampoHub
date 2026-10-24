import React, { useEffect, useRef } from 'react';

export const OceanBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Marine bioluminescent particles & floating micro-bubbles
    const particleCount = 38;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      speedY: Math.random() * 0.35 + 0.15,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.45 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.4 ? '6, 182, 212' : '45, 212, 191', // Cyan / Marine Teal
    }));

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Draw subtle floating marine particles / plankton / bubbles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(time + p.pulse) * 0.25;
        p.pulse += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${currentOpacity})`;
        ctx.fill();

        // Subtle soft glow around larger particles
        if (p.size > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${currentOpacity * 0.2})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Deep Oceanic Abyss Gradient Canvas */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 130% 90% at 50% -10%, #0d2847 0%, #081a33 30%, #040e1e 65%, #020710 100%)'
        }}
      />

      {/* 2. Ethereal Underwater Light Shafts / Sun Rays radiating from surface */}
      <div className="absolute top-0 left-0 right-0 h-[650px] opacity-40 overflow-hidden mix-blend-screen">
        {/* Ray 1 (Left-Center) */}
        <div 
          className="absolute -top-20 left-[20%] w-[180px] h-[750px] bg-gradient-to-b from-cyan-400/25 via-teal-400/10 to-transparent transform -rotate-[18deg] blur-[35px] animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        {/* Ray 2 (Center-Right) */}
        <div 
          className="absolute -top-24 left-[52%] w-[220px] h-[820px] bg-gradient-to-b from-sky-400/25 via-cyan-500/10 to-transparent transform rotate-[12deg] blur-[45px] animate-pulse"
          style={{ animationDuration: '11s', animationDelay: '2s' }}
        />
        {/* Ray 3 (Right) */}
        <div 
          className="absolute -top-16 left-[78%] w-[150px] h-[680px] bg-gradient-to-b from-teal-300/20 via-cyan-600/10 to-transparent transform rotate-[25deg] blur-[40px] animate-pulse"
          style={{ animationDuration: '9.5s', animationDelay: '4s' }}
        />
      </div>

      {/* 3. Bathymetric Nautical Ocean Depth Curves (Seafloor Topography) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.09]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="oceanBathymetric" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        
        {/* Smooth Bathymetric Depth Contour Waves */}
        <path
          d="M-50,180 C280,120 540,240 820,170 C1100,100 1320,210 1500,150"
          fill="none"
          stroke="url(#oceanBathymetric)"
          strokeWidth="1.2"
        />
        <path
          d="M-50,310 C310,230 600,380 920,280 C1180,200 1340,320 1500,270"
          fill="none"
          stroke="url(#oceanBathymetric)"
          strokeWidth="1.2"
        />
        <path
          d="M-50,450 C240,380 520,510 840,430 C1120,350 1310,480 1500,420"
          fill="none"
          stroke="url(#oceanBathymetric)"
          strokeWidth="1.2"
        />
        <path
          d="M-50,600 C320,530 640,680 960,590 C1200,510 1350,620 1500,560"
          fill="none"
          stroke="url(#oceanBathymetric)"
          strokeWidth="1.2"
        />
        <path
          d="M-50,750 C260,690 560,820 890,730 C1170,660 1330,780 1500,720"
          fill="none"
          stroke="url(#oceanBathymetric)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 4. Canvas for Bioluminescent Particles & Micro-Bubbles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 5. Deep Abyss Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 160px rgba(1, 4, 10, 0.85)'
        }}
      />
    </div>
  );
};
