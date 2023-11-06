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

export default function WriteReviewPage() {
  const [reviewImages, setReviewImages] = useState<Blob[]>([]);
  const [rating, setRating] = useState(5);
  const [presignedUrl, setPresignedUrl] = useState<string[]>([]);
  const writeReviewRef = useRef<WriteReviewRefHandler>(null);
  const menuTags = useMenuTagSelector((state) => state.menuTag);
  const { mutate } = useWriteReview();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { storeId } = useParams();

  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (localStorage.getItem('accessToken') === null) { navigate('/login'); }
  }, []);

  // presignedUrl을 요청하고, 각 이미지를 업로드
  const uploadImage = async (content: string, peopleCount: number, totalPrice: number) => {
    if (storeId === undefined || Number.isNaN(+storeId)) {
      return;
    }
    // presignedUrl 배열을 요청
    try {
      const response = await getReviewImagesPresignedUrls(
        +storeId,
        content,
        rating,
        +peopleCount,
        +totalPrice,
        reviewImages.length,
      );
      // 이미지별로 presignedUrl로 이미지 업로드, presingedUrl배열 상태 값에 push
      reviewImages.forEach(async (reviewImage, index) => {
        try {
          await uploadImageToS3(response.presignedUrls[index].presignedUrl, reviewImage);
          const prev = presignedUrl.slice();
          prev.push(response.presignedUrls[index].presignedUrl);
          setPresignedUrl(prev);
        } catch (err) {
          alert(err);
        }
      });
    } catch (err) {
      alert(err);
    }
  };

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

    // 리뷰작성 요청을 위한 데이터 만들기
    const reviewImagesWithMenuTag: PostWriteReviewInfo[] = reviewImages.map(
      (reviewImage, imageIndex) => {
        const tempTag: Tag[] = [];
        menuTags.forEach((menuTag) => {
          if (menuTag.imageIndex === imageIndex) {
            tempTag.push({
              name: menuTag.name,
              locationX: menuTag.locationX,
              locationY: menuTag.locationY,
              rating: menuTag.rating,
            });
          }
        });
        return ({
          imageUrl: presignedUrl[imageIndex],
          tags: tempTag,
        });
      },
    );

    // presignedUrl 획득 및 이미지 업로드 구현
    uploadImage(content, +peopleCount, +totalPrice);

    // 리뷰 작성 요청
    mutate({
      storeId: +storeId,
      reviewData: reviewImagesWithMenuTag,
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
