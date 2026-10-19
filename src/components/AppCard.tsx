import React, { useState } from 'react';
import { 
  ExternalLink, 
  Info, 
  Check, 
  Copy, 
  Sparkles, 
  Activity, 
  Server
} from 'lucide-react';
import type { AppItem } from '../data/apps';
import { AppIcon } from './AppIcon';

interface AppCardProps {
  app: AppItem;
  viewMode: 'grid' | 'list';
  onSelectDetails: (app: AppItem) => void;
  onCopyLink: (url: string, name: string) => void;
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  viewMode,
  onSelectDetails,
  onCopyLink,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(app.url);
    setCopied(true);
    onCopyLink(app.url, app.name);
    setTimeout(() => setCopied(false), 2000);
  };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={() => onSelectDetails(app)}
        className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/[0.08] hover:border-violet-500/40 p-4 sm:p-5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-violet-500/10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex items-start sm:items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.gradient.from} ${app.gradient.to} p-0.5 shadow-md shrink-0`}>
              <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center text-white">
                <AppIcon name={app.icon} className="w-6 h-6 text-white" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {app.name}
                </h3>
                <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-white/[0.08]">
                  {app.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {app.statusLabel}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-1 max-w-2xl">
                {app.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
              title="Copiar URL"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectDetails(app);
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-white/[0.08] transition-colors"
            >
              Ver Detalhes
            </button>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-violet-600/20 transition-all"
            >
              <span>Acessar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/80 border border-white/[0.08] hover:border-violet-500/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-600/10 overflow-hidden"
    >
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: app.gradient.glow }}
      />

      <div>
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="relative">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient.from} ${app.gradient.to} p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-full bg-[#0B0F17] rounded-[14px] flex items-center justify-center">
                <AppIcon name={app.icon} className="w-7 h-7 text-white" />
              </div>
            </div>
            {app.featured && (
              <span className="absolute -top-2 -right-2 p-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40" title="Destaque">
                <Sparkles className="w-3 h-3" />
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{app.statusLabel}</span>
            </div>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
              title="Copiar URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            {app.category}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-slate-400">
            {app.version}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 tracking-tight">
          {app.name}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-5 font-normal">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-800/70 text-slate-300 border border-white/[0.06] group-hover:border-white/[0.1] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/[0.07] flex flex-col gap-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-400" />
            Uptime: <strong className="text-slate-300">{app.uptime}</strong>
          </span>
          <span className="flex items-center gap-1">
            <Server className="w-3 h-3 text-cyan-400" />
            Latência: <strong className="text-slate-300">{app.latencyAvg}</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-1">
          <button
            onClick={() => onSelectDetails(app)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold border border-white/[0.08] transition-all"
          >
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Ver Detalhes</span>
          </button>

          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all group/btn"
          >
            <span>Acessar</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

    </div>
  );
};
