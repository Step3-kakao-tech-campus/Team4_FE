import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import ReviewDetailTemplate from '../template/reviewDetailTemplate';
import { getReviewDetail } from '../../apis/review';

function ReviewDetailPage() {
  const { storeId, reviewId } = useParams();

  if (reviewId === undefined || Number.isNaN(+reviewId)
    || storeId === undefined || Number.isNaN(+storeId)) {
    return <div>잘못된 접근입니다.</div>;
  }

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getReviewDetail/stores/${storeId}/reviews${reviewId}`],
    queryFn: () => getReviewDetail(+reviewId),
  });

  if (data && !isLoading && !isFetching) {
    return (
      <ReviewDetailTemplate
        data={data}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default ReviewDetailPage;
