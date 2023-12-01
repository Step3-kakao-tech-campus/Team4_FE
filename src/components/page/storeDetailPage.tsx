import { useParams } from 'react-router-dom';
import { useStoreDetail, useStoreReview } from '../../hooks/query';
import StoreDetailTemplate from '../template/storeDetailTemplate';
import ErrorPage from './errorPage';

export default function StoreDetailPage() {
  const { storeId } = useParams();
  const storeIdToNum = Number(storeId);

  const { data: storeDetailData } = useStoreDetail(storeIdToNum);
  const storeDetail = storeDetailData?.data.data;

  const {
    data: reviewData, hasNextPage, fetchNextPage,
  } = useStoreReview(storeIdToNum);

  const fetchReview = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (!storeDetail) {
    return <ErrorPage errorMessage="음식점 정보를 불러오는데 실패했습니다." />;
  }

  return (
    <StoreDetailTemplate
      storeDetail={storeDetail}
      reviews={reviewData?.pages.map((page) => page.body).flat()}
      fetchReview={fetchReview}
    />
  );
}
