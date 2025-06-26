// components/MapView.tsx
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import type { FC } from 'react';

// Fix for default marker icon issue in React
const defaultIcon = L.Icon.Default.prototype as unknown as {
  _getIconUrl?: () => void;
};
delete defaultIcon._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

interface MapViewProps {
  position: LatLngExpression;
  zoom?: number; 
}
//  moves the map when `position` changes
const RecenterMap: FC<{ position: LatLngExpression }> = ({ position }) => {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
};

const MapView: FC<MapViewProps> = ({ position }) => {
  return (
    <MapContainer center={position} zoom={6} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>
            IP Location: {position instanceof L.LatLng ? `${position.lat}, ${position.lng}` : 'Invalid position format'}
        </Popup>
      </Marker>
       <RecenterMap position={position} />
    </MapContainer>
  );
};

export default MapView;
