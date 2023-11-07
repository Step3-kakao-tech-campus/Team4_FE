import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import ReviewDetailTemplate from '../template/reviewDetailTemplate';
import { editReview, getReviewDetail } from '../../apis/review';
import { RefHandler } from '../../types/refHandler';

function ReviewDetailPage() {
  const { t } = useTranslation();
  const { storeId, reviewId } = useParams();
  const InputRef = useRef<RefHandler>(null);

  const handleEditReview = () => {
    if (storeId === undefined || Number.isNaN(+storeId)
      || reviewId === undefined || Number.isNaN(+reviewId)) {
      return;
    }
    const content = InputRef.current?.getInputValue() || '';
    editReview(+storeId, +reviewId, { content }).then(() => {
      alert('리뷰를 수정 하였습니다.');
      window.location.reload();
    }).catch((error) => {
      alert(error.response.statusText);
    });
  };

  if (reviewId === undefined || Number.isNaN(+reviewId)
    || storeId === undefined || Number.isNaN(+storeId)) {
    return <div>{t('reviewDetailPage.wrongApiAccess')}</div>;
  }

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getReviewDetail/stores/${storeId}/reviews${reviewId}`],
    queryFn: () => getReviewDetail(+storeId, +reviewId),
  });

  if (data && !isLoading && !isFetching) {
    return (
      <ReviewDetailTemplate
        data={data}
        onClickeditReview={handleEditReview}
        ref={InputRef}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default ReviewDetailPage;
