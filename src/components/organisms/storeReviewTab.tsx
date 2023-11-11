import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '../../hooks/intersectionObserver';
import { ReviewCardInfo } from '../../types/review';
import ReviewCard from '../molecules/reviewCard';

interface StoreReviewTabProps {
  storeId: number;
  reviews: ReviewCardInfo[];
  fetchReview: () => void;
}

export default function StoreReviewTab({
  storeId,
  reviews,
  fetchReview,
}:StoreReviewTabProps) {
  const bottomObserverRef = useIntersectionObserver(fetchReview, { threshold: 1 });
  const { t } = useTranslation();

  return (
    <>
      <ul>
        {reviews && reviews[0] !== null ? reviews.map((review) => (
          review ? (
            <li key={review.reviewId}>
              <ReviewCard
                storeId={storeId}
                reviewId={review.reviewId}
                rating={review.rating}
                imageUrl={review.imageUrl}
                content={review.content}
                createdAt={review.createdAt}
                numOfLikes={review.numOfLikes}
                updated={review.updated}
              />
            </li>
          ) : null
        )) : <div>{t('storeDetail.noReview')}</div>}
      </ul>
      <div ref={bottomObserverRef} className="mb-[3.7rem]" />
    </>
  );
}
