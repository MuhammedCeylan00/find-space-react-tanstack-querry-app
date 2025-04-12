import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPlaces = async () => {
  const res = await axios.get('http://localhost:4000/places');
  return res.data;
};

export const usePlaces = () => {
  return useQuery({
    queryKey: ['places'],
    queryFn: fetchPlaces,
    staleTime: 1000 * 60 * 5 // 5 dakika boyunca stale sayma
  });
};
