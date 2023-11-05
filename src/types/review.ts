export interface ReviewCardInfo {
  storeId: number;
  reviewId: number;
  storeImage: string;
  storeName: string;
  userId: number;
  rating: number;
  createdAt: string;
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

export interface ReviewImageInfo {
  imageData: Blob;
  tags: ReviewImageTagInfo[];
}

export interface ReviewDetailImageInfo {
  imageData: string;
  tags: ReviewImageTagInfo[];
}

export interface ReviewInfo {
  reviewImages: ReviewImageInfo[];
  content: string;
  rating: number;
  peopleCount: number;
  totalPrice: number;
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
  reviewer: {
    profileImage: string;
    userName: string;
  }
  createdAt: string,
  averageCostPerPerson: number;
  peopleCount: number;
  content: string;
  rating: number;
  recommendCount: number;
  totalPrice: number;
  updated: boolean;
}
