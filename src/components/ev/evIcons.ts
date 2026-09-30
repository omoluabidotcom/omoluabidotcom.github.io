import L from 'leaflet';

// Create a custom emerald icon using SVG
const emeraldIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10b981" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
  <circle cx="12" cy="10" r="3" fill="white"></circle>
</svg>`;

export const defaultEvIcon = L.divIcon({
  className: 'custom-ev-marker',
  html: `<div style="width: 32px; height: 32px; filter: drop-shadow(0px 4px 6px rgba(16, 185, 129, 0.4)); transform: translate(-16px, -32px)">${emeraldIconSvg}</div>`,
  iconSize: [0, 0], // The size is handled by the div styling
  iconAnchor: [0, 0], // The anchor is handled by the div styling translation
  popupAnchor: [0, -32]
});

// Create a version for selected state with an outline and larger glow
export const selectedEvIcon = L.divIcon({
  className: 'custom-ev-marker selected',
  html: `<div style="width: 38px; height: 38px; filter: drop-shadow(0px 4px 12px rgba(16, 185, 129, 0.8)); transform: translate(-19px, -38px)">${emeraldIconSvg}</div>`,
  iconSize: [0, 0],
  iconAnchor: [0, 0],
  popupAnchor: [0, -38]
});
