export interface ReviewCardInfo {
  storeId: number;
  reviewId: number;
  rating: number;
  imageUrls: string;
  content: string;
  createdAt: string;
  numOfLikes: number;
  updated: boolean;
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

export interface GPTReviewContent {
  isExist: boolean;
  content: {
    best: string;
    worst: string;
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
  isOwn: boolean,
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
