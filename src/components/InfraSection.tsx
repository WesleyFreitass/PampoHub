import React, { useState } from 'react';
import { 
  Server, 
  ShieldCheck, 
  ArrowRight,
  Network,
  RefreshCw,
  HardDrive
} from 'lucide-react';
import { INFRA_FEATURES } from '../data/apps';

export const InfraSection: React.FC = () => {
  const [simulatedPing, setSimulatedPing] = useState<{ [key: string]: number }>({
    'fakedc': 14,
    'realclima': 17,
    'voice-to-text': 22,
    'fretflow': 19,
    'logames': 21,
    'pampo-hub': 11,
  });
  const [pinging, setPinging] = useState(false);

  const handleTestLatency = () => {
    setPinging(true);
    setTimeout(() => {
      setSimulatedPing({
        'fakedc': Math.floor(10 + Math.random() * 8),
        'realclima': Math.floor(12 + Math.random() * 8),
        'voice-to-text': Math.floor(18 + Math.random() * 10),
        'fretflow': Math.floor(14 + Math.random() * 8),
        'logames': Math.floor(16 + Math.random() * 9),
        'pampo-hub': Math.floor(9 + Math.random() * 6),
      });
      setPinging(false);
    }, 600);
  };

  return (
    <section id="infraestrutura" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>Infraestrutura Dedicada &amp; Confiabilidade</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Construído para rodar em{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              alta performance
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Arquitetura em microsserviços conteinerizados, balanceamento Nginx de alto throughput e esteira CI/CD contínua para zero downtime em cada aplicação.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {INFRA_FEATURES.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.05] text-cyan-300 border border-white/[0.08]">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive VPS Topology Diagram */}
        <div id="topologia" className="rounded-3xl bg-slate-900/90 border border-white/[0.1] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden scroll-mt-24">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Topologia de Rede &amp; Portas da VPS
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Ambiente: <strong className="text-slate-200 font-mono">Pampo Cloud Cluster (Dedicado)</strong> • Roteamento reverso com SSL Let's Encrypt
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleTestLatency}
                disabled={pinging}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-white/[0.08] transition-colors"
                title="Testar latência dos nós"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${pinging ? 'animate-spin' : ''}`} />
                <span>Testar Ping dos Nós</span>
              </button>
            </div>
          </div>

          {/* Topology Architecture Visual Scheme */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Stage 1: Clients & Ingress (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                1. Clientes &amp; Domínios
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-xs font-mono space-y-1.5">
                <div className="text-slate-300 font-semibold">https://pampo.tech</div>
                <div className="text-slate-400 text-[11px]">https://*.pampo.tech</div>
                <div className="text-slate-400 text-[11px]">https://jogosbolados.duckdns.org</div>
                <div className="text-[10px] text-emerald-400 pt-1 border-t border-white/[0.05] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Porta 443 (HTTPS / TLS 1.3)
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden lg:flex items-center justify-center lg:col-span-1 text-slate-600">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>

            {/* Stage 2: Nginx Gateway (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                2. Nginx Reverse Proxy
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 to-slate-950 border border-cyan-500/30 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-cyan-300 font-bold">
                  <span>NGINX Core</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-200">
                    SNI Match
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Termina SSL, aplica cabeçalhos de segurança, ativa HTTP/2 e direciona ao container respectivo.
                </p>
                <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                  <HardDrive className="w-3 h-3 text-cyan-400" />
                  Cluster: Linux Dedicated Node
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden lg:flex items-center justify-center lg:col-span-1 text-slate-600">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>

            {/* Stage 3: Containers Grid (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  3. Docker Containers
                </span>
                <span className="text-[11px] text-slate-400">Porta Host</span>
              </div>

              <div className="grid grid-cols-1 gap-2 max-h-[280px] overflow-y-auto pr-1">
                {/* FakeDC */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-white font-medium">FakeDC Engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">:3050</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {simulatedPing['fakedc']}ms
                    </span>
                  </div>
                </div>

                {/* RealClima */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-white font-medium">RealClima Web</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">:3060</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {simulatedPing['realclima']}ms
                    </span>
                  </div>
                </div>

                {/* LoGames */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-white font-medium">LoGames Portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">:3070</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {simulatedPing['logames']}ms
                    </span>
                  </div>
                </div>

                {/* Voice AI */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-white font-medium">Voice to Text IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">:3080</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {simulatedPing['voice-to-text']}ms
                    </span>
                  </div>
                </div>

                {/* FretFlow (Guitar / Music Platform) */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-white font-medium">FretFlow Guitar Engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">:3090</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {simulatedPing['fretflow']}ms
                    </span>
                  </div>
                </div>

                {/* Pampo Hub */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-violet-950/40 border border-violet-500/40 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-violet-200 font-bold">PampoHub (Este Portal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-violet-300 font-bold">:3100</span>
                    <span className="text-[10px] text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded">
                      {simulatedPing['pampo-hub']}ms
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Security & UFW Note */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Firewall UFW Ativo: Portas isoladas e expostas apenas sob proxy Nginx seguro.</span>
            </div>
            <div className="text-cyan-400 bg-slate-800/80 px-3 py-1 rounded-md border border-white/[0.06]">
              Proteção UFW Ativa • Protocol: TLS 1.3
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
