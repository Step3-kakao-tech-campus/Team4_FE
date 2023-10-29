import React from 'react';
import ImageCarousel from '../molecules/imageCarousel';
import { ReviewImageInfo } from '../../types/review';
import Image from '../atoms/image';
import MenuTag from '../molecules/menuTag';
import { useModal } from '../../hooks/modal';

interface ReviewImageCarouselProps {
  reviewImages: ReviewImageInfo[],
  setPrompts: React.Dispatch<React.SetStateAction<{}>>;

}

function ReviewImageCarousel({ reviewImages, setPrompts }: ReviewImageCarouselProps) {
  const { openModal } = useModal('Login');

  const onHandlePromptEvent = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token === null) {
      openModal();
    } else {
      setPrompts('dsd');
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
                <MenuTag tagIndex={tagIndex} name={name} rating={rating} mode="prompt" onPromptEvent={() => { onHandlePromptEvent(); }} />
              </li>
            ))}
          </div>
        ))}
      </ImageCarousel>
    </div>
  );
}

export default ReviewImageCarousel;
