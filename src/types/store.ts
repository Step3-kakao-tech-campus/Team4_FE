export interface StoreCardInfo {
  storeId: number;
  storeName: string;
  category: {
    id: number;
    name: string;
  };
  review: string;
  image: string;
  ratingAvg: number;
  numsOfReview: number;
  likedCard?: boolean;
}

export interface StoreDetail {
  storeId: number;
  storeName: string;
  storeImg: string;
  numsOfReview: number;
  avgVisitCount: number;
  avgCostPerPerson: number;
  ratingAvg: number;
  subCategory: SubCategory;
  phoneNumber: string;
  address: string;
  businessHours: string;
}

export interface SubCategory {
  id: number;
  name: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
}
