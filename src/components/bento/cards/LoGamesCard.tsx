import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LoGamesCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const LoGamesCard: React.FC<LoGamesCardProps> = ({
  url = 'https://logames.pampo.tech',
  onOpenDetails,
}) => {
  return (
    <div className="group relative rounded-xl bg-gradient-to-b from-[#080E1B] via-[#0D1629] to-[#060A13] border border-emerald-500/20 hover:border-emerald-400/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/50 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* Background: Matriz Cartesiana sutil em segundo plano */}
      <div className="absolute right-5 top-5 bottom-5 w-44 sm:w-48 pointer-events-none z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 select-none overflow-hidden">
        <div 
          className="w-full h-full rounded-lg border border-emerald-500/30 relative"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(16, 185, 129, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.16) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        >
          {/* Eixo Central Vertical (Y) */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-emerald-400/50" />
          {/* Eixo Central Horizontal (X) */}
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-emerald-400/50" />

          {/* Rótulos dos eixos da Matriz */}
          <span className="absolute top-1 left-1.5 text-[8px] font-mono text-emerald-400/80 font-bold select-none">
            +Qualidade
          </span>
          <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-cyan-400/80 font-bold select-none">
            +Interesse →
          </span>

          {/* Pontos de luz nos 4 quadrantes da Matriz */}
          <span className="absolute top-5 right-8 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)] animate-pulse" />
          <span className="absolute top-7 left-8 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
          <span className="absolute bottom-7 left-10 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
          <span className="absolute bottom-5 right-10 w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,1)] animate-pulse" />
        </div>
      </div>

      {/* Subtle ambient corner gradient */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-500/15 via-teal-500/5 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60 z-0" />

      {/* Top Header: ONLY Name com a fonte Inter, peso 900 Black, uppercase e tracking-wider igual ao site */}
      <div className="relative z-10 flex items-center justify-between">
        <h3 
          className="font-inter text-xl sm:text-2xl font-black uppercase tracking-wider text-white select-none"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, letterSpacing: '0.05em' }}
        >
          LoGames
        </h3>
      </div>

      {/* Description */}
      <div className="relative z-10 my-3">
        <p className="text-xs sm:text-[13px] text-slate-300/80 leading-relaxed max-w-[270px]">
          Avaliador de jogos baseado em plano cartesiano 10x10: classifique títulos cruzando qualidade com interesse e descubra sua nota definitiva.
        </p>
      </div>

      {/* Bottom Bar: Botão exatamente como estava antes (Abrir App + ArrowUpRight) */}
      <div className="relative z-10 flex items-end justify-between pt-2">
        <div className="flex items-center gap-2">
          {/* Botão verde restaurado ao padrão anterior com a fonte Inter aplicada */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-tight shadow-md shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>Abrir App</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-[#1A3323] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Detalhes
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
