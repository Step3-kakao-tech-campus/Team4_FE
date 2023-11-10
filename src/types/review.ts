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
  storeId: number;
  reviewId: number;
  reviewer: {
    profileImage: string;
    userName: string;
    email: string;
  }
  reviewImages: ReviewDetailImageInfo[];
  averageCostPerPerson: number;
  peopleCount: number;
  createdAt: string;
  rating: number;
  recommendCount: number;
  content: string;
  totalPrice: number;
  updated: boolean;
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

export interface MypageReviewCardInfo {
  id: number;
  rating: number;
  content: string;
  createdAt: string;
  storeImage: string;
  storeName: string;
  relativeTime: string;
  updated: boolean;
  numOfLikes: number;
  peopleCount: number;
}
