import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LikedStoreTemplate from '../template/likedStoreTemplate';
import { useLikedStore } from '../../hooks/query';

function LikedStorePage() {
  const [page, setPage] = useState(1);
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

  const { data, isLoading, isFetching } = useLikedStore(token);

  const onHandleChangePage = (type: 'right' | 'left') => {
    if (type === 'right') {
      setPage((prev) => prev + 1);
    } else if (type === 'left') {
      setPage((prev) => prev - 1);
    }
  };

  if (data && !isLoading && !isFetching) {
    return (
      <LikedStoreTemplate
        likedStore={data.data.data.storeList}
        page={page}
        onChangePage={onHandleChangePage}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default LikedStorePage;
