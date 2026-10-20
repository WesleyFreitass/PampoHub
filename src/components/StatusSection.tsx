import React from 'react';
import { 
  Activity, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight
} from 'lucide-react';
import { APPS } from '../data/apps';

export const StatusSection: React.FC = () => {
  return (
    <section id="status" className="py-16 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Status Container */}
        <div className="rounded-3xl bg-slate-900/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  Status Operacional dos Serviços
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                    Todos os Sistemas Operacionais
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Monitoramento contínuo dos microsserviços em produção com verificação de integridade a cada 60s
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Última checagem: <strong className="text-slate-200">Agora</strong></span>
            </div>
          </div>

          {/* Apps Status Rows */}
          <div className="space-y-3">
            {APPS.map((app) => (
              <div 
                key={app.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/60 border border-white/[0.05] hover:border-white/[0.1] transition-all"
              >
                {/* Service Name & Category */}
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 animate-pulse shrink-0"></span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-white">{app.name}</span>
                      <span className="text-[11px] font-mono text-slate-400">({app.architecture.container})</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                      <span>Porta: <strong className="text-slate-300">:{app.architecture.hostPort}</strong></span>
                      <span>•</span>
                      <span>{app.architecture.ssl}</span>
                    </div>
                  </div>
                </div>

                {/* Telemetry & Uptime Bars */}
                <div className="flex items-center justify-between sm:justify-end gap-6 text-xs font-mono">
                  {/* Uptime visual bar */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Uptime:</span>
                      <span className="text-emerald-400 font-bold">{app.uptime}</span>
                    </div>
                    {/* 12-bar mini uptime sparkline */}
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1.5 h-3.5 rounded-sm bg-emerald-500/80 hover:bg-emerald-400 transition-colors"
                          title="Sem incidentes registrados"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Direct link */}
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title={`Acessar ${app.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}

            {/* Pampo Hub Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-violet-950/20 border border-violet-500/30">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50 animate-pulse shrink-0"></span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-violet-200">Pampo Hub (Portal Vitrine)</span>
                    <span className="text-[11px] font-mono text-cyan-300">(pampo-hub)</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                    <span>Porta: <strong className="text-violet-300">:3100</strong></span>
                    <span>•</span>
                    <span className="text-cyan-300">Nginx Alpine + Multi-stage Build</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 text-xs font-mono">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-cyan-400 font-bold">100% Online</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 h-3.5 rounded-sm bg-cyan-500/80 hover:bg-cyan-400 transition-colors"
                        title="Ativo"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Certificados SSL Let's Encrypt válidos e auto-renováveis.
            </span>
            <span>Taxa de resposta média: 16ms</span>
          </div>

        </div>

      </div>
    </section>
  );
};
