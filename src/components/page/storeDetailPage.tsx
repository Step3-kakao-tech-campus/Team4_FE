import { useParams } from 'react-router-dom';
import { useStoreDetail } from '../../hooks/query';
import StoreDetailTemplate from '../template/storeDetailTemplate';

export default function StoreDetailPage() {
  const { storeId } = useParams();

  if (storeId === undefined || Number.isNaN(+storeId)) {
    return <div>잘못된 접근입니다.</div>;
  }

  const { data, isLoading } = useStoreDetail(+storeId);
  const storeDetail = data?.data.response;

  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <StoreDetailTemplate storeDetail={storeDetail} />
  );
}
