import React from 'react';
import { 
  ArrowRight, 
  Server, 
  CheckCircle2
} from 'lucide-react';
import { SYSTEM_METRICS } from '../data/apps';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-violet-600/25 via-indigo-500/20 to-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-violet-500/30 backdrop-blur-md shadow-lg shadow-violet-500/10 mb-8 animate-float">
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-violet-300 via-cyan-200 to-white bg-clip-text text-transparent">
            Pampo Tech • Infrastructure &amp; Software Ecosystem
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
            v2.0
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Construindo soluções inteligentes para o{' '}
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent underline decoration-violet-500/30 decoration-wavy decoration-from-font">
            futuro digital
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300/90 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Hub corporativo e vitrine oficial das soluções tecnológicas da <strong className="text-white font-medium">Pampo Tech</strong>. 
          Sistemas em produção com alta disponibilidade, canais WebRTC acelerados por GPU, inteligência artificial neural e arquitetura Docker isolada em VPS dedicada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Explorar Aplicações do Hub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#infraestrutura"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-white/[0.1] hover:border-violet-500/30 transition-all duration-200"
          >
            <Server className="w-4 h-4 text-cyan-400" />
            <span>Infraestrutura VPS &amp; Docker</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {SYSTEM_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 text-left border border-white/[0.07] hover:border-white/[0.15] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-400">{metric.label}</span>
                {metric.change && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {metric.change}
                  </span>
                )}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{metric.subtext}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
