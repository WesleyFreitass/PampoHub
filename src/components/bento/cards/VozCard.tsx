import React from 'react';
import { ArrowUpRight, Mic } from 'lucide-react';

interface VozCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const VozCard: React.FC<VozCardProps> = ({
  url = 'https://voz.pampo.tech',
  onOpenDetails,
}) => {
  return (
    <div className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* Top Header: "Voz gravador & transcrição" */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-baseline gap-2 select-none">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Voz
          </h3>
          <span className="text-xs text-slate-500 font-normal">
            gravador & transcrição
          </span>
        </div>
      </div>

      {/* Description: Na sua posição original */}
      <div className="relative z-10 my-3">
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-[280px]">
          Gravador inteligente e transcritor de voz em tempo real: capture áudio e transcreva para texto com rapidez e precisão neural.
        </p>
      </div>

      {/* Bottom Bar: Botão Preto + Ondas de Som mais à esquerda + Ícone do Microfone */}
      <div className="relative z-10 flex items-end justify-between pt-2">
        <div className="flex items-center gap-2">
          {/* Botão preto igual ao site oficial */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-tight shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
          >
            <span>Abrir App</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="px-3 py-2 rounded-lg text-xs text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Detalhes
            </button>
          )}
        </div>

        {/* Grupo da Direita: Ondas de Som posicionadas mais à esquerda + Microfone */}
        <div className="flex items-center gap-5 sm:gap-7 -mb-1">
          {/* Ondas de som: todas as 5 barras ativas e animadas */}
          <div className="flex items-center gap-1.5 sm:gap-2 select-none">
            <div 
              className="w-2.5 sm:w-3 rounded-full bg-gradient-to-t from-emerald-500 via-teal-400 to-sky-500 shadow-xs animate-voz-wave-1"
              style={{ height: '22px' }}
            />
            <div 
              className="w-2.5 sm:w-3 rounded-full bg-gradient-to-t from-emerald-500 via-teal-400 to-sky-500 shadow-xs animate-voz-wave-2"
              style={{ height: '36px' }}
            />
            <div 
              className="w-2.5 sm:w-3 rounded-full bg-gradient-to-t from-emerald-500 via-teal-400 to-sky-500 shadow-xs animate-voz-wave-3"
              style={{ height: '46px' }}
            />
            <div 
              className="w-2.5 sm:w-3 rounded-full bg-gradient-to-t from-emerald-500 via-teal-400 to-sky-500 shadow-xs animate-voz-wave-4"
              style={{ height: '18px' }}
            />
            <div 
              className="w-2.5 sm:w-3 rounded-full bg-gradient-to-t from-emerald-500 via-teal-400 to-sky-500 shadow-xs animate-voz-wave-5"
              style={{ height: '10px' }}
            />
          </div>

          {/* Ícone do microfone: Botão circular preto com microfone branco */}
          <div className="relative shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/25 group-hover:scale-105 transition-transform duration-300">
              <Mic className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
