import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface KaraokeCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const KaraokeCard: React.FC<KaraokeCardProps> = ({
  url = 'https://karaoke.pampo.tech',
  onOpenDetails,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const updateSize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Beams com cone volumétrico mais largo e linha central com glow (como no app original)
    const beams = [
      { startX: 0.10, targetX: 0.28, speed: 0.0022, phase: 0.0, color: [236, 72, 153], coneWidth: 38 },
      { startX: 0.22, targetX: 0.45, speed: 0.0018, phase: 1.2, color: [6, 182, 212], coneWidth: 44 },
      { startX: 0.35, targetX: 0.18, speed: 0.0025, phase: 2.4, color: [168, 85, 247], coneWidth: 36 },
      { startX: 0.50, targetX: 0.72, speed: 0.0020, phase: 0.9, color: [236, 72, 153], coneWidth: 46 },
      { startX: 0.65, targetX: 0.48, speed: 0.0019, phase: 3.1, color: [6, 182, 212], coneWidth: 42 },
      { startX: 0.78, targetX: 0.88, speed: 0.0024, phase: 1.7, color: [245, 158, 11], coneWidth: 35 },
      { startX: 0.85, targetX: 0.60, speed: 0.0021, phase: 4.2, color: [168, 85, 247], coneWidth: 42 },
      { startX: 0.88, targetX: 0.35, speed: 0.0017, phase: 2.8, color: [236, 72, 153], coneWidth: 45 },
    ];

    // Partículas flutuantes da pista
    const particles = Array.from({ length: 16 }, () => ({
      x: Math.random() * (canvas.width || 360),
      y: Math.random() * (canvas.height || 240),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.6,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? [236, 72, 153] : Math.random() > 0.5 ? [6, 182, 212] : [168, 85, 247],
    }));

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const time = Date.now();

      ctx.clearRect(0, 0, w, h);

      // Spots: Cone volumétrico mais largo + linha fina de alta luminosidade (lineWidth = 1.4, shadowBlur = 8)
      beams.forEach((beam) => {
        const sx = beam.startX * w;
        const sy = 0;
        const tx = (beam.targetX + Math.sin(time * beam.speed + beam.phase) * 0.16) * w;
        const ty = h * 0.98;

        // Cone de feixe de luz volumétrico suave e largo
        const halfW = beam.coneWidth;
        const grad = ctx.createLinearGradient(sx, sy, tx, ty);
        grad.addColorStop(0, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, 0.45)`);
        grad.addColorStop(0.3, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, 0.22)`);
        grad.addColorStop(0.7, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, 0.07)`);
        grad.addColorStop(1, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, 0)`);

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(tx - halfW, ty);
        ctx.lineTo(tx + halfW, ty);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Partículas de luz dispersas
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pulse = 0.3 + Math.sin(time * 0.003 + p.phase) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${pulse})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className="group relative rounded-xl border border-purple-500/25 hover:border-pink-500/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-purple-950/40 hover:shadow-2xl hover:shadow-purple-900/40 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* Fundo idêntico ao palco de karaoke.pampo.tech (Base #0b0d14 + radials) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 18% 20%, rgba(236, 72, 153, 0.22) 0%, transparent 60%),
            radial-gradient(circle at 82% 20%, rgba(6, 182, 212, 0.22) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.28) 0%, transparent 70%),
            radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.14) 0%, transparent 65%),
            #0b0d14
          `
        }}
      />

      {/* Canvas com spots de luz móveis em linhas finas (igual ao site original) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Globo de Luz Vintage (Estilo anterior restaurado, posicionado à direita) */}
      <div className="absolute top-0 right-8 pointer-events-none z-10 flex flex-col items-center">
        <div className="w-[1.5px] h-5 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-200" />
        <div className="relative w-11 h-11 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.45),0_0_10px_rgba(56,189,248,0.45)]">
          <svg viewBox="0 0 44 44" className="w-full h-full">
            <defs>
              <radialGradient id="karaokeDiscoGlow" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#e2e8f0" />
                <stop offset="55%" stopColor="#94a3b8" />
                <stop offset="85%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </radialGradient>
              <pattern id="karaokeDiscoGrid" width="5.5" height="5.5" patternUnits="userSpaceOnUse">
                <rect width="4.5" height="4.5" fill="none" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.65" />
              </pattern>
            </defs>
            <circle cx="22" cy="22" r="21" fill="url(#karaokeDiscoGlow)" />
            <circle cx="22" cy="22" r="21" fill="url(#karaokeDiscoGrid)" opacity="0.9" />
            <ellipse cx="15" cy="13" rx="6" ry="4" fill="#ffffff" opacity="0.65" transform="rotate(-20 15 13)" />
          </svg>
          <span className="absolute -top-1 -left-1 text-cyan-300 text-xs animate-ping font-serif select-none">✦</span>
          <span className="absolute bottom-0 -right-1 text-pink-300 text-[10px] animate-pulse font-serif select-none" style={{ animationDelay: '0.6s' }}>✦</span>
          <span className="absolute top-2 -right-2 text-yellow-200 text-xs animate-pulse font-serif select-none" style={{ animationDelay: '0.3s' }}>✦</span>
        </div>
      </div>

      {/* Top Header: Title matching Print (PAMPO KARAOKÊ in pink->purple->cyan gradient) + Subtitle */}
      <div className="relative z-10 flex flex-col items-start gap-1">
        <h3 className="text-xl sm:text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-[#f17abf] via-[#d9b4fe] to-[#6be6f9] bg-clip-text text-transparent select-none drop-shadow-[0_2px_10px_rgba(241,122,191,0.3)]">
          Pampo Karaokê
        </h3>
        <span className="text-[10px] font-bold tracking-widest text-[#6be6f9]/85 uppercase flex items-center gap-1.5 select-none">
          ★ DISCO & VINTAGE STAGE ★
        </span>
      </div>

      {/* Description from official website */}
      <div className="relative z-10 my-2.5">
        <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed max-w-[280px]">
          O seu palco inteligente: sincronização de letras em tempo real, fila colaborativa de músicas e faixas de alta qualidade.
        </p>
      </div>

      {/* Bottom Bar: Action Button (no microphone icon) */}
      <div className="relative z-10 flex items-end justify-between pt-2">
        <div className="flex items-center gap-2">
          {/* Action button styled in the exact gradient of the print (#e7479d -> #b73cc9 -> #9834e5) */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#e7479d] via-[#b73cc9] to-[#9834e5] hover:from-[#ec4899] hover:via-[#c084fc] hover:to-[#a855f7] text-white font-bold text-xs tracking-tight shadow-lg shadow-purple-950/60 border border-white/20 hover:scale-105 active:scale-95 transition-all duration-200 group/btn"
          >
            <span>Abrir App</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Detalhes
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
