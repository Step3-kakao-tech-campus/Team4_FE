import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
        alert(t('writeReviewPage.success'));
        navigate(`/stores/${storeId}`);
      },
      onError: () => {
        alert(t('writeReviewPage.failure'));
      },
    });
  };

  if (storeId === undefined || Number.isNaN(+storeId)) {
    return <div>{t('writeReviewPage.wrongId')}</div>;
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
