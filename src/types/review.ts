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
  imageIndex: number;
  tagIndex: number;
  name: string;
  locationX: number;
  locationY: number;
  rating: number;
}

export interface ReviewImageInfo {
  imageData: Blob;
  tags: ReviewImageTagInfo[];
}

export interface ReviewInfo {
  reviewImages: ReviewImageInfo[];
  content: string;
  rating: number;
  peopleCount: number;
  totalPrice: number;
}
