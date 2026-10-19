import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Check, 
  Copy, 
  Server, 
  Cpu, 
  Layers, 
  Zap, 
  Globe, 
  Activity,
  Terminal,
  Lock
} from 'lucide-react';
import type { AppItem } from '../data/apps';
import { AppIcon } from './AppIcon';

interface AppModalProps {
  app: AppItem | null;
  onClose: () => void;
  onCopyLink: (url: string, name: string) => void;
}

export const AppModal: React.FC<AppModalProps> = ({
  app,
  onClose,
  onCopyLink,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (app) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [app, onClose]);

  if (!app) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(app.url);
    setCopied(true);
    onCopyLink(app.url, app.name);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/[0.12] shadow-2xl shadow-black/80 flex flex-col scrollbar-thin scrollbar-thumb-slate-700"
      >
        <div className={`relative px-6 pt-8 pb-6 bg-gradient-to-r ${app.gradient.from} ${app.gradient.to} bg-opacity-20 border-b border-white/[0.08] overflow-hidden`}>
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 text-slate-400 hover:text-white border border-white/[0.1] transition-all"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#0B0F17] border border-white/[0.15] p-2 flex items-center justify-center shadow-xl shrink-0">
              <AppIcon name={app.icon} className="w-9 h-9 text-cyan-300" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-md bg-white/10 text-white font-mono backdrop-blur-sm">
                  {app.category}
                </span>
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {app.statusLabel}
                </span>
                <span className="text-xs font-mono text-white/80">
                  {app.version}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
                {app.name}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                {app.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              Visão Geral &amp; Propósito
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {app.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-400" />
              Recursos &amp; Capacidades Principais
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {app.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-white/[0.05]"
                >
                  <div className="p-1 rounded-md bg-violet-500/20 text-violet-300 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-1.5">
              <Server className="w-4 h-4 text-emerald-400" />
              Arquitetura &amp; Infraestrutura VPS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              
              <div className="p-3 rounded-xl bg-slate-800/50 border border-white/[0.06]">
                <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Container Docker:
                </div>
                <div className="text-white font-semibold">{app.architecture.container}</div>
                {app.architecture.hostPort && (
                  <div className="text-[11px] text-slate-400 mt-0.5">Porta Host: :{app.architecture.hostPort}</div>
                )}
              </div>

              <div className="p-3 rounded-xl bg-slate-800/50 border border-white/[0.06]">
                <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  Segurança &amp; SSL:
                </div>
                <div className="text-white font-semibold">{app.architecture.ssl}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{app.architecture.proxy}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/50 border border-white/[0.06]">
                <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                  <Cpu className="w-3.5 h-3.5 text-violet-400" />
                  Frontend Stack:
                </div>
                <div className="text-slate-200">{app.architecture.stackFrontend}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/50 border border-white/[0.06]">
                <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  Backend / Engine:
                </div>
                <div className="text-slate-200">{app.architecture.stackBackend || 'N/A (Static SPA)'}</div>
              </div>

            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 w-full sm:w-auto truncate">
              <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{app.url}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <button
                onClick={handleCopy}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-white/[0.08] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar URL'}</span>
              </button>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
              >
                <span>Abrir Aplicação</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
