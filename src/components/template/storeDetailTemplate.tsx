import { useEffect } from 'react';
import { ReviewCardInfo } from '../../types/review';
import { StoreDetail } from '../../types/store';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/localStorage';
import StoreDetailHeader from '../molecules/storeDetailHeader';
import StoreDetailTab from '../organisms/storeDetailTab';

interface StoreDetailTemplateProps {
  storeDetail: StoreDetail;
  reviews: ReviewCardInfo[] | undefined;
  fetchReview: () => void;
}

export default function StoreDetailTemplate({
  storeDetail,
  reviews,
  fetchReview,
}: StoreDetailTemplateProps) {
  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const savedData = getLocalStorageItem('recentlyViewedStore');
      const toSaveData = {
        storeImage: storeDetail.storeImg,
        storeId: storeDetail.storeId,
        storeName: storeDetail.storeName,
        category: storeDetail.subCategory.category,
        ratingAvg: storeDetail.ratingAvg,
        numsOfReview: storeDetail.numsOfReview,
      };

      if (savedData === null) {
        setLocalStorageItem('recentlyViewedStore', JSON.stringify([toSaveData]));
      } else {
        const savedDataArray = JSON.parse(savedData)
          .filter((item: any) => item.storeId !== toSaveData.storeId);
        setLocalStorageItem('recentlyViewedStore', JSON.stringify([toSaveData, ...savedDataArray]));
      }
    }
  }, []);

  return (
    <main>
      <StoreDetailHeader
        storeId={storeDetail.storeId}
        storeName={storeDetail.storeName}
        storeImage={storeDetail.storeImg}
        rating={storeDetail.ratingAvg}
        reviewCount={storeDetail.numsOfReview}
      />
      <StoreDetailTab
        storeId={storeDetail.storeId}
        phoneNumber={storeDetail.phoneNumber}
        address={storeDetail.address}
        businessHours={storeDetail.businessHours}
        reviews={reviews}
        fetchReview={fetchReview}
      />
    </main>
  );
}
