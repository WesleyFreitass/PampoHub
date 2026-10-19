import React, { useRef, useEffect } from 'react';
import { Search, X, LayoutGrid, List } from 'lucide-react';
import type { AppCategory } from '../data/apps';
import { CATEGORIES } from '../data/apps';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: AppCategory;
  onCategoryChange: (category: AppCategory) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalResults: number;
  totalApps: number;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  totalResults,
  totalApps,
  inputRef,
}) => {
  const localInputRef = useRef<HTMLInputElement>(null);
  const activeInputRef = inputRef || localInputRef;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== activeInputRef.current) {
        e.preventDefault();
        activeInputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === activeInputRef.current) {
        activeInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeInputRef]);

  return (
    <div id="catalogo" className="scroll-mt-28 mb-10">
      
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
        
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            ref={activeInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nome, categoria ou tecnologia (ex: WebRTC, Whisper, Docker, React)..."
            className="w-full pl-11 pr-24 py-3.5 rounded-xl bg-slate-900/80 border border-white/[0.1] focus:border-cyan-400/60 focus:bg-slate-900 text-white placeholder-slate-400 text-sm outline-none transition-all duration-200 shadow-inner"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700/60">
                Pressione /
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
          <div className="text-xs text-slate-400 font-mono">
            Mostrando <span className="text-cyan-300 font-semibold">{totalResults}</span> de <span className="text-slate-300">{totalApps}</span> apps
          </div>

          <div className="flex items-center p-1 rounded-lg bg-slate-900/80 border border-white/[0.08]">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-1.5 rounded-md text-xs transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Visualização em Grade"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-1.5 rounded-md text-xs transition-all ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Visualização em Lista Compacta"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/20 border border-transparent'
                  : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-white/[0.07] hover:border-white/[0.15]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

    </div>
  );
};
