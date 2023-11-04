import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReviewCardInfo } from '../../types/review';
import StoreOverviewTab from './storeOverviewTab';
import StoreReviewTab from './storeReviewTab';
import { useGPTBestReview, useGPTWorstReview } from '../../hooks/query';

interface StoreDetailTabProps {
  storeId: number;
  phoneNumber: string;
  address: string;
  businessHours: string;
  reviews: ReviewCardInfo[] | undefined;
  fetchReview: () => void;
}

export default function StoreDetailTab({
  storeId,
  phoneNumber,
  address,
  businessHours,
  reviews,
  fetchReview,
}: StoreDetailTabProps) {
  const [tab, setTab] = useState(0);
  const { t } = useTranslation();

  const { data: bestReview } = useGPTBestReview(storeId);
  const { data: worstReview } = useGPTWorstReview(storeId);

  const bestReviewData = bestReview?.data.data;
  const worstReviewData = worstReview?.data.data;

  return (
    <div>
      <div className="flex h-12 w-full border-t border-black">
        <button
          type="button"
          className={`${tab === 0 ? 'border-b-white' : 'border-b-black'} flex grow items-center justify-center border-b border-r border-r-black`}
          onClick={() => setTab(0)}
        >
          {t('storeDetail.overview')}
        </button>
        <button
          type="button"
          className={`${tab === 1 ? 'border-b-white' : 'border-b-black'} flex grow items-center justify-center border-b`}
          onClick={() => setTab(1)}
        >
          {t('storeDetail.review')}
        </button>
      </div>
      <div className="pb-[3.7rem]">
        {tab === 0 ? (
          <StoreOverviewTab
            phoneNumber={phoneNumber}
            address={address}
            businessHours={businessHours}
            lowRatingReview={worstReviewData}
            highRatingReview={bestReviewData}
          />
        ) : null}
        {tab === 1 && reviews ? (
          <StoreReviewTab
            reviews={reviews}
            fetchReview={fetchReview}
          />
        ) : null}
      </div>
    </div>
  );
}
