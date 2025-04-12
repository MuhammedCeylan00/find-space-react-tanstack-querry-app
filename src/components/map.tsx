import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';

interface Props {
  places: { lat: number; lng: number }[] | null;
  flyTo: LatLngExpression | null;
  mapTitle: string;
  mapDescription: string;
}

const Map = ({ places, flyTo = null, mapTitle, mapDescription }: Props) => {
  const defaultCenter: LatLngExpression = [39.9208, 32.8541];

  const FlyToLocation = ({ flyTo }: { flyTo: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
      if (flyTo) {
        map.flyTo(flyTo, 13, {
          animate: true,
          duration: 2,
        });
      }
    }, [flyTo, map]);

    return null;
  };

  return (
    <div className="max-w-full mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <MapContainer
            center={defaultCenter}
            zoom={6}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer attribution='&copy; OpenStreetMap contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

            {flyTo && <FlyToLocation flyTo={flyTo} />}

            {places && places.map((place) => (
              <Marker key={`${place.lat}-${place.lng}`} position={[place.lat, place.lng]}>
                <Popup>{place?.name || 'No name'}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {mapDescription && mapTitle ? (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">{mapTitle}</h2>
            <p className="text-gray-600 mt-2">
              {mapDescription}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Map;
