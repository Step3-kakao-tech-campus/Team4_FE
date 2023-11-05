import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import ReviewDetailTemplate from '../template/reviewDetailTemplate';
import { getReviewDetail } from '../../apis/review';

function ReviewDetailPage() {
  const { t } = useTranslation();
  const { reviewId } = useParams();

  if (reviewId === undefined || Number.isNaN(+reviewId)) {
    return <div>{t('reviewDetailPage.wrongApiAccess')}</div>;
  }

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['reviewDetail'],
    queryFn: () => getReviewDetail(+reviewId),
  });

  if (data && !isLoading && !isFetching) {
    return (
      <ReviewDetailTemplate
        data={data.data.data}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default ReviewDetailPage;
