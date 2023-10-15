import { useInfiniteQuery, useQuery } from 'react-query';
import { getSearchedStore } from '../apis/search';
import { getStoreDetail } from '../apis/storeDetail';

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
