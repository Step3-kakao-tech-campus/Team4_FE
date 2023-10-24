import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import WriteReviewTemplate from '../template/writeReviewTemplate';
import { WriteReviewRefHandler } from '../../types/refHandler';
import { ReviewImageTagInfo } from '../../types/review';

export default function WriteReviewPage() {
  const [reviewImages, setReviewImages] = useState<Blob[]>([]);
  const [reviewImageTags, setReviewImageTags] = useState<ReviewImageTagInfo[]>([]);
  const [rating, setRating] = useState(5);
  const writeReviewRef = useRef<WriteReviewRefHandler>(null);

  const { storeId } = useParams();

  if (storeId === undefined || Number.isNaN(+storeId)) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <WriteReviewTemplate
      storeId={+storeId}
      rating={rating}
      setRating={setRating}
      ref={writeReviewRef}
      reviewImages={reviewImages}
      setReviewImages={setReviewImages}
      reviewImageTags={reviewImageTags}
      setReviewImageTags={setReviewImageTags}
    />
  );
}
