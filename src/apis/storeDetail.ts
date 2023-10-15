import { fetchInstance } from './instance';

export async function getStoreDetail(storeId: number) {
  return fetchInstance.get(`/stores/${storeId}`);
}
