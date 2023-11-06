import { fetchInstance } from './instance';

interface PresignedUrls {
  presignedUrl: string,
}

interface ReviewImagesPresignedUrlInfo {
  reviewId: number,
  presignedUrls: PresignedUrls[]
}

export async function getReviewImagesPresignedUrls(
  storeId: number,
  content: string,
  rating: number,
  peopleCount: number,
  totalPrice: number,
  imageCount: number,
): Promise<ReviewImagesPresignedUrlInfo> {
  const response = await fetchInstance.post(`/stores/${storeId}/reviews/temp`, {
    content, rating, peopleCount, totalPrice, imageCount,
  });
  return response.data;
}
