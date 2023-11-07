export interface StoreCardInfo {
  storeImage: string;
  storeId: number;
  storeName: string;
  category: {
    id: number;
    name: string;
  };
  ratingAvg: number;
  numsOfReview: number;
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
