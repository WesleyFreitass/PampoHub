import React from 'react';
import { Plus } from 'lucide-react';

interface BentoPlaceholderCardProps {
  name: string;
  category: string;
  colorHint?: string;
  isWide?: boolean;
  stepNumber: number;
}

export const BentoPlaceholderCard: React.FC<BentoPlaceholderCardProps> = ({
  name,
  category,
  colorHint = '#1E293B',
  isWide = false,
  stepNumber,
}) => {
  return (
    <div 
      className={`rounded-xl border border-dashed border-white/[0.12] p-6 flex flex-col justify-between transition-all duration-200 opacity-60 hover:opacity-85 min-h-[200px] ${
        isWide ? 'md:col-span-2' : ''
      }`}
      style={{
        backgroundColor: colorHint,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-white/[0.08] flex items-center justify-center text-xs font-mono text-slate-400">
            #{stepNumber}
          </div>
          <span className="text-lg font-bold text-slate-200">
            {name}
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-400">
          {category}
        </span>
      </div>

      <div className="my-auto py-4 text-center">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/[0.05] border border-white/[0.08] mb-2 text-slate-400">
          <Plus className="w-4 h-4" />
        </div>
        <p className="text-xs text-slate-400 font-mono">
          Próximo na fila de implementação
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] text-[11px] text-slate-500 font-mono">
        <span>Aguardando aprovação do Produto #{stepNumber - 1}</span>
        <span className="px-2 py-0.5 rounded-sm bg-white/[0.04]">Em breve</span>
      </div>
    </div>
  );
};
