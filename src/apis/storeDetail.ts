import { ReviewCardInfo } from '../types/review';
import { fetchInstance } from './instance';

export async function getStoreDetail(storeId: number) {
  return fetchInstance.get(`/stores/${storeId}`);
}

export async function getReviews(
  storeId: number,
  cursor: number,
): Promise<ReviewCardInfo[]> {
  const response = await fetchInstance.get(`/stores/${storeId}/reviews?c=${cursor}`);

  return response.data.response;
}
