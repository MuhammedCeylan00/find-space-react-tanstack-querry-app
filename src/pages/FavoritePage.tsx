import { usePlaces, useToggleFavorite } from '../queries/usePlaces';

import { IPlace } from '../interfaces';

const FavoritePage = () => {
  const { data: places } = usePlaces();
  const toggleFavorite = useToggleFavorite();

  const handleToggle = (placeId: string, isFavorite: boolean) => {
    toggleFavorite.mutate({ placeId, isFavorite });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mekanlar</h1>
      <ul className="space-y-4">
        {places && places?.map((place : IPlace) => (
          <li key={place?.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <span className="text-lg">{place?.name}</span>
            <button
              onClick={() => handleToggle(place?.id, !place?.isFavorite)}
              className={`px-4 py-2 rounded text-white transition cursor-pointer ${
                place?.isFavorite ? 'bg-red-500' : 'bg-lime-500'
              }`}
            >
              {place?.isFavorite ? 'Favoriden Çıkar' : 'Favoriye Ekle'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePage;
