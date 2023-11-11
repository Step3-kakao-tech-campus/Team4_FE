import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { getPopularStores, getSearchedStore } from '../apis/search';
import {
  getGPTReview,
  getReviews, getStoreDetail,
} from '../apis/storeDetail';
import {
  getLikedReview, getReviewDetail, getWritedReview, writeReview,
} from '../apis/review';
import { PostWriteReviewInfo } from '../types/review';
import { getLikedStore } from '../apis/likedStore';
import { getChargeCoin, getUsageCoin } from '../apis/coin';

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
      reviewId,
      reviewData,
    }: {
      storeId: number;
      reviewId: number;
      reviewData: {
        reviewImages: PostWriteReviewInfo[];
      };
    }) => writeReview(storeId, reviewId, reviewData),
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

export function useReviewDetail(storeId: number, reviewId: number) {
  return useQuery({
    queryKey: ['reviewDetail', { storeId, reviewId }],
    queryFn: async () => getReviewDetail(storeId, reviewId),
  });
}

export function useLikedStore(token: string | null) {
  return useInfiniteQuery({
    queryKey: ['likedStore', { token }],
    queryFn: async ({ pageParam = 10000 }) => getLikedStore(token, pageParam),
    getNextPageParam: (lastPage) => (
      lastPage.paging.hasNext ? lastPage.paging.nextCursor : null
    ),
  });
}

export function useLikedReview(token: string | null) {
  return useInfiniteQuery({
    queryKey: ['likedReview', { token }],
    queryFn: async ({ pageParam = 10000 }) => getLikedReview(token, pageParam),
    getNextPageParam: (lastPage) => (
      lastPage.paging.hasNext ? lastPage.paging.nextCursor : null
    ),
  });
}

export function useWritedReview(token: string | null) {
  return useInfiniteQuery({
    queryKey: ['WritedReview', { token }],
    queryFn: async ({ pageParam = 10000 }) => getWritedReview(token, pageParam),
    getNextPageParam: (lastPage) => (
      lastPage.paging.hasNext ? lastPage.paging.nextCursor : null
    ),
  });
}

export function useRechargedCoinHistory(token: string | null) {
  return useInfiniteQuery({
    queryKey: ['rechargedCoin', { token }],
    queryFn: async ({ pageParam = '2100-01-01T00:00:00' }) => getChargeCoin(token, pageParam),
    getNextPageParam: (lastPage) => (
      lastPage.paging.hasNext ? lastPage.paging.nextCursor : null
    ),
  });
}

export function useUsedCoinHistory(token: string | null) {
  return useInfiniteQuery({
    queryKey: ['usedCoin', { token }],
    queryFn: async ({ pageParam = '2100-01-01T00:00:00' }) => getUsageCoin(token, pageParam),
    getNextPageParam: (lastPage) => (
      lastPage.paging.hasNext ? lastPage.paging.nextCursor : null
    ),
  });
}
