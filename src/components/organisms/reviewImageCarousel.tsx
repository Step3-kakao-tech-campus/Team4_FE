import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import ImageCarousel from '../molecules/imageCarousel';
import { ReviewDetailImageInfo } from '../../types/review';
import Image from '../atoms/image';
import MenuTag from '../molecules/menuTag';
import { AddMenu } from '../../store/slices/promptMenu';

interface ReviewImageCarouselProps {
  reviewImages: ReviewDetailImageInfo[],
}

function ReviewImageCarousel({ reviewImages }: ReviewImageCarouselProps) {
  const { t } = useTranslation();
  const prompts = useSelector((state: RootState) => state.promptMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { storeId, reviewId } = useParams();
  const onHandlePromptEvent = (name: string) => {
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      localStorage.setItem('peviouseUrl', `stores/${storeId}/reviews${reviewId}`);
      navigate('/login');
    } else if (prompts[name] === undefined) {
      // 프롬프트에 메뉴가 없다면
      dispatch(AddMenu({ menu: name }));
      alert(t('reviewDetailPage.menuAdd'));
    } else { // 프롬프트에 메뉴가 있다면
      alert(t('reviewDetailPage.alreadyAddMenu'));
    }
  };

  return (
    <div className="relative w-full">
      <ImageCarousel swiperStyle="relative w-full h-full">
        {reviewImages.map(({ image, tags }) => (
          <div className="relative h-full w-full" key={image}>
            <Image
              imageSrc={image}
              alt={t('reviewDetailPage.reviewImage')}
              objectFitMode
              className="h-full w-full object-cover"
            />
            {tags.map(({
              location_x, location_y, name, rating,
            }, tagIndex) => (
              <div
                key={`${name}-${location_x}-${location_y}`}
                className="absolute"
                style={{ top: `${location_y}%`, left: `${location_x}%` }}
              >
                <MenuTag
                  tagIndex={tagIndex}
                  name={name}
                  rating={rating}
                  mode="prompt"
                  onPromptEvent={
                    () => { onHandlePromptEvent(name); }
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </ImageCarousel>
    </div>
  );
}

export default ReviewImageCarousel;
