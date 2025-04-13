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