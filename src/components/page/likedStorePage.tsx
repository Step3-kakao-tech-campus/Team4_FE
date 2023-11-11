import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LikedStoreTemplate from '../template/likedStoreTemplate';
import { useLikedStore } from '../../hooks/query';
import divideArray from '../../utils/array';

function LikedStorePage() {
  const [page, setPage] = useState(1);
  const [lastFetchedPage, setLastFetchedPage] = useState(1);
  const token = localStorage.getItem('accessToken');

  const navigate = useNavigate();
  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (token === null) {
      navigate('/login', {
        replace: true,
      });
    }
  }, []);

  const {
    data, isLoading, isFetching, hasNextPage, fetchNextPage,
  } = useLikedStore(token);

  const handleChangePage = (type: 'right' | 'left') => {
    if (type === 'right') {
      if (page === lastFetchedPage && hasNextPage) {
        fetchNextPage();
        setPage((prev) => prev + 1);
        setLastFetchedPage((prev) => prev + 1);
      } else {
        setPage((prev) => prev + 1);
      }
    } else if (type === 'left') {
      setPage((prev) => prev - 1);
    }
  };

  if (!data || isLoading || isFetching) {
    return <div>Loading..</div>;
  }

  return (
    <LikedStoreTemplate
      likedStore={divideArray(data.pages.map((p) => p.body).flat(), 6)[page - 1]}
      page={page}
      onChangePage={handleChangePage}
      isLastPage={page === lastFetchedPage && !hasNextPage}
    />
  );
}

export default LikedStorePage;
