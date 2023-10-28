import { fetchInstance } from './instance';

export async function getStoresInBound(bound: string) {
  const response = await fetchInstance.get(`/?latlng=${bound}`);

  return response.data.response;
}
