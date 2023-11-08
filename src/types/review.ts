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

// {
//   "data": {
//     "storeId": 1,
//     "reviewId": 2,
//     "reviewer": {
//       "profileImage": null,
//       "userName": "ac98bef6-79c0-4a7b-b9b4-9c3e397dbbd7",
//       "email": "female@gmail.com"
//     },
//     "averageCostPerPerson": 150000,
//     "peopleCount": 2,
//     "createdAt": "15 hoursago",
//     "rating": 4,
//     "recommendCount": 2,
//     "content": "참말로 맛있네용",
//     "reviewImages": [],
//     "totalPrice": 30000,
//     "updated": true
//   }
// }

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
