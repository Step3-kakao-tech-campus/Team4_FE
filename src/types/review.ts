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

export interface ReviewDetailImageInfo {
  imageData: string;
  tags: ReviewImageTagInfo[];
}

export interface GPTBestReviewContent {
  isExist: boolean;
  content: {
    BEST: string;
  }
}

export interface GPTWorstReviewContent {
  isExist: boolean;
  content: {
    WORST: string;
  }
}

export interface ReviewDetailInfo {
  reviewImages: ReviewDetailImageInfo[];
  reviewerImage: string,
  createdAt: string,
  reviewerName: string,
  content: string;
  rating: number;
  peopleCount: number;
  totalPrice: number;
}

export interface Tag {
  name: string;
  locationX: number;
  locationY: number;
  rating: number;
}

export interface PostWriteReviewInfo {
  imageUrl: string;
  tags: Tag[];
}
