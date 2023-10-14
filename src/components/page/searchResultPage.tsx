import { useSearchParams } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import SearchResultTemplate from '../template/searchResultTemplate';
import { useSearchStore } from '../../hooks/query';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get('q');
  const [pageIndex, setPageIndex] = useState(0);

  const {
    data, isFetching, isLoading, hasNextPage, fetchNextPage,
  } = useSearchStore(searchString);

  const bottomObserverRef = useRef<HTMLDivElement>(null);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (hasNextPage !== false && bottomObserverRef.current !== null) {
          io.unobserve(bottomObserverRef.current);
          setPageIndex((prev) => prev + 1);
        }
      }
    });
  }, { threshold: 1 });

  useEffect(() => {
    if (hasNextPage !== false && bottomObserverRef.current !== null) {
      fetchNextPage();
      io.observe(bottomObserverRef.current);
    }
  }, [pageIndex]);

  return (
    <>
      {isFetching && isLoading ? <div>...</div> : (
        <>
        </>
      )}
      {data ? (
        <SearchResultTemplate
          searchString={searchString || ''}
          stores={data.pages.flat()}
        />
      ) : (
        <>
        </>
      )}
      <div ref={bottomObserverRef} className="mb-[3.7rem]" />
    </>
  );
}
