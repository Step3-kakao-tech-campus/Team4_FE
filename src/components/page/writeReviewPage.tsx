import { useState } from 'react';
import WriteReviewTemplate from '../template/writeReviewTemplate';

export default function WriteReviewPage() {
  const [rating, setRating] = useState(5);

  return (
    <WriteReviewTemplate
      rating={rating}
      setRating={setRating}
    />
  );
}
