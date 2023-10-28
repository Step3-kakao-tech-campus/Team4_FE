import { fetchInstance } from './instance';
import { ReviewCardInfo, ReviewInfo } from '../types/review';

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
  reviewId: number,
): Promise<ReviewInfo> {
  const response = await fetchInstance.get(`/reviews/${reviewId}`);
  return response.data.response;
}
