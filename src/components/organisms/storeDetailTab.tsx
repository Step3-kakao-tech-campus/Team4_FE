import { useState } from 'react';
import { ReviewCardInfo } from '../../types/review';
import StoreInfoTab from './storeInfoTab';
import StoreReviewTab from './storeReviewTab';

interface StoreDetailTabProps {
  storeInfo: string;
  reviews: ReviewCardInfo[] | undefined;
  fetchReview: () => void;
}

export default function StoreDetailTab({
  storeInfo,
  reviews,
  fetchReview,
}: StoreDetailTabProps) {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="flex h-12 w-full border-t border-black">
        <button
          type="button"
          className={`${tab === 0 ? 'border-b-white' : 'border-b-black'} flex grow items-center justify-center border-b border-r border-r-black`}
          onClick={() => setTab(0)}
        >
          개요
        </button>
        <button
          type="button"
          className={`${tab === 1 ? 'border-b-white' : 'border-b-black'} flex grow items-center justify-center border-b`}
          onClick={() => setTab(1)}
        >
          리뷰
        </button>
      </div>
      <div>
        {tab === 0 ? <StoreInfoTab storeInfo={storeInfo} /> : null}
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
