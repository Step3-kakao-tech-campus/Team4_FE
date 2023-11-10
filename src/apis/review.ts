import { AxiosResponse } from 'axios';
import {
  PostWriteReviewInfo, ReviewDetailInfo, MypageReviewCardInfo,
} from '../types/review';

import { fetchInstance } from './instance';
import { PagingDataResponse } from '../types/response';

export async function getWritedReview(token: string | null, cursor: number) {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<MypageReviewCardInfo>>>(
    `/mypage/my-reviews?sortBy=latest&cursorId=${cursor}&cursor=${cursor}`,
    {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    },
  );

  return response.data.data;
}

export async function getLikedReview(token: string | null, cursor: number) {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<MypageReviewCardInfo>>>(
    `/mypage/liked-reviews?cursorId=${cursor}`,
    {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    },
  );

  return response.data.data;
}

export async function getReviewDetail(
  storeId: number,
  reviewId: number,
) {
  return fetchInstance.get<AxiosResponse<ReviewDetailInfo>>(`/stores/${storeId}/reviews/${reviewId}`);
}

export async function writeReview(
  storeId: number,
  reviewId: number,
  reviewData: {
    reviewImages: PostWriteReviewInfo[];
  },
) {
  return fetchInstance.post(`/stores/${storeId}/reviews/${reviewId}`, reviewData);
}

export async function editReview(
  storeId: number,
  reviewId: number,
  data: {
    content: string,
  },
) {
  return fetchInstance.put(`/stores/${storeId}/reviews/${reviewId}`, data);
}

export async function deleteReview(
  storeId: number,
  reviewId: number,
) {
  return fetchInstance.delete(`/stores/${storeId}/reviews/${reviewId}`);
}

export async function toggleReviewLike(token: string | null, reviewId: number) {
  return fetchInstance.post(`reviews/${reviewId}/like`, null, {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });
}
