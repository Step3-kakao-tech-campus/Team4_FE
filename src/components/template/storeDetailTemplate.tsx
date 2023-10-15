import { StoreDetail } from '../../types/store';
import StoreDetailHeader from '../molecules/storeDetailHeader';

interface StoreDetailTemplateProps {
  storeDetail: StoreDetail;
}

export default function StoreDetailTemplate({
  storeDetail,
}: StoreDetailTemplateProps) {
  return (
    <main>
      <StoreDetailHeader
        storeName={storeDetail.storeName}
        storeImage={storeDetail.storeImage}
        rating={storeDetail.rating}
        reviewCount={storeDetail.reviewCount}
      />
    </main>
  );
}
