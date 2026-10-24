import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FarolCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const FarolCard: React.FC<FarolCardProps> = ({
  url = 'https://farol.pampo.tech',
  onOpenDetails,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lanternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const startTime = Date.now();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || 380;
      canvas.height = canvas.parentElement?.clientHeight || 235;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Ponto de origem da lanterna exatamente sobre o topo do farol
      let ox = w - 68;
      let oy = h - 98;
      if (lanternRef.current && canvas) {
        const lRect = lanternRef.current.getBoundingClientRect();
        const cRect = canvas.getBoundingClientRect();
        if (lRect.width > 0 || lRect.left > 0) {
          ox = lRect.left - cRect.left + lRect.width / 2;
          oy = lRect.top - cRect.top + lRect.height / 2;
        }
      }

      // Ciclo contínuo de rotação igual ao farol.gif (~3.3s por volta)
      const time = (Date.now() - startTime) * 0.0019;
      const theta = time;

      // Feixes de Luz 3D Opostos (Projeção Cônica Rotacional do farol.gif)
      const L = Math.max(w, 420);
      const alpha = 0.26; // ~15 graus de abertura
      const R = L * Math.tan(alpha);

      // Ordenar por profundidade (sin(t)) para desenhar o feixe de trás primeiro
      const beams = [theta, theta + Math.PI];
      beams.sort((a, b) => Math.sin(a) - Math.sin(b));

      beams.forEach((t) => {
        const cosT = Math.cos(t);
        const sinT = Math.sin(t);

        const cx = ox + L * cosT;
        const cy = oy;
        const rx = Math.max(2, R * Math.abs(sinT));
        const ry = R;

        // Variação de opacidade por profundidade (frente = luminoso e aberto, fundo = suave)
        const alphaVal = sinT > 0 ? (0.32 + 0.28 * sinT) : (0.14 + 0.16 * (1 + sinT));

        ctx.beginPath();
        ctx.moveTo(ox, oy);

        const numArc = 24;
        const startAngle = -Math.PI / 2;
        const endAngle = Math.PI / 2;
        const dirSign = cosT >= 0 ? 1 : -1;

        for (let k = 0; k <= numArc; k++) {
          const ang = startAngle + (endAngle - startAngle) * (k / numArc);
          const ex = cx + rx * Math.cos(ang) * dirSign;
          const ey = cy + ry * Math.sin(ang);
          ctx.lineTo(ex, ey);
        }
        ctx.closePath();

        // Degradê luminoso radial do topo do farol para as pontas
        const grad = ctx.createRadialGradient(ox, oy, 10, ox, oy, L);
        grad.addColorStop(0, `rgba(255, 255, 220, ${alphaVal * 1.3})`);
        grad.addColorStop(0.25, `rgba(235, 240, 140, ${alphaVal})`);
        grad.addColorStop(0.7, `rgba(190, 220, 130, ${alphaVal * 0.7})`);
        grad.addColorStop(1, `rgba(120, 185, 145, 0)`);

        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Núcleo luminoso / Farol Central brilhante
      ctx.beginPath();
      ctx.arc(ox, oy, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(254, 240, 138, 0.95)';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 14;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(ox, oy, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="group relative rounded-xl bg-gradient-to-br from-[#060b14] via-[#091322] to-[#050810] border border-[#1e2a42] hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-amber-950/40 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* Background: Estante de Livros sutil e meio apagada em segundo plano */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-72 sm:w-84 pointer-events-none z-0 select-none overflow-hidden opacity-20 group-hover:opacity-35 transition-opacity duration-300"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, black 45%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, black 45%, black 100%)',
        }}
      >
        <svg viewBox="0 0 320 235" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="shelfWood" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d2617" />
              <stop offset="100%" stopColor="#1e120a" />
            </linearGradient>
          </defs>

          {/* Prateleira 1 (Superior) */}
          <rect x="20" y="106" width="300" height="3.5" rx="1" fill="url(#shelfWood)" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="0.8" />
          
          {/* Livros da Prateleira 1 */}
          <g>
            <rect x="32" y="46" width="12" height="60" rx="1.5" fill="#131e33" stroke="#253858" strokeWidth="0.8" />
            <line x1="34" y1="52" x2="42" y2="52" stroke="#f59e0b" strokeOpacity="0.35" strokeWidth="0.8" />
            <line x1="34" y1="98" x2="42" y2="98" stroke="#f59e0b" strokeOpacity="0.35" strokeWidth="0.8" />

            <rect x="46" y="38" width="15" height="68" rx="1.5" fill="#281419" stroke="#48222a" strokeWidth="0.8" />
            <line x1="48" y1="45" x2="59" y2="45" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />
            <line x1="48" y1="98" x2="59" y2="98" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />

            <rect x="63" y="52" width="11" height="54" rx="1.5" fill="#18202d" stroke="#2a3547" strokeWidth="0.8" />
            <line x1="65" y1="58" x2="72" y2="58" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="0.8" />

            <rect x="76" y="32" width="18" height="74" rx="2" fill="#2c1a0e" stroke="#4d2f19" strokeWidth="0.8" />
            <line x1="78" y1="40" x2="92" y2="40" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="78" y1="98" x2="92" y2="98" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />

            <rect x="96" y="44" width="13" height="62" rx="1.5" fill="#10251c" stroke="#1d4233" strokeWidth="0.8" />
            <line x1="98" y1="50" x2="107" y2="50" stroke="#10b981" strokeOpacity="0.35" strokeWidth="0.8" />

            <rect x="111" y="36" width="16" height="70" rx="1.5" fill="#181b36" stroke="#2d3361" strokeWidth="0.8" />
            <line x1="113" y1="44" x2="125" y2="44" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />

            <rect x="129" y="50" width="10" height="56" rx="1" fill="#1a1f26" stroke="#2c3440" strokeWidth="0.8" />

            <rect x="141" y="40" width="14" height="66" rx="1.5" fill="#2b151e" stroke="#4a2533" strokeWidth="0.8" />
            <line x1="143" y1="48" x2="153" y2="48" stroke="#f59e0b" strokeOpacity="0.35" strokeWidth="0.8" />

            <rect x="157" y="28" width="19" height="78" rx="2" fill="#12251a" stroke="#234530" strokeWidth="0.8" />
            <line x1="160" y1="36" x2="173" y2="36" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="160" y1="98" x2="173" y2="98" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />

            <rect x="178" y="46" width="12" height="60" rx="1.5" fill="#141d30" stroke="#263452" strokeWidth="0.8" />

            <g transform="rotate(8, 194, 106)">
              <rect x="192" y="40" width="14" height="66" rx="1.5" fill="#261710" stroke="#452a1d" strokeWidth="0.8" />
              <line x1="194" y1="47" x2="204" y2="47" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />
            </g>

            <rect x="214" y="34" width="16" height="72" rx="1.5" fill="#121b2d" stroke="#243454" strokeWidth="0.8" />
            <line x1="216" y1="42" x2="228" y2="42" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />

            <rect x="232" y="42" width="13" height="64" rx="1.5" fill="#201529" stroke="#3b264a" strokeWidth="0.8" />

            <rect x="247" y="30" width="17" height="76" rx="2" fill="#2e1a0b" stroke="#522f14" strokeWidth="0.8" />
            <line x1="249" y1="38" x2="262" y2="38" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="249" y1="98" x2="262" y2="98" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />

            <rect x="266" y="46" width="12" height="60" rx="1.5" fill="#0f2224" stroke="#1d3d40" strokeWidth="0.8" />
            <rect x="280" y="38" width="15" height="68" rx="1.5" fill="#29141c" stroke="#482431" strokeWidth="0.8" />
            <rect x="297" y="42" width="14" height="64" rx="1.5" fill="#141c2c" stroke="#25324d" strokeWidth="0.8" />
          </g>

          {/* Prateleira 2 (Inferior) */}
          <rect x="20" y="222" width="300" height="3.5" rx="1" fill="url(#shelfWood)" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="0.8" />

          {/* Livros da Prateleira 2 */}
          <g>
            <rect x="30" y="152" width="16" height="70" rx="1.5" fill="#2a180e" stroke="#4a2b19" strokeWidth="0.8" />
            <line x1="32" y1="160" x2="44" y2="160" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />

            <rect x="48" y="162" width="11" height="60" rx="1" fill="#171e28" stroke="#293444" strokeWidth="0.8" />
            <rect x="61" y="156" width="14" height="66" rx="1.5" fill="#141e30" stroke="#253452" strokeWidth="0.8" />

            <rect x="77" y="168" width="16" height="54" rx="1.5" fill="#271318" stroke="#43222a" strokeWidth="0.8" />
            <line x1="79" y1="174" x2="91" y2="174" stroke="#f59e0b" strokeOpacity="0.35" strokeWidth="0.8" />

            <rect x="95" y="146" width="18" height="76" rx="2" fill="#10241a" stroke="#1d3f2e" strokeWidth="0.8" />
            <line x1="97" y1="154" x2="111" y2="154" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="0.8" />

            <rect x="115" y="150" width="15" height="72" rx="1.5" fill="#161833" stroke="#2a2e5c" strokeWidth="0.8" />
            <rect x="132" y="160" width="12" height="62" rx="1.5" fill="#112228" stroke="#203a42" strokeWidth="0.8" />

            <g transform="rotate(-6, 150, 222)">
              <rect x="146" y="154" width="13" height="68" rx="1.5" fill="#241612" stroke="#422820" strokeWidth="0.8" />
              <line x1="148" y1="162" x2="157" y2="162" stroke="#f59e0b" strokeOpacity="0.35" strokeWidth="0.8" />
            </g>

            <rect x="166" y="148" width="16" height="74" rx="1.5" fill="#2a141b" stroke="#47232e" strokeWidth="0.8" />
            <line x1="168" y1="156" x2="180" y2="156" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />

            <rect x="184" y="158" width="13" height="64" rx="1.5" fill="#112318" stroke="#203d2b" strokeWidth="0.8" />

            <rect x="199" y="144" width="17" height="78" rx="2" fill="#2d190d" stroke="#4f2d18" strokeWidth="0.8" />
            <line x1="201" y1="152" x2="214" y2="152" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="201" y1="214" x2="214" y2="214" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="0.8" />

            <rect x="218" y="164" width="12" height="58" rx="1" fill="#161c28" stroke="#273244" strokeWidth="0.8" />
            <rect x="232" y="152" width="15" height="70" rx="1.5" fill="#221424" stroke="#3d2540" strokeWidth="0.8" />
            <rect x="249" y="148" width="18" height="74" rx="2" fill="#131b2c" stroke="#23304d" strokeWidth="0.8" />
            <rect x="269" y="156" width="13" height="66" rx="1.5" fill="#281a11" stroke="#472f1f" strokeWidth="0.8" />
            <rect x="284" y="150" width="16" height="72" rx="1.5" fill="#121824" stroke="#222b3d" strokeWidth="0.8" />
            <rect x="302" y="154" width="14" height="68" rx="1.5" fill="#27131a" stroke="#45232e" strokeWidth="0.8" />
          </g>
        </svg>
      </div>

      {/* Canvas da Luz 3D do Farol (Fiel ao farol.gif com feixes giratórios que iluminam a estante) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Céu noturno oceânico com estrelas sutis */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[18%] left-[12%] w-1 h-1 rounded-full bg-amber-200/50 animate-pulse" />
        <div className="absolute top-[35%] left-[45%] w-0.5 h-0.5 rounded-full bg-white/40" />
        <div className="absolute top-[12%] right-[32%] w-1 h-1 rounded-full bg-cyan-200/40" />
        <div className="absolute top-[52%] left-[24%] w-0.5 h-0.5 rounded-full bg-amber-100/35" />
        <div className="absolute top-[28%] right-[52%] w-0.5 h-0.5 rounded-full bg-white/30" />
      </div>

      {/* Top Header: Farol Brand + Subtitle */}
      <div className="relative z-10 flex flex-col gap-1">
        <h3 className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent select-none">
          Farol
        </h3>
        <p className="text-[11px] text-amber-300/70 font-medium tracking-tight">
          Registro, Emoções & Estatísticas
        </p>
      </div>

      {/* Description from official website with highlighted emotion */}
      <div className="relative z-10 my-2.5">
        <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed max-w-[280px]">
          Acompanhe suas leituras, registre cada página e sinta cada{' '}
          <span className="text-amber-400 font-semibold drop-shadow-sm">emoção</span>{' '}
          com radar inteligente de preços e progresso.
        </p>
      </div>

      {/* Bottom Bar: Action Button + Farol Lighthouse */}
      <div className="relative z-10 flex items-end justify-between pt-2">
        <div className="flex items-center gap-2">
          {/* Action button in the glowing warm orange/amber gradient from the website */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#ea580c] hover:from-[#fbbf24] hover:via-[#fb923c] hover:to-[#f97316] text-white font-bold text-xs tracking-tight shadow-lg shadow-orange-950/60 border border-amber-300/30 hover:scale-105 active:scale-95 transition-all duration-200 group/btn"
          >
            <span>Abrir App</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="px-3 py-2 rounded-lg text-xs text-amber-300/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              Detalhes
            </button>
          )}
        </div>

        {/* Farol Logo: Standardized size matching the other cards */}
        <div className="relative shrink-0 w-20 h-20 sm:w-22 sm:h-22 -mb-1 -mr-1 select-none">
          
          {/* Ponto de âncora da lanterna (topo do farol da logo) */}
          <div 
            ref={lanternRef}
            className="absolute pointer-events-none w-2 h-2"
            style={{ top: '18%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />

          {/* Imagem do Farol com Livro */}
          <img 
            src="/farol.png" 
            alt="Farol" 
            className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] relative z-20 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

    </div>
  );
};
