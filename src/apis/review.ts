import { ReviewCardInfo, PostWriteReviewInfo, ReviewDetailInfo } from '../types/review';

import { fetchInstance } from './instance';

export async function getWrtiedReview(
  cursor: number,
  limits: number,
): Promise<ReviewCardInfo[]> {
  const response = await fetchInstance.get(`/mypage/write-reviews?cursor=${cursor}&limits=${limits}`);
  return response.data.response;
}

export async function getLikedReview(
  cursor: number,
  limits: number,
): Promise<ReviewCardInfo[]> {
  const response = await fetchInstance.get(`/mypage/liked-reviews?cursor=${cursor}&limits=${limits}`);
  return response.data.response;
}

export async function getReviewDetail(
  storeId: number,
  reviewId: number,
): Promise<ReviewDetailInfo> {
  const response = await fetchInstance.get(`/stores/${storeId}/reviews/${reviewId}`);
  return response.data.response;
}

export async function writeReview(
  storeId: number,
  reviewData: PostWriteReviewInfo[],
) {
  return fetchInstance.post(`/stores/${storeId}/reviews`, reviewData);
}

export async function likeReview(
  storeId: number,
  reviewId: number,
) {
  return fetchInstance.post(`/stores/${storeId}/reviews/${reviewId}/like`);
}

export async function cancelLikeReview(
  storeId: number,
  reviewId: number,
) {
  return fetchInstance.post(`/stores/${storeId}/reviews/${reviewId}/like-cancel`);
}

export async function deleteReview(
  storeId: number,
  reviewId: number,
) {
  return fetchInstance.delete(`/stores/${storeId}/reviews/${reviewId}`);
}
