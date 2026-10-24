import React from 'react';
import { ArrowUp } from 'lucide-react';
import { OceanBackground } from './OceanBackground';
import { FakeDCCard } from './cards/FakeDCCard';
import { RealClimaCard } from './cards/RealClimaCard';
import { FarolCard } from './cards/FarolCard';
import { VozCard } from './cards/VozCard';
import { PampoBoardCard } from './cards/PampoBoardCard';
import { FretFlowCard } from './cards/FretFlowCard';
import { LoGamesCard } from './cards/LoGamesCard';
import { KaraokeCard } from './cards/KaraokeCard';

interface BentoPageProps {
  onSwitchToClassic?: () => void;
}

export const BentoPage: React.FC<BentoPageProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200 relative overflow-x-hidden bg-[#020710]">
      
      {/* Immersive Marine / Ocean Background */}
      <OceanBackground />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 w-full relative z-10">
        
        {/* Header Hero Section: Clean & Minimalist */}
        <div className="flex items-center gap-3.5 mb-8">
          <img 
            src="/mascot.png" 
            alt="Pampo Mascote" 
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-[0_2px_8px_rgba(6,182,212,0.35)] hover:scale-110 transition-transform duration-300 select-none"
          />

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
              Pampo<span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Hub</span>
            </h1>
          </div>
        </div>

        {/* Grid - 8 Cards strictly in the approved order */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          
          {/* 1: FakeDC */}
          <FakeDCCard />

          {/* 2: RealClima */}
          <RealClimaCard />

          {/* 3: Pampo Karaokê */}
          <KaraokeCard />

          {/* 4: Farol */}
          <FarolCard />

          {/* 5: PampoBoard (Card Largo 2 Colunas) */}
          <PampoBoardCard />

          {/* 6: LoGames */}
          <LoGamesCard />

          {/* 7: Voz */}
          <VozCard />

          {/* 8: FretFlow */}
          <FretFlowCard />

        </div>

      </main>

      {/* Clean Minimal Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 relative z-10 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <img src="/mascot.png" alt="Pampo" className="w-5 h-5 object-contain select-none" />
            <span className="text-slate-300 font-bold tracking-tight font-sans text-sm">
              Pampo<span className="text-cyan-400">Tech</span>
            </span>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-3">
            <span>© 2026 Pampo Tech</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
};
