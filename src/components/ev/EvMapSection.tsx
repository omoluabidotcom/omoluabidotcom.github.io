import { useState, useMemo } from 'react';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import { evStations, getCities } from '../../data/evStations';
import { EVStation, ChargerSpeed } from '../../types/ev';
import EvMap from './EvMap';
import StationCard from './StationCard';
import StationFilters from './StationFilters';
import { Map as MapIcon, List, Zap, BatteryCharging, ChevronUp } from 'lucide-react';

export default function EvMapSection() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedSpeed, setSelectedSpeed] = useState<ChargerSpeed | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<'map' | 'list'>('map');
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  const cities = useMemo(() => getCities(), []);

  const filteredStations = useMemo(() => {
    return evStations.filter(station => {
      const matchCity = selectedCity ? station.city === selectedCity : true;
      const matchSpeed = selectedSpeed ? station.speed === selectedSpeed : true;
      const matchQuery = searchQuery 
        ? (station.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           station.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
           station.address.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      
      return matchCity && matchSpeed && matchQuery;
    });
  }, [selectedCity, selectedSpeed, searchQuery]);

  const stats = useMemo(() => {
    return {
      total: evStations.length,
      dcFast: evStations.filter(s => s.speed === 'DC_FAST').length,
      cities: cities.length,
      operational: evStations.filter(s => s.status === 'operational').length
    };
  }, [cities]);

  const handleSelectStation = (station: EVStation) => {
    setSelectedStationId(station.id);
    setShowMobilePreview(true);
  };

  const selectedStation = evStations.find(s => s.id === selectedStationId);

  return (
    <section id="ev-stations" className="py-24 bg-white dark:bg-white/[0.02] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <SectionHeading 
          index="06" 
          title="Nigeria EV Charging Hubs" 
          subtitle="An interactive map tracking the growing Electric Vehicle infrastructure across Nigeria's major cities." 
        />

        <Reveal className="h-full">
          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="card p-4 flex flex-col justify-center">
              <span className="text-xs font-mono text-slate-500 mb-1">TOTAL STATIONS</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{stats.total}</span>
            </div>
            <div className="card p-4 flex flex-col justify-center border-amber-500/30">
              <span className="text-xs font-mono text-slate-500 mb-1 flex items-center gap-1"><Zap size={12} className="text-amber-500" /> DC FAST</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{stats.dcFast}</span>
            </div>
            <div className="card p-4 flex flex-col justify-center">
              <span className="text-xs font-mono text-slate-500 mb-1">CITIES COVERED</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{stats.cities}</span>
            </div>
            <div className="card p-4 flex flex-col justify-center">
              <span className="text-xs font-mono text-slate-500 mb-1 flex items-center gap-1"><BatteryCharging size={12} className="text-accent-500" /> OPERATIONAL</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{stats.operational}</span>
            </div>
          </div>

          {/* Mobile View Toggle */}
          <div className="md:hidden flex p-1 bg-slate-100 dark:bg-white/5 rounded-lg mb-4">
            <button
              onClick={() => setMobileView('map')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-md transition-all ${mobileView === 'map' ? 'bg-white dark:bg-canvas-dark shadow text-slate-900 dark:text-white' : 'text-slate-500'}`}
            >
              <MapIcon size={16} /> Map View
            </button>
            <button
              onClick={() => setMobileView('list')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-md transition-all ${mobileView === 'list' ? 'bg-white dark:bg-canvas-dark shadow text-slate-900 dark:text-white' : 'text-slate-500'}`}
            >
              <List size={16} /> List View
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 h-[700px] md:h-[600px] relative">
            
            {/* Sidebar / List View */}
            <div className={`w-full md:w-1/3 flex flex-col h-full ${mobileView === 'map' ? 'hidden md:flex' : 'flex'}`}>
              <StationFilters 
                cities={cities}
                selectedCity={selectedCity}
                onSelectCity={setSelectedCity}
                selectedSpeed={selectedSpeed}
                onSelectSpeed={setSelectedSpeed}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
              
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-white/10">
                {filteredStations.length === 0 ? (
                  <div className="text-center py-10 text-slate-500">
                    No stations match your criteria.
                  </div>
                ) : (
                  filteredStations.map(station => (
                    <StationCard 
                      key={station.id} 
                      station={station} 
                      isSelected={selectedStationId === station.id}
                      onClick={handleSelectStation}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Map View */}
            <div className={`w-full md:w-2/3 h-full relative ${mobileView === 'list' ? 'hidden md:block' : 'block'}`}>
              <EvMap 
                stations={filteredStations} 
                selectedStationId={selectedStationId} 
                onSelectStation={handleSelectStation} 
              />

              {/* Mobile Bottom Sheet Preview */}
              {mobileView === 'map' && selectedStation && showMobilePreview && (
                <div className="md:hidden absolute bottom-4 left-4 right-4 z-[400] animate-reveal-up">
                  <div className="relative">
                    <button 
                      onClick={() => setShowMobilePreview(false)}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white dark:bg-canvas-dark p-1.5 rounded-full shadow-lg border border-slate-200 dark:border-white/10"
                    >
                      <ChevronUp size={20} className="text-slate-500" />
                    </button>
                    <StationCard 
                      station={selectedStation} 
                      isSelected={true} 
                      onClick={() => {}} 
                    />
                  </div>
                </div>
              )}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
