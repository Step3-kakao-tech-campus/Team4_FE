import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LikedStoreTemplate from '../template/likedStoreTemplate';
import { getLikedStore } from '../../apis/likedStore';

function LikedStorePage() {
  const [page, setPage] = useState(1);
  const limits = 6;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getLikedStore?cursor=${1 + 6 * (page - 1)}&limits=${limits}`],
    queryFn: () => getLikedStore(1 + 6 * (page - 1), limits),
  });

  const navigate = useNavigate();
  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login', {
        replace: true,
      });
    }
  }, []);

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
        likedStore={data}
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
