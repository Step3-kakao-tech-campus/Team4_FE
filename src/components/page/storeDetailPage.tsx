import { useParams } from 'react-router-dom';
import { useStoreDetail, useStoreReview } from '../../hooks/query';
import StoreDetailTemplate from '../template/storeDetailTemplate';

export default function StoreDetailPage() {
  const { storeId } = useParams();

  if (storeId === undefined || Number.isNaN(+storeId)) {
    return <div>잘못된 접근입니다.</div>;
  }

  const { data: storeDetailData, isLoading: isStoreDetailDataLoading } = useStoreDetail(+storeId);
  const storeDetail = storeDetailData?.data.response;

  const { data: reviewData } = useStoreReview(+storeId);

  if (isStoreDetailDataLoading) {
    return <div>...</div>;
  }

  return (
    <StoreDetailTemplate
      storeDetail={storeDetail}
      reviews={reviewData?.pages.flat()}
    />
  );
}
