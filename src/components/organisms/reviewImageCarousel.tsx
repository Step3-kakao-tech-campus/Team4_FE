import React from 'react';
import ImageCarousel from '../molecules/imageCarousel';
import { ReviewImageInfo } from '../../types/review';
import Image from '../atoms/image';
import MenuTag from '../molecules/menuTag';
import { useModal } from '../../hooks/modal';

interface ReviewImageCarouselProps {
  reviewImages: ReviewImageInfo[],
  prompts: { [key: string]: number },
  setPrompts: React.Dispatch<React.SetStateAction<{}>>;
}

function ReviewImageCarousel({ reviewImages, prompts, setPrompts }: ReviewImageCarouselProps) {
  const { openModal } = useModal('Login');

  const onHandlePromptEvent = (name: string) => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token !== null) {
      openModal();
    } else if (prompts[name] === undefined) {
      // 프롬프트에 메뉴가 없다면
      setPrompts((prev) => ({
        ...prev,
        [name]: 1,
      }));
    } else { // 프롬프트에 메뉴가 있다면
      alert('이미 추가된 메뉴 입니다');
    }
  };

  return (
    <div>
      <ImageCarousel swiperStyle="w-full h-full">
        {reviewImages.map(({
          imageData, tags,
        }) => (
          <div className="relative h-full w-full" key={String(imageData)}>
            <div className="h-[500px] w-[500px] bg-white">
              <Image smallImageSrc={String(imageData)} largeImageSrc={String(imageData)} imageSrc={String(imageData)} alt="사진" />
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
