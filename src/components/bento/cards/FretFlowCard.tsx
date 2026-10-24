import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FretFlowCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const FretFlowCard: React.FC<FretFlowCardProps> = ({
  url = 'https://fretflow.pampo.tech',
  onOpenDetails,
}) => {
  return (
    <div className="group relative rounded-xl bg-gradient-to-br from-[#161311] via-[#1D1713] to-[#120F0D] border border-[#3D291E] hover:border-amber-600/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-amber-950/40 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* Background: Braço de Guitarra (Fretboard) estilizado com 6 cordas metálicas e trastes */}
      <div className="absolute right-0 top-0 bottom-0 w-60 sm:w-72 pointer-events-none z-0 select-none overflow-hidden opacity-25 group-hover:opacity-40 transition-opacity duration-300">
        {/* Madeira do braço (Rosewood / Ébano sutil) */}
        <div className="relative w-full h-full flex flex-col justify-between py-6 pr-4">
          
          {/* Trastes Verticais metálicos */}
          <div className="absolute top-0 bottom-0 left-12 w-[1.5px] bg-gradient-to-b from-amber-100/10 via-amber-100/30 to-amber-100/10" />
          <div className="absolute top-0 bottom-0 left-28 w-[1.5px] bg-gradient-to-b from-amber-100/10 via-amber-100/30 to-amber-100/10" />
          <div className="absolute top-0 bottom-0 left-44 w-[1.5px] bg-gradient-to-b from-amber-100/10 via-amber-100/30 to-amber-100/10" />
          <div className="absolute top-0 bottom-0 left-60 w-[1.5px] bg-gradient-to-b from-amber-100/10 via-amber-100/30 to-amber-100/10" />

          {/* Marcador de traste (Pérola perolada no braço) */}
          <div className="absolute top-1/2 left-20 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-200/25 shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
          <div className="absolute top-1/2 left-52 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-200/25 shadow-[0_0_8px_rgba(251,191,36,0.3)]" />

          {/* 6 Cordas da Guitarra (espessuras da 6ª corda grave à 1ª aguda) */}
          {/* 6ª Corda - E Grave */}
          <div className="w-full h-[2.5px] bg-gradient-to-r from-transparent via-amber-200/40 to-amber-100/60 shadow-[0_0_4px_rgba(251,191,36,0.2)]" />
          {/* 5ª Corda - A */}
          <div className="w-full h-[2.2px] bg-gradient-to-r from-transparent via-amber-200/40 to-amber-100/60 shadow-[0_0_4px_rgba(251,191,36,0.2)]" />
          {/* 4ª Corda - D */}
          <div className="w-full h-[1.8px] bg-gradient-to-r from-transparent via-amber-100/35 to-slate-200/50" />
          {/* 3ª Corda - G */}
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-100/35 to-slate-200/50" />
          {/* 2ª Corda - B */}
          <div className="w-full h-[1.2px] bg-gradient-to-r from-transparent via-slate-300/30 to-slate-100/50" />
          {/* 1ª Corda - e Aguda */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300/30 to-slate-100/50" />
        </div>
      </div>

      {/* Subtle ambient corner gradient em terracota vintage */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-600/15 via-amber-600/5 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60 z-0" />

      {/* Top Header: ONLY Name (no icon beside the name) */}
      <div className="relative z-10 flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white select-none">
          FretFlow
        </h3>
      </div>

      {/* Description from official project */}
      <div className="relative z-10 my-3">
        <p className="text-xs sm:text-[13px] text-slate-300/80 leading-relaxed max-w-[280px]">
          Estúdio inteligente de guitarra e aprendizado: afinador cromático, visualização de escalas, metrônomo e prática interativa em tempo real.
        </p>
      </div>

      {/* Bottom Bar: Action Button (Terracota vintage oficial) + FretFlow Palheta Logo */}
      <div className="relative z-10 flex items-end justify-between pt-2">
        <div className="flex items-center gap-2">
          {/* Action button com o tom terracota vintage característico do app */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d9563a] hover:bg-[#c4492f] text-white font-semibold text-xs tracking-tight shadow-md shadow-orange-950/50 hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
          >
            <span>Abrir App</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              Detalhes
            </button>
          )}
        </div>

        {/* FretFlow Logo: Palheta oficial diretamente posicionada */}
        <div className="relative shrink-0 -mb-1">
          <img 
            src="/fretflow.png" 
            alt="FretFlow Palheta" 
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-[0_4px_12px_rgba(217,86,58,0.3)] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

    </div>
  );
};
