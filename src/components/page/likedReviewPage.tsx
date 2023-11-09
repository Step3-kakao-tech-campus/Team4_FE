import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getLikedReview } from '../../apis/review';
import LikedReviewTemplate from '../template/likedReviewTemplate';

function LikedReviewPage() {
  const [page, setPage] = useState(1);
  const limits = 8;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getLikedReview?cursor=${1 + 8 * (page - 1)}&limits=${limits}`],
    queryFn: () => getLikedReview(1 + 8 * (page - 1), limits),
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
      <LikedReviewTemplate
        likedReview={data}
        page={page}
        onChangePage={onHandleChangePage}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default LikedReviewPage;
