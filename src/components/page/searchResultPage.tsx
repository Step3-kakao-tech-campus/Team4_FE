import { useSearchParams } from 'react-router-dom';
import SearchResultTemplate from '../template/searchResultTemplate';
import { useSearchStore } from '../../hooks/query';
import { useIntersectionObserver } from '../../hooks/intersectionObserver';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get('q');

  const {
    data, isFetching, isLoading, hasNextPage, fetchNextPage,
  } = useSearchStore(searchString);

  const bottomObserverRef = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, { threshold: 1 });

  return (
    <>
      {isFetching && isLoading ? <div>...</div> : null}
      {data ? (
        <SearchResultTemplate
          searchString={searchString || ''}
          stores={data.pages.flat()}
        />
      ) : null}
      <div ref={bottomObserverRef} className="mb-[3.7rem]" />
    </>
  );
}
