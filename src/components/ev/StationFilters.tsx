import { Search, Map } from 'lucide-react';
import { ChargerSpeed } from '../../types/ev';

interface StationFiltersProps {
  cities: string[];
  selectedCity: string | null;
  onSelectCity: (city: string | null) => void;
  selectedSpeed: ChargerSpeed | null;
  onSelectSpeed: (speed: ChargerSpeed | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function StationFilters({
  cities,
  selectedCity,
  onSelectCity,
  selectedSpeed,
  onSelectSpeed,
  searchQuery,
  onSearchChange
}: StationFiltersProps) {
  return (
    <div className="space-y-4 mb-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={16} className="text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search stations, areas, or networks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 text-slate-900 dark:text-white placeholder:text-slate-400"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          <Map size={14} /> City
        </div>
        <div className="flex overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide gap-2">
          <button
            onClick={() => onSelectCity(null)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              selectedCity === null 
                ? 'bg-accent-500 text-white border-accent-500' 
                : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-accent-500/50'
            }`}
          >
            All Cities
          </button>
          {cities.map(city => (
            <button
              key={city}
              onClick={() => onSelectCity(city)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                selectedCity === city 
                  ? 'bg-accent-500 text-white border-accent-500' 
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-accent-500/50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onSelectSpeed(selectedSpeed === 'DC_FAST' ? null : 'DC_FAST')}
          className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-colors border ${
            selectedSpeed === 'DC_FAST'
              ? 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-700/50'
              : 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-white/5 dark:text-slate-400 dark:border-white/10 hover:border-amber-300 dark:hover:border-amber-700/50'
          }`}
        >
          DC Fast Only
        </button>
        <button
          onClick={() => onSelectSpeed(selectedSpeed === 'AC_STANDARD' ? null : 'AC_STANDARD')}
          className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-colors border ${
            selectedSpeed === 'AC_STANDARD'
              ? 'bg-accent-50 text-accent-700 border-accent-300 dark:bg-accent-900/30 dark:text-accent-400 dark:border-accent-700/50'
              : 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-white/5 dark:text-slate-400 dark:border-white/10 hover:border-accent-300 dark:hover:border-accent-700/50'
          }`}
        >
          AC Standard Only
        </button>
      </div>
    </div>
  );
}
