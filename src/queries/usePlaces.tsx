import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addCommentToPlace, createPlace, getPlace, getPlaces, toggleFavoriteRequest } from '../services/mockService';

import { IPlace } from '../interfaces';

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

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ placeId, isFavorite }: { placeId: string; isFavorite: boolean }) =>
      toggleFavoriteRequest(placeId, isFavorite),

    onMutate: async ({ placeId, isFavorite }) => { // optimistik update yapılan yer mutasyon başlamadan önce çalışır ve cachedeki önceki değeri iptal edip yeni cache oluşturup yeni veriyi eskisine ekler
      await queryClient.cancelQueries(['places']);

      const previousPlaces = queryClient.getQueryData<any[]>(['places']);

      queryClient.setQueryData(['places'], (old: IPlace[]) =>
        old?.map((place: IPlace) =>
          place.id === placeId ? { ...place, isFavorite } : place
        )
      );

      return { previousPlaces }; // error durumunda geri dönmek için eski cache'yi gönderiyoruz ediyoruz
    },

    onError: (_error, _variables, context) => { // Eğer istek başarısız olursa cache'yi eski haline getiriyoruz (rollback)
      queryClient.setQueryData(['places'], context?.previousPlaces);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['places']);
    },
  });
};
