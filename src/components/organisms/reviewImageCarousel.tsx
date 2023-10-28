import React from 'react';
import ImageCarousel from '../molecules/imageCarousel';
import { ReviewImageInfo } from '../../types/review';
import Image from '../atoms/image';
import { DefaultTag } from '../molecules/menuTag';

interface ReviewImageCarouselProps {
  reviewImages: ReviewImageInfo[],
}

function ReviewImageCarousel({ reviewImages }: ReviewImageCarouselProps) {
  return (
    <div>
      <ImageCarousel swiperStyle="w-full h-full">
        {reviewImages.map(({
          imageData, tags,
        }) => (
          <Image className="relative" smallImageSrc={String(imageData)} largeImageSrc={String(imageData)} imageSrc={String(imageData)} alt="사진">
            {tags.map(({
              tagIndex, locationX, locationY, name, rating,
            }) => (
              <li key={tagIndex} className={`top-[ absolute${locationX}] left-[${locationY}]`}>
                <DefaultTag name={name} rating={rating} onClick={() => { console.log('반가워'); }} />
              </li>
            ))}
          </Image>
        ))}
      </ImageCarousel>
    </div>
  );
}

export default ReviewImageCarousel;
