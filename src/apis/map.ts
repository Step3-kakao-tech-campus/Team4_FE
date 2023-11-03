import { fetchInstance } from './instance';

export async function getStoresInBound({
  lowLat, highLat, lowLng, highLng,
}: {
  lowLat: number,
  highLat: number,
  lowLng: number,
  highLng: number,
}) {
  return fetchInstance.get(`/store/boundary?minlat=${lowLat}&maxlat=${highLat}&minlon=${lowLng}&maxlon=${highLng}`);
}
