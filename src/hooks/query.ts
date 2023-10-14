import { useInfiniteQuery } from 'react-query';
import { getSearchedStore } from '../apis/search';

export function useSearchStore(searchString: string | null) {
  return useInfiniteQuery({
    queryKey: ['searchStore', { searchString }],
    queryFn: async ({ pageParam = 0 }) => getSearchedStore(searchString, pageParam),
    getNextPageParam: (lastPage, allPages) => (
      lastPage.length === 0 ? undefined : allPages.flat().length
    ),
  });
}
