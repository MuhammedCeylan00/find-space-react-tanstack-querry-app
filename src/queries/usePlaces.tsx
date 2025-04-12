import { useQuery } from '@tanstack/react-query';

import { getPlaces } from '../services/mockService';

export const usePlaces = () => {
  return useQuery({
    queryKey: ['places'],
    queryFn: getPlaces,
    staleTime: 1000 * 60 * 5
  });
};
