import { ReviewCardInfo } from '../../types/review';
import { StoreDetail } from '../../types/store';
import StoreDetailHeader from '../molecules/storeDetailHeader';
import StoreDetailTab from '../organisms/storeDetailTab';

interface StoreDetailTemplateProps {
  storeDetail: StoreDetail;
  reviews: ReviewCardInfo[] | undefined;
}

export default function StoreDetailTemplate({
  storeDetail,
  reviews,
}: StoreDetailTemplateProps) {
  return (
    <main>
      <StoreDetailHeader
        storeName={storeDetail.storeName}
        storeImage={storeDetail.storeImage}
        rating={storeDetail.rating}
        reviewCount={storeDetail.reviewCount}
      />
      <StoreDetailTab
        storeInfo={storeDetail.information}
        reviews={reviews}
      />
    </main>
  );
}
