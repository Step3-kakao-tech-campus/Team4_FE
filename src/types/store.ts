export interface StoreCardInfo {
  storeId: number;
  storeName: string;
  category: string;
  review: string;
  image: string;
  rating: number;
  reviewCount: number;
}

export interface StoreDetail {
  storeId: number;
  storeName: string;
  image: string;
  reviewCount: number;
  rating: number;
  information: string;
}
