import { useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface Props {
  position: LatLngExpression | null;
}

const Map = ({ position }: Props) => {
  const defaultCenter: LatLngExpression = [39.9208, 32.8541]; 

  const FlyToLocation = ({ position }: { position: LatLngExpression }) => {
    const map = useMap();
  
    useEffect(() => {
      map.flyTo(position, 13, {
        animate: true,
        duration: 2 
      });
    }, [position, map]);
  
    return null;
  };
  
  return (
    <MapContainer center={defaultCenter} zoom={6} style={{ height: '500px', width: '50%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {position && (
        <>
          <FlyToLocation position={position} />
          <Marker position={position}>
            <Popup>İstanbul!</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};

export default Map;
