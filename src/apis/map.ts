import { AxiosResponse } from 'axios';
import { fetchInstance } from './instance';
import { MarkerInfo } from '../types/map';

export async function getStoresInBound({
  lowLat, highLat, lowLng, highLng,
}: {
  lowLat: number,
  highLat: number,
  lowLng: number,
  highLng: number,
}) {
  return fetchInstance.get<AxiosResponse<MarkerInfo[]>>(`/stores/boundary?maxlat=${highLat}&maxlon=${highLng}&minlat=${lowLat}&minlon=${lowLng}`);
}
