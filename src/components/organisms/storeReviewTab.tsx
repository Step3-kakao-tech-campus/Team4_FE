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
        {reviews[0] !== null && reviews.length > 0 ? reviews.map((review) => (
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
        )) : <div>리뷰가 없습니다.</div>}
      </ul>
      <div ref={bottomObserverRef} className="mb-[3.7rem]" />
    </>
  );
}
