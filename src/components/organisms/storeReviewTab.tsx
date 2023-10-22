import { useIntersectionObserver } from '../../hooks/intersectionObserver';
import { ReviewCardInfo } from '../../types/review';
import ReviewCard from '../molecules/reviewCard';

interface StoreReviewTabProps {
  reviews: ReviewCardInfo[];
  fetchReview: () => void;
}

export default function StoreReviewTab({
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
              storeId={review.storeId}
              reviewId={review.reviewId}
              reviewRating={review.reviewRating}
              reviewerName={review.reviewerName}
              storeImage={review.storeImage}
              storeName={review.storeName}
              profileImage={review.profileImage}
              visitedCount={review.visitedCount}
              createdAt={review.createdAt}
            />
          </li>
        ))}
      </ul>
      <div ref={bottomObserverRef} className="mb-[3.7rem]" />
    </>
  );
}
