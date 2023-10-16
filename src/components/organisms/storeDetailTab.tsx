import { useState } from 'react';
import { ReviewCardInfo } from '../../types/review';
import ReviewCard from '../molecules/reviewCard';

interface StoreDetailTabProps {
  storeInfo: string;
  reviews: ReviewCardInfo[] | undefined;
}

export default function StoreDetailTab({
  storeInfo,
  reviews,
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
        {tab === 0 ? <div>{storeInfo}</div> : (
          <>
          </>
        )}
        {tab === 1 && reviews ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.reviewId}>
                <ReviewCard
                  storeId={review.storeId}
                  reviewId={review.reviewId}
                  reviewRating={review.reviewRating}
                  reviewerName={review.reviewerName}
                  storeImage={review.storeImage}
                  storeName={review.storeName}
                  profileImage={review.profileImage}
                  visitedCount={review.visitedCount}
                  createdAt={review.createdAt.toString()}
                />
              </li>
            ))}
          </ul>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  );
}
