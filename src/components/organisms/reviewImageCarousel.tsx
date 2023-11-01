import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageCarousel from '../molecules/imageCarousel';
import { ReviewDetailImageInfo } from '../../types/review';
import Image from '../atoms/image';
import MenuTag from '../molecules/menuTag';
import { useModal } from '../../hooks/modal';

interface ReviewImageCarouselProps {
  reviewImages: ReviewDetailImageInfo[],
  prompts: { [key: string]: number },
  setPrompts: React.Dispatch<React.SetStateAction<{}>>;
}

function ReviewImageCarousel({ reviewImages, prompts, setPrompts }: ReviewImageCarouselProps) {
  const { t } = useTranslation();
  const { openModal } = useModal('Login');

  const onHandlePromptEvent = (name: string) => {
    const token = localStorage.getItem('token');
    if (token === null) {
      openModal();
    } else if (prompts[name] === undefined) {
      // 프롬프트에 메뉴가 없다면
      setPrompts((prev) => ({
        ...prev,
        [name]: 1,
      }));
      alert(t('reviewDetailPage.menuAdd'));
    } else { // 프롬프트에 메뉴가 있다면
      alert(t('reviewDetailPage.alreadyAddMenu'));
    }
  };

  return (
    <div>
      <ImageCarousel swiperStyle="w-full h-full">
        {reviewImages.map(({
          imageData, tags,
        }) => (
          <div className="relative h-full w-full" key={imageData}>
            <div className="h-[500px] w-[500px] bg-white">
              <Image smallImageSrc={imageData} largeImageSrc={imageData} imageSrc={imageData} alt={t('reviewDetailPage.reviewImage')} />
            </div>
            {tags.map(({
              tagIndex, locationX, locationY, name, rating,
            }) => (
              <li key={tagIndex} className="absolute" style={{ top: `${locationY}%`, left: `${locationX}%` }}>
                <MenuTag
                  tagIndex={tagIndex}
                  name={name}
                  rating={rating}
                  mode="prompt"
                  onPromptEvent={
                    () => { onHandlePromptEvent(name); }
                  }
                />
              </li>
            ))}
          </div>
        ))}
      </ImageCarousel>
    </div>
  );
}

export default ReviewImageCarousel;
