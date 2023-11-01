export interface StoreCardInfo {
  storeId: number;
  storeName: string;
  category: string;
  review: string;
  image: string;
  rating: number;
  reviewCount: number;
  likedCard?: boolean;
}

export interface StoreDetail {
  storeId: number;
  storeName: string;
  storeImage: string;
  reviewCount: number;
  rating: number;
  information: string;
  lowRatingReview: string;
  highRatingReview: string;
}
