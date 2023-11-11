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

interface Category {
  id: number;
  name: string;
}

interface SubCategory {
  id: number;
  name: string;
  category: Category;
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
