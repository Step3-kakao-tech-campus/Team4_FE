import { ReviewCardInfo } from '../types/review';
import { fetchInstance } from './instance';

export async function getStoreDetail(storeId: number) {
  return fetchInstance.get(`/store/${storeId}`);
}

export async function getReviews(
  storeId: number,
  sortBy: 'latest' | 'rating',
  cursorId: number,
  cursorRating: number,
): Promise<ReviewCardInfo[]> {
  const response = await fetchInstance.get(`/stores/${storeId}/reviews?sortBy=${sortBy}&cursorId=${cursorId}&cursorRating=${cursorRating}`);

  return response.data.data;
}

export async function getGPTBestReview(storeId: number) {
  return fetchInstance.get(`/gpt/store/${storeId}/review/best`);
}

export async function getGPTWorstReview(storeId: number) {
  return fetchInstance.get(`/gpt/store/${storeId}/review/worst`);
}
