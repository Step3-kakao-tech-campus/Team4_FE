import { AxiosResponse } from 'axios';
import { fetchInstance } from './instance';
import { ReviewImagesPresignedUrlInfo } from '../types/review';

export async function getReviewImagesPresignedUrls(
  token: string | null,
  storeId: number,
  content: string,
  rating: number,
  peopleCount: number,
  totalPrice: number,
  imageCount: number,
) {
  return fetchInstance.post<AxiosResponse<ReviewImagesPresignedUrlInfo>>(
    `/stores/${storeId}/reviews/temp`,
    {
      content: `${content}`,
      rating,
      peopleCount,
      totalPrice,
      imageCount,
    },
    {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    },
  );
}
