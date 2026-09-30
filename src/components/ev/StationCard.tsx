import { EVStation } from '../../types/ev';
import { Zap, MapPin, Navigation2, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

interface StationCardProps {
  station: EVStation;
  isSelected: boolean;
  onClick: (station: EVStation) => void;
}

export default function StationCard({ station, isSelected, onClick }: StationCardProps) {
  const getStatusIcon = () => {
    switch (station.status) {
      case 'operational': return <CheckCircle2 size={14} className="text-accent-500" />;
      case 'coming_soon': return <Clock size={14} className="text-amber-500" />;
      case 'maintenance': return <AlertTriangle size={14} className="text-red-500" />;
    }
  };

  const getStatusText = () => {
    switch (station.status) {
      case 'operational': return 'Operational';
      case 'coming_soon': return 'Coming Soon';
      case 'maintenance': return 'Maintenance';
    }
  };

  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${station.coordinates[0]},${station.coordinates[1]}`;

  return (
    <div 
      onClick={() => onClick(station)}
      className={`card p-4 cursor-pointer transition-all duration-300 border-2 ${isSelected ? 'border-accent-500 bg-accent-50/50 dark:bg-accent-950/20 shadow-lg' : 'border-transparent hover:border-accent-500/30'}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
            {station.name}
          </h4>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {station.operator} • {station.city}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${station.speed === 'DC_FAST' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
            <Zap size={10} className={station.speed === 'DC_FAST' ? 'text-amber-500' : ''} />
            {station.speed === 'DC_FAST' ? 'DC Fast' : 'AC Std'}
          </span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {station.powerKw} kW
          </span>
        </div>
      </div>

      <div className="text-sm text-slate-600 dark:text-slate-400 mb-3 flex items-start gap-1.5">
        <MapPin size={16} className="shrink-0 mt-0.5" />
        <span className="line-clamp-2 leading-tight">{station.address}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {station.plugs.map(plug => (
          <span key={plug} className="px-2 py-0.5 bg-canvas-light dark:bg-canvas-dark border border-slate-200 dark:border-white/10 rounded text-xs text-slate-600 dark:text-slate-400">
            {plug}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          {getStatusIcon()}
          {getStatusText()}
        </div>
        <a 
          href={mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors bg-accent-500/10 px-3 py-1.5 rounded-lg"
        >
          <Navigation2 size={14} />
          Directions
        </a>
      </div>
    </div>
  );
}
