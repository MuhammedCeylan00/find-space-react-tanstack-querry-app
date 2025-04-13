import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAddComment, usePlaces } from '../queries/usePlaces';

import WelcomeCard from '../components/welcomeCard';
import Map from '../components/map';

const AddReview = () => {
  const [placeId, setPlaceId] = useState<string | null>(null);
  const [review, setReview] = useState<string>("");

  const navigate = useNavigate();

  const AllPlaceData = usePlaces()?.data;
  const { mutate, isPending } = useAddComment();

  const addReviewInput = (placeId: string) => {
    setPlaceId(placeId);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!review.trim()) return;

    mutate(
      { placeId: placeId!, review },
      {
        onSuccess: () => {
          navigate(`/places/${placeId}`);
        },
      }
    );
  };

  return (
    <div>
      <WelcomeCard
      title="Yeni İnceleme Ekle!"
      description="Ziyaret ettiğiniz mekanlar hakkında düşüncelerinizi paylaşın. Deneyimleriniz, diğer kullanıcılara rehber olacak!"
      />
      <Map places={AllPlaceData} isReviewPage addReviewInput={addReviewInput} />
      {placeId && (
      <div className="max-w-md mx-auto mt-6 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">İncelemenizi Yazın</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea
          className="w-full border border-gray-300 rounded-lg p-4 min-h-[150px] focus:ring-2 focus:ring-lime-500 focus:border-transparent"
          placeholder="Mekan hakkında düşüncelerinizi paylaşın..."
          required
          value={review}
          onChange={e => setReview(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-lg font-medium transition duration-200 ease-in-out transform hover:scale-[1.02]"
          type="submit"
          disabled={isPending}
        >
          {isPending ? 'İnceleme Gönderiliyor...' : 'İnceleme Ekle'}
        </button>
        </form>
      </div>
      )}
    </div>
  )
}

export default AddReview;
