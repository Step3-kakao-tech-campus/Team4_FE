import { AxiosResponse } from 'axios';
import { GPTReviewContent, ReviewCardInfo } from '../types/review';
import { StoreDetail } from '../types/store';
import { fetchInstance } from './instance';
import { PagingDataResponse } from '../types/response';

export async function getStoreDetail(storeId: number) {
  return fetchInstance.get<AxiosResponse<StoreDetail>>(`/stores/${storeId}`);
}

export async function getReviews(
  storeId: number,
  cursor: number,
) {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<ReviewCardInfo>>>(
    `stores/${storeId}/reviews?sortBy=latest&cursorId=${cursor}&cursorLikes=${cursor}`,
  );

  return response.data.data;
}

export async function getGPTReview(storeId: number) {
  return fetchInstance.get<AxiosResponse<GPTReviewContent>>(`/gpt/stores/${storeId}/review`);
}
