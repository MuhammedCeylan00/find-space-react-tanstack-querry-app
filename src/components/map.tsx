import { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import { IPlace, IMapProps } from '../interfaces';


const Map = ({
  place,
  places,
  mapTitle,
  mapDescription,
  isReviewPage,
  addReviewInput,
}: IMapProps) => {
  const defaultCenter: LatLngExpression = [39.9208, 32.8541];

  const navigate = useNavigate();

  const FlyToLocation = ({ place }: { place: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
      if (place) {
        map.flyTo(place, 13, {
          animate: true,
          duration: 2,
        });
      }
    }, [place, map]);

    return null;
  };

  const handleClickMarket = (place: IPlace) => {
    navigate(`/places/${place.id}`)
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

            {place && <FlyToLocation place={[place?.lat, place?.lng]} />}

            {places && places.map((place) => (
              <Marker
                key={`${place.lat}-${place.lng}`}
                position={[place.lat, place.lng]}
              >
                <Popup>
                  <section className='flex flex-col '>
                    <span className='text-lg'>{place?.name || 'No name'}</span>
                    {isReviewPage ? (
                      <span className="text-center mt-0.5 hover:text-gray-500 cursor-pointer underline hover:underline-offset-4" onClick={() => { addReviewInput(place?.id) }}>İnceleme Ekle</span>
                    ) : (
                      <span className="text-center mt-0.5 hover:text-gray-500 cursor-pointer underline hover:underline-offset-4" onClick={() => { handleClickMarket(place) }}>Detaya Git</span>
                    )}
                  </section>
                </Popup>
              </Marker>
            ))}
            {place && (
              <Marker position={[place.lat, place.lng]}>
                <Popup>
                  <span className='text-lg'>{place?.name || 'No name'}</span>
                </Popup>
              </Marker>
            )}
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

export default memo(Map);
