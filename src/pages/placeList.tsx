import React, { useRef, useEffect } from 'react';

import { useInfinitePlaces } from '../queries/usePlaces';


const PlacesList = () => {
  const {
    data,               // veriler yani mekanlar
    fetchNextPage,      // sonraki sayfayı yüklemek için fonksiyon
    hasNextPage,        // daha fazla sayfa olup olmadığını kontrol eden değer
    isFetchingNextPage, // sonraki sayfa yükleniyor mu?
    status,             // api isteğinin durumu
  } = useInfinitePlaces();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  if (status === 'pending') return <p>Yükleniyor...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {data && data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.map(place => (
            <div key={place.id} className="border p-4 mb-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{place.name}</h2>
              <p>{place.description}</p>
            </div>
          ))}
        </React.Fragment>
      ))}

      {/* infinite scroll tetikleyicisi */}
      <div ref={observerRef} className="h-10" />

      {isFetchingNextPage && <p>Yeni sayfa yükleniyor...</p>}
    </div>
  );
}

export default PlacesList
