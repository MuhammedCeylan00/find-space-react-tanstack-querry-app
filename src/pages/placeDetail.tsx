import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { usePlace, usePlaces } from '../queries/usePlaces';

import Map from '../components/map';
import WelcomeCard from '../components/welcomeCard';

const PlaceDetail = () => {
  const [key, setKey] = useState(0);

  const { placeId } = useParams();

  const placeData = usePlace(placeId as string)?.data;
  const AllPlaceData = usePlaces()?.data;

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [placeId]);

  return (
    <div>
      {!placeId &&
        <WelcomeCard
          title="Lütfen görmek için bir Yer seçin"
          description=" Henüz bir yer seçmediniz. Lütfen detaylarını görmek için listeden bir yer seçin."
        />
      }
      <Map
        key={key}
        place={placeData}
        places={AllPlaceData}
        flyTo={[placeData?.lat, placeData?.lng]}
        mapTitle={placeData?.name}
        mapDescription={placeData?.description}
      />
      {placeData?.comments && placeData.comments.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Yorumlar</h2>
          <div className="space-y-4">
            {placeData.comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-3">
                    <img
                      src="/src/assets/images/minion.png"
                      alt="Minion"
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">{comment}</p>
                    <span className="text-sm text-gray-400 mt-1">Minion {index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
};

export default PlaceDetail;
