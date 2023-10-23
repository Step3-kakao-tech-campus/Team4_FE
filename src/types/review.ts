export interface ReviewCardInfo {
  storeId: number,
  reviewId: number,
  storeImage: string,
  storeName: string,
  profileImage: string,
  reviewerName: string,
  reviewRating: number,
  visitedCount: number,
  createdAt: string,
}

export interface ReviewImageTagInfo {
  name: string;
  locationX: number;
  locationY: number;
  rating: number;
}

export interface ReviewImageInfo {
  imageData: File;
  tags: ReviewImageTagInfo[];
}
