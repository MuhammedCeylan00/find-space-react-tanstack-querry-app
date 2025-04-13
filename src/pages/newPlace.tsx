import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreatePlace } from '../queries/usePlaces';

import WelcomeCard from '../components/welcomeCard';

const NewPlace = () => {
  const [name, setName] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();
  const { mutate, isPending, isSuccess } = useCreatePlace();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        name,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        description,
        id: crypto.randomUUID(), 
        comments: []
      },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );
  };

  return (
    <div>
      <WelcomeCard
        title="Yeni Mekan Ekle!"
        description="Keşfettiğin harika mekanları paylaş, deneyimlerini anlat ve başkalarına ilham ver. Şehirlerimizin lezzet ve keyif haritasına katkıda bulun!"
      />
      <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border p-2"
            type="text"
            placeholder="Yer Adı"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            className="w-full border p-2"
            type="text"
            placeholder="Latitude"
            value={lat}
            required
            onChange={e => setLat(e.target.value)}
          />
          <input
            className="w-full border p-2"
            type="text"
            placeholder="Longitude"
            required
            value={lng}
            onChange={e => setLng(e.target.value)}
          />
          <textarea
            className="w-full border p-2"
            placeholder="Açıklama"
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 rounded"
            type="submit"
            disabled={isPending}
          >
            {isPending ? 'Kaydediliyor...' : 'Ekle'}
          </button>
          {isSuccess && <p className="text-green-500">Yer başarıyla eklendi!</p>}
        </form>
      </div>
    </div>
  )
}

export default NewPlace
