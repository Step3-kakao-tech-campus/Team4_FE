import { useState } from 'react';
import { useQuery } from 'react-query';
import { getLikedReview } from '../../apis/review';
import LikedReviewTemplate from '../template/likedReviewTemplate';

function LikedReviewPage() {
  const [page, setPage] = useState(1);
  const limits = 8;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getLikedReview?cursor=${1 + 8 * (page - 1)}&limits=${limits}`],
    queryFn: () => getLikedReview(1 + 8 * (page - 1), limits),
  });
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
