import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WriteReviewTemplate from '../template/writeReviewTemplate';
import { WriteReviewRefHandler } from '../../types/refHandler';
import { useWriteReview } from '../../hooks/query';
import { ReviewImageInfo } from '../../types/review';
import { useMenuTagSelector } from '../../hooks/store';

export default function WriteReviewPage() {
  const [reviewImages, setReviewImages] = useState<Blob[]>([]);
  const [rating, setRating] = useState(5);
  const writeReviewRef = useRef<WriteReviewRefHandler>(null);
  const menuTags = useMenuTagSelector((state) => state.menuTag);
  const navigate = useNavigate();

  const { mutate } = useWriteReview();

  const { storeId } = useParams();

  const handleWriteReview = () => {
    if (storeId === undefined || Number.isNaN(+storeId)) {
      return;
    }

    const content = writeReviewRef.current?.getContent();
    const peopleCount = writeReviewRef.current?.getPeopleCount();
    const totalPrice = writeReviewRef.current?.getTotalPrice();

    if (!(content && peopleCount && totalPrice)) {
      return;
    }

    const reviewImagesWithMenuTag: ReviewImageInfo[] = reviewImages.map(
      (reviewImage, imageIndex) => ({
        imageData: reviewImage,
        tags: menuTags.filter((menuTag) => menuTag.imageIndex === imageIndex),
      }),
    );

    mutate({
      storeId: +storeId,
      reviewData: {
        reviewImages: reviewImagesWithMenuTag,
        rating,
        content,
        peopleCount: +peopleCount,
        totalPrice: +totalPrice,
      },
    }, {
      onSuccess: () => {
        alert('리뷰가 등록되었습니다.');
        navigate(`/stores/${storeId}`);
      },
      onError: () => {
        alert('오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.');
      },
    });
  };

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
      handleWriteReview={handleWriteReview}
    />
  );
}
