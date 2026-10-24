import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PampoBoardCardProps {
  url?: string;
  onOpenDetails?: () => void;
}

export const PampoBoardCard: React.FC<PampoBoardCardProps> = ({
  url = 'https://pampoboard.pampo.tech',
  onOpenDetails,
}) => {
  return (
    <div className="group relative md:col-span-2 rounded-xl bg-[#090b10] border border-[#1e2433] hover:border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-cyan-950/30 hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
      
      {/* Canvas Dot Grid Background matching Print 1 & Print 2 */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 group-hover:opacity-60 transition-opacity"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.16) 1.2px, transparent 1.2px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/10 via-cyan-500/5 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none z-0" />

      {/* Top Header: Logo substituindo o P de [P]ampo Board */}
      <div className="relative z-10 flex flex-col gap-1 mb-1 sm:mb-2">
        <h3 className="flex items-center text-xl sm:text-2xl font-black tracking-tight select-none">
          <img 
            src="/pampoboard.png" 
            alt="P" 
            className="h-[1.15em] w-auto object-contain drop-shadow-md inline-block mr-0 relative -top-[1.5px] group-hover:scale-105 transition-transform" 
          />
          <span className="text-white">ampo</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 ml-2">
            Board
          </span>
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-300/90 leading-tight max-w-2xl line-clamp-1 sm:line-clamp-none">
          Bancada visual infinita para organizar ideias, projetos e fluxos de trabalho com cards vivos, conexões lógicas e total liberdade criativa.
        </p>
      </div>

      {/* Live Interactive Node Canvas Mockup (Padronizado na altura dos demais cards) */}
      <div className="relative z-10 w-full mt-1 overflow-x-auto sm:overflow-visible">
        <div className="relative min-w-[580px] sm:min-w-0 h-[142px] sm:h-[148px]">
          
          {/* SVG Connecting Curves (Bezier Wires linking the nodes) */}
          <svg viewBox="0 0 680 145" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
            {/* Wire 1: Yellow Post-it to Coluna Milanote (Cyan Dashed Bezier) */}
            <path
              d="M 180 34 C 205 34, 210 38, 235 38"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              className="drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]"
            />

            {/* Wire 2: Coluna Milanote to Inspiração Visual (Purple Solid Curve) */}
            <path
              d="M 445 78 C 475 88, 485 96, 505 96"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2"
              className="drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]"
            />
          </svg>

          {/* NODE 1: Yellow Post-it (Left, Top) */}
          <div className="absolute left-1 sm:left-2 top-0.5 w-44 sm:w-48 rounded-md bg-[#fef08a] p-2 sm:p-2.5 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-200 text-amber-950 select-none">
            {/* Tape at top */}
            <div className="w-7 h-1 bg-[#fde047]/80 rounded-xs mx-auto mb-1 opacity-70" />
            <div className="flex items-center gap-1 font-bold text-[9px] tracking-wider uppercase text-amber-900 mb-0.5">
              <span>💡</span>
              <span>IDEIA PRINCIPAL</span>
            </div>
            <p className="text-[10px] leading-tight font-medium text-amber-950/90">
              Construir bancada visual fluida para organizar nosso lançamento.
            </p>
          </div>

          {/* ACTION BUTTON: Posicionado diretamente abaixo do Post-it Amarelo */}
          <div className="absolute left-1 sm:left-2 bottom-0.5 sm:bottom-1 z-20 flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs tracking-tight shadow-md hover:shadow-blue-500/25 transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
            >
              <span>Abrir App</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            {onOpenDetails && (
              <button
                onClick={onOpenDetails}
                className="px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                Detalhes
              </button>
            )}
          </div>

          {/* NODE 2: Coluna Milanote (Center) */}
          <div className="absolute left-[33%] sm:left-[34%] top-0 w-52 sm:w-56 rounded-xl bg-[#12141f]/95 border border-purple-500/35 p-2 sm:p-2.5 shadow-xl backdrop-blur-md hover:border-purple-400/60 transition-colors select-none">
            {/* Coluna Header */}
            <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-purple-400 font-bold text-[11px]">
                <span className="text-[12px]">📚</span>
                <span>Coluna Milanote</span>
              </div>
              <span className="text-[9px] font-mono text-purple-300/70">3 itens</span>
            </div>

            {/* Item 1: Escopo do Projeto */}
            <div className="rounded bg-[#181b2a]/90 border border-white/[0.06] px-2 py-1 mb-1">
              <div className="flex items-center gap-1 text-slate-200 font-semibold text-[10px]">
                <span>📄</span>
                <span>Escopo do Projeto</span>
              </div>
              <p className="text-[9px] text-slate-400 leading-tight">
                Estrutura com nós inteligentes e suporte a mídias.
              </p>
            </div>

            {/* Item 2: Tarefas Principais */}
            <div className="rounded bg-[#181b2a]/90 border border-white/[0.06] px-2 py-1">
              <div className="flex items-center gap-1 text-slate-200 font-semibold text-[10px] mb-0.5">
                <span>✅</span>
                <span>Tarefas Principais</span>
              </div>
              <div className="space-y-0.5 text-[9px] text-emerald-400 font-mono">
                <p>✓ Canvas Infinito Livre</p>
                <p>✓ Conexões com Arraste</p>
              </div>
            </div>
          </div>

          {/* NODE 3: Inspiração Visual (Right) */}
          <div className="absolute right-1 sm:right-2 bottom-0.5 sm:bottom-1 w-44 sm:w-48 rounded-xl bg-[#12141f]/95 border border-cyan-500/35 p-2 sm:p-2.5 shadow-xl backdrop-blur-md hover:border-cyan-400/60 transition-colors select-none">
            <div className="flex items-center gap-1 text-cyan-400 font-bold text-[10px] mb-1">
              <span>🖼</span>
              <span>Inspiração Visual</span>
            </div>
            <div className="rounded bg-gradient-to-r from-[#00b4d8] via-[#0284c7] to-[#6366f1] p-2 text-center shadow-md">
              <span className="text-white font-extrabold text-[11px] tracking-tight drop-shadow-sm">
                Design System 2026
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
