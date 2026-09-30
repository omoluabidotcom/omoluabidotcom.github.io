export type ChargerSpeed = 'DC_FAST' | 'AC_STANDARD';
export type PlugType = 'CCS2' | 'Type 2' | 'GB/T' | 'CHAdeMO' | '3-Pin Standard';
export type StationStatus = 'operational' | 'coming_soon' | 'maintenance';

export interface EVStation {
  id: string;
  name: string;
  operator: string;
  city: string;
  state: string;
  address: string;
  coordinates: [number, number]; // [lat, lng]
  speed: ChargerSpeed;
  powerKw: number;
  plugs: PlugType[];
  portsCount: number;
  status: StationStatus;
  accessType: 'Public' | 'Customer Only' | 'Fleet / Commercial';
  pricing: 'Paid' | 'Free' | 'Subscription';
  amenities?: string[];
}
