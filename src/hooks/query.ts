import { useInfiniteQuery, useQuery } from 'react-query';
import { getSearchedStore } from '../apis/search';
import { getReviews, getStoreDetail } from '../apis/storeDetail';
import { getStoresInBound } from '../apis/map';

export function useSearchStore(searchString: string | null) {
  return useInfiniteQuery({
    queryKey: ['searchStore', { searchString }],
    queryFn: async ({ pageParam = 0 }) => getSearchedStore(searchString, pageParam),
    getNextPageParam: (lastPage, allPages) => (
      lastPage.length === 0 ? undefined : allPages.flat().length
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
    queryFn: async ({ pageParam = 0 }) => getReviews(storeId, pageParam),
    getNextPageParam: (lastPage, allPages) => (
      lastPage.length === 0 ? undefined : allPages.flat().length
    ),
  });
}

export function useStoreBound(bound: string) {
  return useQuery({
    queryKey: ['storeBound', { bound }],
    queryFn: async () => getStoresInBound(bound),
  });
}
