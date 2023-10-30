import { fetchInstance } from './instance';

export async function getStoresInBound({
  lowLat, highLat, lowLng, highLng,
}: {
  lowLat: number,
  highLat: number,
  lowLng: number,
  highLng: number,
}) {
  return fetchInstance.get(`/?lowLat=${lowLat}&highLat=${highLat}&lowLng=${lowLng}&highLng=${highLng}`);
}
