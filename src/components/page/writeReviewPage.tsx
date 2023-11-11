import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WriteReviewTemplate from '../template/writeReviewTemplate';
import { WriteReviewRefHandler } from '../../types/refHandler';
import { Tag, PostWriteReviewInfo } from '../../types/review';
import { useMenuTagSelector } from '../../hooks/store';
import { getReviewImagesPresignedUrls } from '../../apis/getPresignedUrl';
import { uploadImageToS3 } from '../../apis/uploadImageToS3';
import { useWriteReview } from '../../hooks/query';
import { fetchWithHandler } from '../../utils/fetchWithHandler';

export default function WriteReviewPage() {
  const [reviewImages, setReviewImages] = useState<Blob[]>([]);
  const [rating, setRating] = useState(5);
  const writeReviewRef = useRef<WriteReviewRefHandler>(null);
  const menuTags = useMenuTagSelector((state) => state.menuTag);
  const { mutate } = useWriteReview();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { storeId } = useParams();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (token === null) {
      navigate('/login', {
        replace: true,
      });
    }
  }, []);

  const handleWriteReview = async () => {
    if (storeId === undefined || Number.isNaN(+storeId)) {
      return;
    }

    const content = writeReviewRef.current?.getContent();
    const peopleCount = Number(writeReviewRef.current?.getPeopleCount());
    const totalPrice = Number(writeReviewRef.current?.getTotalPrice());

    if (!content || Number.isNaN(peopleCount) || Number.isNaN(totalPrice)) {
      return;
    }

    // presignedUrl 획득 및 이미지 업로드 구현

    // presignedUrl 배열을 요청
    const response = await getReviewImagesPresignedUrls(
      token,
      Number(storeId),
      content,
      rating,
      Number(peopleCount),
      Number(totalPrice),
      reviewImages.length,
    );

    const { presignedUrls } = response.data.data;
    const { reviewId } = response.data.data;

    // 이미지별로 presignedUrl로 이미지 업로드, presingedUrl배열 상태 값에 push
    for (let i = 0; i < presignedUrls.length; i += 1) {
      fetchWithHandler(async () => uploadImageToS3(`/s3Image/${presignedUrls[i].presignedUrl.slice(50)}`, reviewImages[i]), {
        onSuccess: () => {},
        onError: (error) => {
          console.error(error);
        },
      });
    }

    const reviewImagesWithMenuTag: PostWriteReviewInfo[] = [];

    for (let urlIndex = 0; urlIndex < presignedUrls.length; urlIndex += 1) {
      const tempTags: Tag[] = [];

      for (let menuTagIndex = 0; menuTagIndex < menuTags.length; menuTagIndex += 1) {
        if (menuTags[menuTagIndex].imageIndex === urlIndex) {
          tempTags.push({
            name: menuTags[menuTagIndex].name,
            locationX: menuTags[menuTagIndex].locationX,
            locationY: menuTags[menuTagIndex].locationY,
            rating: menuTags[menuTagIndex].rating,
          });
        }
      }

      reviewImagesWithMenuTag.push({
        imageUrl: `${presignedUrls[urlIndex].presignedUrl}`,
        tags: tempTags,
      });
    }

    // 리뷰 작성 요청
    mutate({
      storeId: Number(storeId),
      reviewId,
      reviewData: {
        reviewImages: reviewImagesWithMenuTag.length > 0 ? reviewImagesWithMenuTag : [],
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
