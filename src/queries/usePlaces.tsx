import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addCommentToPlace, createPlace, getPlace, getPlaces } from '../services/mockService';

export const usePlaces = () => {
  return useQuery({
    queryKey: ['places'],
    queryFn: getPlaces,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePlace = (placeId: string) => {
  return useQuery({
    queryKey: ['place', placeId],
    queryFn: () => getPlace(placeId),
    enabled: !!placeId,  // undefined gelirse çalışmasın sorgu
    staleTime: 1000 * 60 * 5
  });
};

export const useCreatePlace = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
    },
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ placeId, review }: { placeId: string; review: string }) =>
      addCommentToPlace(placeId, review),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['place', variables.placeId] });
    },
  });
};