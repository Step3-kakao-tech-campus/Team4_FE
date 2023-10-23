import { useRef, useState } from 'react';
import WriteReviewTemplate from '../template/writeReviewTemplate';
import { WriteReviewRefHandler } from '../../types/refHandler';

export default function WriteReviewPage() {
  const [rating, setRating] = useState(5);
  const writeReviewRef = useRef<WriteReviewRefHandler>(null);

  return (
    <WriteReviewTemplate
      rating={rating}
      setRating={setRating}
      ref={writeReviewRef}
    />
  );
}
