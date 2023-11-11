import { AxiosResponse } from 'axios';
import { fetchInstance } from './instance';

export async function checkLikedStore(token: string | null, storeId: number) {
  return fetchInstance.get<AxiosResponse<{ hasLiked: boolean }>>(`/stores/${storeId}/if-liked`, {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });
}

export async function checkLikedReview(token: string | null, reviewId: number) {
  return fetchInstance.get<AxiosResponse<{ hasLiked: boolean }>>(`/reviews/${reviewId}/if-liked`, {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });
}
