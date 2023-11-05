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

  return (
    <>
      <ul>
        {reviews.map((review) => (
          <li key={review.reviewId}>
            <ReviewCard
              storeId={storeId}
              reviewId={review.reviewId}
              rating={review.rating}
              userId={review.userId}
              storeImage={review.storeImage}
              storeName={review.storeName}
              createdAt={review.createdAt}
              updated={review.updated}
            />
          </li>
        ))}
      </ul>
      <div ref={bottomObserverRef} className="mb-[3.7rem]" />
    </>
  );
}
