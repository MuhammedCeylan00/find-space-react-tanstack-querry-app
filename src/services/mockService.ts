import { Axios } from ".";

import { IPlace } from "../interfaces";

export const getPlaces = async () => {
  const res = await Axios.get('/places');
  return res.data;
};

export const getPlace = async (placeId: string) => {
  const res = await Axios.get(`/places/${placeId}`);
  return res.data;
};

export const createPlace = async (newPlace: IPlace) => {
  const response = await Axios.post('/places', newPlace);
  return response.data;
};

export const addCommentToPlace = async (placeId: string, comment: string) => {
  const { data: place } = await Axios.get(`/places/${placeId}`);

  if (!place) throw new Error("Mekan bulunamadı");

  const updatedComments = [...place.comments, comment];

  const { data: updatedPlace } = await Axios.patch(`/places/${placeId}`, {
    comments: updatedComments,
  });

  return updatedPlace;
};

export const toggleFavoriteRequest = async (placeId: string, isFavorite: boolean) => {
  return Axios.patch(`/places/${placeId}`, {
    isFavorite,
  });
};

export const toggleFavoriteRequest2 = async (placeId: string, isFavorite: boolean) => {  // optimistiği test etmek için
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Axios.patch(`/places/${placeId}`, { isFavorite })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    }, 5000); 
  });
};

export const toggleFavoriteRequest3 = async (placeId: string, isFavorite: boolean) => { // optimistikte eğer api hata döndürürse ne olur testi için
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Sunucu hatası: Favori işlemi başarısız oldu'));
    }, 5000); // 5 saniye sonra bilinçli hata
  });
};