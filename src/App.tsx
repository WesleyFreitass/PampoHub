import { useState, useMemo, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { AppCard } from './components/AppCard';
import { AppModal } from './components/AppModal';
import { InfraSection } from './components/InfraSection';
import { StatusSection } from './components/StatusSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { BentoPage } from './components/bento/BentoPage';
import { APPS } from './data/apps';
import type { AppCategory, AppItem } from './data/apps';
import { SearchX, Sparkles } from 'lucide-react';

export function App() {
  const [pageView, setPageView] = useState<'bento' | 'classic'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#/classic') {
      return 'classic';
    }
    return 'bento';
  });

  useEffect(() => {
    window.location.hash = pageView === 'classic' ? '#/classic' : '#/bento';
  }, [pageView]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredApps = useMemo(() => {
    return APPS.filter((app) => {
      const matchesCategory =
        selectedCategory === 'Todos' || app.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        app.name.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query) ||
        app.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyLink = (_url: string, name: string) => {
    setToastMessage(`Link de "${name}" copiado para a área de transferência!`);

    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.85, x: 0.85 },
        colors: ['#8B5CF6', '#06B6D4', '#10B981'],
        disableForReducedMotion: true,
      });
    } catch {
      // Fallback silently if canvas-confetti has restrictions
    }

    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleFocusSearch = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 300);
  };

  if (pageView === 'bento') {
    return <BentoPage onSwitchToClassic={() => setPageView('classic')} />;
  }

  return (
    <div className="min-h-screen bg-[#070A0F] text-slate-100 flex flex-col selection:bg-violet-600/30 selection:text-violet-200">
      
      <Navbar 
        onSearchFocus={handleFocusSearch} 
        onSwitchToMain={() => setPageView('bento')} 
      />

      <Hero onExploreClick={handleFocusSearch} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalResults={filteredApps.length}
          totalApps={APPS.length}
          inputRef={searchInputRef}
        />

        {filteredApps.length > 0 ? (
          <div 
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-3.5'
            }
          >
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                viewMode={viewMode}
                onSelectDetails={setSelectedApp}
                onCopyLink={handleCopyLink}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-slate-900/40 border border-white/[0.06] backdrop-blur-md max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <SearchX className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              Nenhuma aplicação encontrada
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Não encontramos resultados para "<strong className="text-slate-200">{searchQuery}</strong>" na categoria {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
              }}
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              Limpar Filtros e Busca
            </button>
          </div>
        )}

      </main>

      <InfraSection />

      <StatusSection />

      <Footer />

      <AppModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
        onCopyLink={handleCopyLink}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Floating Button to Switch View */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setPageView('bento')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-xl shadow-indigo-600/40 border border-indigo-400/30 transition-all hover:scale-105"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Ver Novo Hub de Aplicações</span>
        </button>
      </div>

    </div>
  );
}

export default App;
