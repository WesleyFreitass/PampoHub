import React from 'react';
import { 
  ArrowUpRight, 
  Volume2, 
  Hash
} from 'lucide-react';

interface FakeDCCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const FakeDCCard: React.FC<FakeDCCardProps> = ({
  url = 'https://jogosbolados.duckdns.org',
  onOpenDetails,
}) => {
  return (
    <div className="group relative rounded-xl bg-[#1E1F22] border border-[#2B2D31] hover:border-[#5865F2]/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#5865F2]/20 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* Discord Left Server Pill indicator (white vertical bar) */}
      <div className="absolute left-0 top-6 w-1 h-3 group-hover:h-7 rounded-r-full bg-white transition-all duration-300 opacity-60 group-hover:opacity-100" />

      {/* Subtle ambient Blurple corner glow */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-[#5865F2]/25 via-[#5865F2]/10 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-70 z-0" />

      {/* Discord Mock Channel Tree Watermark (Right background) */}
      <div className="absolute right-3.5 top-3.5 w-44 pointer-events-none select-none opacity-30 group-hover:opacity-60 transition-opacity duration-300 z-0 font-sans text-[11px] space-y-1.5 hidden sm:block">
        {/* Mock Text Channel */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-slate-400 bg-white/[0.02]">
          <Hash className="w-3 h-3 text-slate-500" />
          <span className="truncate">chat-geral</span>
        </div>
        {/* Mock Voice Channel with Active State */}
        <div className="flex items-center justify-between px-2 py-0.5 rounded bg-[#5865F2]/15 text-[#5865F2] border border-[#5865F2]/20">
          <div className="flex items-center gap-1.5">
            <Volume2 className="w-3 h-3 text-[#57F287] animate-pulse" />
            <span className="font-semibold text-slate-200 text-[10px]">Voz &amp; Game</span>
          </div>
          <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-[#ED4245] text-white font-bold tracking-tight">
            AO VIVO
          </span>
        </div>
        {/* Speaking User Pulse */}
        <div className="pl-3.5 flex items-center gap-1.5 text-[10px] text-[#57F287]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23A55A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#23A55A]"></span>
          </span>
          <span className="text-slate-300 truncate">Voz Ativa</span>
        </div>
      </div>

      {/* Top Header: Title */}
      <div className="relative z-10 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight text-white select-none">
          FakeDC
        </h3>
      </div>

      {/* Description */}
      <div className="relative z-10 my-2.5">
        <p className="text-xs sm:text-[13px] text-slate-300/80 leading-relaxed max-w-[270px]">
          Plataforma de comunicação em tempo real com canais de voz, chat por texto e transmissão de tela ao vivo.
        </p>
      </div>

      {/* Bottom Bar: Action Button (Discord Blurple) + FakeDC Icon */}
      <div className="relative z-10 flex items-end justify-between pt-2">
        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-xs tracking-tight shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
          >
            <span>Abrir App</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-[#2B2D31] transition-colors"
            >
              Detalhes
            </button>
          )}
        </div>

        {/* FakeDC Logo with Discord Online Avatar Badge */}
        <div className="relative shrink-0 -mb-1">
          <img 
            src="/fakedc.png" 
            alt="FakeDC" 
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-[0_4px_10px_rgba(88,101,242,0.3)] group-hover:scale-105 transition-transform duration-300"
          />
          {/* Classic Discord Green Online Dot */}
          <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23A55A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#23A55A] border-2 border-[#1E1F22]"></span>
          </span>
        </div>
      </div>

    </div>
  );
};
