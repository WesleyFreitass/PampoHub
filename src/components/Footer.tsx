import React from 'react';
import { 
  Terminal, 
  ExternalLink, 
  ArrowUp
} from 'lucide-react';
import { APPS } from '../data/apps';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-slate-400">
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-t from-violet-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#0B0F17] rounded-[6px] flex items-center justify-center p-1 overflow-hidden">
                  <img 
                    src="/mascot.png" 
                    alt="Pampo Tech" 
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(6,182,212,0.3)]"
                  />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Pampo<span className="text-cyan-400">Tech</span> Hub
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma central de soluções tecnológicas, microsserviços e sistemas proprietários de alto desempenho. Infraestrutura conteinerizada e monitorada 24/7.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-white/[0.08] text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Pampo Cloud Cluster
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/[0.08] text-cyan-300">
                Nginx Reverse Proxy
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Aplicações Ativas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {APPS.map((app) => (
                <li key={app.id}>
                  <a 
                    href={app.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1 group"
                  >
                    <span>{app.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Infraestrutura
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#infraestrutura" className="hover:text-white transition-colors">
                  Docker Engine &amp; Compose
                </a>
              </li>
              <li>
                <a href="#topologia" className="hover:text-white transition-colors">
                  Topologia de Portas
                </a>
              </li>
              <li>
                <a href="#status" className="hover:text-white transition-colors">
                  Monitoramento &amp; Uptime
                </a>
              </li>
              <li>
                <span className="text-slate-400">Certificados TLS 1.3 Let's Encrypt</span>
              </li>
              <li>
                <span className="text-slate-400">Pipeline CI/CD GitHub Actions</span>
              </li>
            </ul>
          </div>

          {/* Quick Terminal / DevOps */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              DevOps &amp; Deploy
            </h4>
            <div className="p-3 rounded-xl bg-slate-950 border border-white/[0.08] text-[11px] font-mono space-y-1.5 text-slate-400">
              <div className="text-cyan-400 font-semibold flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                <span>Pampo Hub Porta</span>
              </div>
              <div className="text-white">Host Port: :3100</div>
              <div className="text-slate-400">Container: pampo-hub</div>
              <div className="text-emerald-400 text-[10px] pt-1 border-t border-white/[0.06]">
                Restart: always
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} <strong className="text-slate-200">Pampo Tech</strong>. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="font-mono text-[11px] text-slate-400">
              Versão 2.4.0 • Build Produção
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
