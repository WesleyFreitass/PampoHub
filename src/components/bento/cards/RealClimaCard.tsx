import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface RealClimaCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const RealClimaCard: React.FC<RealClimaCardProps> = ({
  url = 'https://realclima.pampo.tech',
  onOpenDetails,
}) => {
  return (
    <div className="group relative rounded-xl bg-gradient-to-r from-[#202d44] via-[#2c4254] to-[#1e485a] border border-white/10 hover:border-cyan-400/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-cyan-950/30 hover:shadow-2xl hover:shadow-cyan-950/50 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* RealClima Falling Rain Animation (como no app original) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="sky-rain-drop" style={{ left: '9%', height: '24px', animation: 'sky-rain-fall 0.85s linear infinite 0.1s' }} />
        <div className="sky-rain-drop" style={{ left: '22%', height: '30px', animation: 'sky-rain-fall 0.95s linear infinite 0.4s' }} />
        <div className="sky-rain-drop" style={{ left: '36%', height: '20px', animation: 'sky-rain-fall 0.75s linear infinite 0.2s' }} />
        <div className="sky-rain-drop" style={{ left: '50%', height: '28px', animation: 'sky-rain-fall 1.05s linear infinite 0.6s' }} />
        <div className="sky-rain-drop" style={{ left: '64%', height: '24px', animation: 'sky-rain-fall 0.80s linear infinite 0.15s' }} />
        <div className="sky-rain-drop" style={{ left: '76%', height: '32px', animation: 'sky-rain-fall 0.90s linear infinite 0.3s' }} />
        <div className="sky-rain-drop" style={{ left: '88%', height: '22px', animation: 'sky-rain-fall 1.10s linear infinite 0.5s' }} />
        <div className="sky-rain-drop" style={{ left: '96%', height: '18px', animation: 'sky-rain-fall 0.85s linear infinite 0.7s' }} />
      </div>

      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/15 via-blue-600/5 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60 z-0" />

      {/* Top Header: Title with gradient matching the original site */}
      <div className="relative z-10 flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent select-none">
          RealClima
        </h3>
      </div>

      {/* Description without technology tags */}
      <div className="relative z-10 my-2.5">
        <p className="text-xs sm:text-[13px] text-slate-200/90 leading-relaxed max-w-[280px]">
          Sistema avançado de previsão climática, radares meteorológicos e alertas atmosféricos em tempo real com interface interativa.
        </p>
      </div>

      {/* Bottom Bar: Action Button (no estilo do print do app) + Guaxinim Grande em destaque */}
      <div className="relative z-10 flex items-end justify-between pt-2">
        <div className="flex items-center gap-2">
          {/* Button styled in the tone of the app buttons (GPS tone: #354656) */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#354656] hover:bg-[#405467] border border-white/20 hover:border-white/30 text-slate-100 hover:text-white font-semibold text-xs tracking-tight shadow-md shadow-black/20 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
          >
            <span className="text-slate-100 group-hover/btn:text-white">Abrir App</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:text-cyan-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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

        {/* RealClima Icon: Guaxinim aumentado de volta, posicionado de forma imponente sem esticar o card */}
        <div className="absolute right-0 -bottom-2 sm:-bottom-3 pointer-events-none select-none">
          <img 
            src="/realclima.png" 
            alt="RealClima" 
            className="w-26 h-28 sm:w-30 sm:h-32 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

    </div>
  );
};
