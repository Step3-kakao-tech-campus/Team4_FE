import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { getPopularStore, getSearchedStore } from '../apis/search';
import { getGPTReview, getReviews, getStoreDetail } from '../apis/storeDetail';
import { writeReview } from '../apis/review';
import { ReviewInfo } from '../types/review';

export function useSearchStore(searchString: string | null) {
  return useInfiniteQuery({
    queryKey: ['searchStore', { searchString }],
    queryFn: async ({
      pageParam = {
        nextCursor: -1,
        lastId: -1,
      },
    }) => getSearchedStore(searchString, pageParam.nextCursor, pageParam.lastId),
    getNextPageParam: (lastPage) => {
      const { cursorRequest } = lastPage;
      if (cursorRequest.nextCursor === null) {
        return undefined;
      }

      return {
        nextCursor: cursorRequest.nextCursor,
        lastId: cursorRequest.lastId,
      };
    },
  });
}

export function useStoreDetail(storeId: number) {
  return useQuery({
    queryKey: ['storeDetail', { storeId }],
    queryFn: async () => getStoreDetail(storeId),
  });
}

export function useStoreReview(storeId: number, sortBy: 'latest' | 'rating', cursorRating: number) {
  return useInfiniteQuery({
    queryKey: ['storeReview', { storeId }],
    queryFn: async ({ pageParam = 0 }) => getReviews(storeId, sortBy, pageParam + 7, cursorRating),
    getNextPageParam: (lastPage, allPages) => (
      lastPage.length === 0 ? undefined : allPages.flat().length
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
      reviewData: ReviewInfo
    }) => writeReview(storeId, reviewData),
  });
}

export function useGPTReview(storeId: number) {
  return useQuery({
    queryKey: ['GPTBestReview', { storeId }],
    queryFn: async () => getGPTReview(storeId),
  });
}

export function usePopularStore() {
  return useQuery({
    queryKey: ['popularStore'],
    queryFn: async () => getPopularStore(),
  });
}
