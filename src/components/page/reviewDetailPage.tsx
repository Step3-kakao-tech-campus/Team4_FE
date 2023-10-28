import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewDetailTemplate from '../template/reviewDetailTemplate';

function ReviewDetailPage() {
  const { reviewId } = useParams();

  if (reviewId === undefined || Number.isNaN(+reviewId)) {
    return <div>잘못된 접근입니다.</div>;
  }
  return (
    <ReviewDetailTemplate />
  );
}

export default ReviewDetailPage;
