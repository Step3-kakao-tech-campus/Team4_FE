import { fetchInstance } from './instance';

interface PresignedUrls {
  presignedUrl: string,
}

interface ReviewImagesPresignedUrlInfo {
  reviewId: number,
  presignedUrls: PresignedUrls[]
}

export async function getReviewImagesPresignedUrls(
  content: string,
  rating: number,
  peopleCount: number,
  totalPrice: number,
  imageCount: number,
): Promise<ReviewImagesPresignedUrlInfo[]> {
  const response = await fetchInstance.post('/getReivewdPresignedUrl', {
    content, rating, peopleCount, totalPrice, imageCount,
  });
  return response.data;
}
