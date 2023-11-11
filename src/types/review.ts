export interface ReviewCardInfo {
  storeId: number;
  reviewId: number;
  rating: number;
  imageUrl: string;
  content: string;
  createdAt: string;
  numOfLikes: number;
  updated: boolean;
}

export interface MypageReviewCardInfo {
  reviewId: number;
  storeId: number;
  rating: number;
  content: string;
  imageUrl: string;
  createdAt: string;
  storeImage: string;
  storeName: string;
  relativeTime: string;
  updated: boolean;
  numOfLikes: number;
  peopleCount: number;
}

export interface ReviewImageTagInfo {
  imageIndex: number;
  tagIndex: number;
  name: string;
  locationX: number;
  locationY: number;
  rating: number;
}

export interface Tag {
  name: string;
  locationX: number;
  locationY: number;
  rating: number;
}

export interface ReviewDetailTag {
  name: string;
  location_x: number;
  location_y: number;
  rating: number;
}

export interface ReviewDetailImageInfo {
  image: string;
  tags: ReviewDetailTag[];
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

export interface PostWriteReviewInfo {
  imageUrl: string;
  tags: Tag[];
}

export interface ReviewImagesPresignedUrlInfo {
  reviewId: number;
  presignedUrls: {
    presignedUrl: string;
  }[];
}
