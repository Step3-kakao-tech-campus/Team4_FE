import { useParams } from 'react-router-dom';
import { useStoreDetail, useStoreReview } from '../../hooks/query';
import StoreDetailTemplate from '../template/storeDetailTemplate';

export default function StoreDetailPage() {
  const { storeId } = useParams();
  const storeIdToNum = Number(storeId);

  const { data: storeDetailData } = useStoreDetail(storeIdToNum);
  const storeDetail = storeDetailData?.data.response;

  const {
    data: reviewData, hasNextPage, fetchNextPage,
  } = useStoreReview(storeIdToNum);

  const fetchReview = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <StoreDetailTemplate
      storeDetail={storeDetail}
      reviews={reviewData?.pages.flat()}
      fetchReview={fetchReview}
    />
  );
}
