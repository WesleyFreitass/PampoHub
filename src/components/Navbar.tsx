import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  onSearchFocus?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchFocus }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070A0F]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow duration-300">
                <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 text-lg tracking-wider">
                    P
                  </span>
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight group-hover:text-violet-300 transition-colors">
                  Pampo<span className="text-cyan-400">Tech</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30">
                  Hub
                </span>
              </div>
              <span className="text-xs text-slate-400 tracking-wide font-mono hidden sm:inline-block">
                ecosystem.pampo.tech
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
            <a 
              href="#catalogo" 
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              Catálogo de Apps
            </a>
            <a 
              href="#infraestrutura" 
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              Infraestrutura
            </a>
            <a 
              href="#topologia" 
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              Topologia VPS
            </a>
            <a 
              href="#status" 
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              Status dos Nós
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>VPS 100% Online</span>
            </div>

            {onSearchFocus && (
              <button
                onClick={onSearchFocus}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-white/[0.08] text-xs transition-colors"
                title="Pressione / para buscar"
              >
                <span>Buscar app</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-900 border border-slate-700 rounded text-slate-400">
                  /
                </kbd>
              </button>
            )}

            <a
              href="#topologia"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-violet-600/20 transition-all"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>SSH 187.127.17.88</span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-white/[0.08] text-slate-300 hover:text-white"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-white/[0.1] backdrop-blur-2xl shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                VPS 187.127.17.88 Operacional
              </div>
              <span className="text-[11px] text-slate-400">5 Serviços Ativos</span>
            </div>

            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Catálogo de Apps
            </a>
            <a
              href="#infraestrutura"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Infraestrutura &amp; Docker
            </a>
            <a
              href="#topologia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Topologia de Rede
            </a>
            <a
              href="#status"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Status &amp; Métricas
            </a>

            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400">SSL Automático</span>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                Let's Encrypt TLS 1.3
              </span>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
