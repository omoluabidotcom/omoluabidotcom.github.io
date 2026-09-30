import { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { EVStation } from '../../types/ev';
import { defaultEvIcon, selectedEvIcon } from './evIcons';
import { useTheme } from '../../hooks/useTheme';

interface EvMapProps {
  stations: EVStation[];
  selectedStationId: string | null;
  onSelectStation: (station: EVStation) => void;
}

// Component to handle map centering when selection changes
function MapController({ selectedStation, stations }: { selectedStation: EVStation | null, stations: EVStation[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedStation) {
      map.flyTo(selectedStation.coordinates, 15, { duration: 1.5 });
    } else if (stations.length > 0) {
      // Fit bounds to all stations if none selected
      const bounds = L.latLngBounds(stations.map(s => s.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [selectedStation, stations, map]);

  return null;
}

export default function EvMap({ stations, selectedStationId, onSelectStation }: EvMapProps) {
  const { isDark } = useTheme();
  
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  const selectedStation = stations.find(s => s.id === selectedStationId) || null;

  // Center on Nigeria generally if no stations
  const defaultCenter: [number, number] = [9.0820, 8.6753];
  const defaultZoom = 6;

  return (
    <div className="w-full h-full relative z-0 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg">
      <MapContainer 
        center={defaultCenter} 
        zoom={defaultZoom} 
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false} // Prevent page scroll hijack
      >
        <TileLayer
          url={tileUrl}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className={isDark ? 'map-tiles-dark' : ''}
        />
        
        {stations.map(station => (
          <Marker 
            key={station.id} 
            position={station.coordinates}
            icon={selectedStationId === station.id ? selectedEvIcon : defaultEvIcon}
            eventHandlers={{
              click: () => onSelectStation(station)
            }}
          >
            <Popup className="custom-popup" closeButton={false} offset={[0, -20]}>
              <div className="font-sans">
                <div className="font-bold text-slate-900 mb-1">{station.name}</div>
                <div className="text-xs text-slate-500">{station.operator}</div>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <MapController selectedStation={selectedStation} stations={stations} />
      </MapContainer>

      {/* Overlay to hint mobile users to use two fingers if we want to get fancy, 
          but scrollWheelZoom={false} handles desktop well. For mobile, Leaflet
          usually allows single finger pan unless dragging is false. */}
    </div>
  );
}
