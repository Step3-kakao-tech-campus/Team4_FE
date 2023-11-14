import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { resetMenu } from '../../store/slices/promptMenu';
import ReviewDetailTemplate from '../template/reviewDetailTemplate';
import { editReview } from '../../apis/review';
import { RefHandler } from '../../types/refHandler';
import { useReviewDetail } from '../../hooks/query';

function ReviewDetailPage() {
  const { t } = useTranslation();
  const { storeId: si, reviewId: ri } = useParams();
  const InputRef = useRef<RefHandler>(null);
  const dispatch = useDispatch();

  const storeId = Number(si);
  const reviewId = Number(ri);

  const handleEditReview = () => {
    if (Number.isNaN(storeId) || Number.isNaN(reviewId)) {
      return;
    }

    const content = InputRef.current?.getInputValue() || '';

    editReview(storeId, reviewId, { content }).then(() => {
      alert('리뷰를 수정 하였습니다.');
      window.location.reload();
    }).catch((error) => {
      alert(error.response.statusText);
    });
  };

  if (Number.isNaN(reviewId) || Number.isNaN(storeId)) {
    return <div>{t('reviewDetailPage.wrongApiAccess')}</div>;
  }

  useEffect(() => {
    dispatch(resetMenu());
  }, []);

  const { data, isLoading, isFetching } = useReviewDetail(storeId, reviewId);

  if (data && !isLoading && !isFetching) {
    return (
      <ReviewDetailTemplate
        data={data.data.data}
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
