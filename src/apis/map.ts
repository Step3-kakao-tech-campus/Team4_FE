import { fetchInstance } from './instance';

export async function getStoresInBound({
  lowLat, highLat, lowLng, highLng,
}: {
  lowLat: number,
  highLat: number,
  lowLng: number,
  highLng: number,
}) {
  return fetchInstance.get(`/stores/boundary?maxlat=${highLat}&maxlon=${highLng}&minlat=${lowLat}&minlon=${lowLng}`);
}
