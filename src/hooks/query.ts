import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { getPopularStores, getSearchedStore } from '../apis/search';
import {
  getGPTReview,
  getReviews, getStoreDetail,
} from '../apis/storeDetail';
import { writeReview } from '../apis/review';
import { PostWriteReviewInfo } from '../types/review';

export function useSearchStore(searchString: string) {
  return useInfiniteQuery({
    queryKey: ['searchStore', { searchString }],
    queryFn: async ({ pageParam = 10000 }) => getSearchedStore(searchString, pageParam),
    getNextPageParam: (lastPage) => (
      lastPage.paging.hasNext ? lastPage.paging.nextCursor : null
    ),
  });
}

export function useStoreDetail(storeId: number) {
  return useQuery({
    queryKey: ['storeDetail', { storeId }],
    queryFn: async () => getStoreDetail(storeId),
  });
}

export function useStoreReview(storeId: number) {
  return useInfiniteQuery({
    queryKey: ['storeReview', { storeId }],
    queryFn: async ({ pageParam = 10000 }) => getReviews(storeId, pageParam),
    getNextPageParam: (lastPage) => (
      lastPage.paging.hasNext ? lastPage.paging.nextCursor : null
    ),
  });
}

export function useWriteReview() {
  return useMutation({
    mutationKey: ['writeReview'],
    mutationFn: async ({
      storeId,
      reviewData,
    }: {
      storeId: number,
      reviewData: PostWriteReviewInfo[]
    }) => writeReview(storeId, reviewData),
  });
}

export function useGPTReview(storeId: number) {
  return useQuery({
    queryKey: ['GPTReview', { storeId }],
    queryFn: async () => getGPTReview(storeId),
  });
}

export function usePopularStores() {
  return useQuery({
    queryKey: ['popularStores'],
    queryFn: async () => getPopularStores(),
  });
}
