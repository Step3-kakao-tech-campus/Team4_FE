import { useRef, useState } from 'react';
import WriteReviewTemplate from '../template/writeReviewTemplate';
import { WriteReviewRefHandler } from '../../types/refHandler';
import { ReviewImageInfo } from '../../types/review';

export default function WriteReviewPage() {
  const [reviewImages, setReviewImages] = useState<ReviewImageInfo[]>([]);
  const [rating, setRating] = useState(5);
  const writeReviewRef = useRef<WriteReviewRefHandler>(null);

  return (
    <WriteReviewTemplate
      rating={rating}
      setRating={setRating}
      ref={writeReviewRef}
      reviewImages={reviewImages}
      setReviewImages={setReviewImages}
    />
  );
}
