import {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';
import Image from '../atoms/image';
import ImageCarousel from '../molecules/imageCarousel';
import { ReviewImageInfo } from '../../types/review';
import Icon from '../atoms/icon';
import ImageCropModal from '../modals/imageCropModal';

interface UploadImageProps {
  reviewImages: ReviewImageInfo[];
  setReviewImages: Dispatch<SetStateAction<ReviewImageInfo[]>>;
}

export default function UploadImage({
  reviewImages,
  setReviewImages,
}: UploadImageProps) {
  const [imageTempUrls, setImageTempUrls] = useState<string[]>([]);
  const imageCarouselRef = useRef<HTMLDivElement>(null);
  const [isImageCropModalOpen, setIsImageCropModalOpen] = useState<boolean>(false);
  const [currentCroppingImageUrl, setCurrentCroppingImageUrl] = useState<string>('');

  useEffect(() => {
    if (imageCarouselRef.current) {
      imageCarouselRef.current.style.height = `${imageCarouselRef.current.offsetWidth}px`;
    }
  }, []);

  const handleDeleteImage = (imageIndex: number) => {
    const prevUrls = imageTempUrls.slice();
    const prevData = reviewImages.slice();

    setImageTempUrls(prevUrls.slice(0, imageIndex).concat(prevUrls.slice(imageIndex + 1)));
    setReviewImages(prevData.slice(0, imageIndex).concat(prevData.slice(imageIndex + 1)));
  };

  return (
    <>
      <ImageCropModal
        isOpen={isImageCropModalOpen}
        setIsOpen={setIsImageCropModalOpen}
        imageUrl={currentCroppingImageUrl}
        imageTempUrls={imageTempUrls}
        setImageTempUrls={setImageTempUrls}
        reviewImages={reviewImages}
        setReviewImages={setReviewImages}
      />
      <div
        className={`relative mb-2 w-full ${reviewImages.length === 0 ? 'bg-matgpt-gray' : ''}`}
        ref={imageCarouselRef}
      >
        {reviewImages.length === 0 ? <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">선택된 사진 없음</div> : null}
        <ImageCarousel swiperStyle="w-full h-full">
          {imageTempUrls.map((imageUrl, index) => (
            <div
              className="h-full w-full"
              key={imageUrl}
            >
              <Image
                imageSrc={imageUrl}
                alt={imageUrl}
                objectFitMode
                className="object-cover"
              />
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-white/50 p-1"
                onClick={() => {
                  handleDeleteImage(index);
                }}
              >
                <Icon name="OutlineClose" ariaLabel="사진 삭제" size="1rem" />
              </button>
            </div>
          ))}
        </ImageCarousel>
      </div>
      <div className="flex justify-center">
        <label htmlFor="uploadImage">
          <div className="text-center">
            사진 추가하기
          </div>
          <input
            id="uploadImage"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const fileList = e.target.files;

              if (fileList) {
                const url = URL.createObjectURL(fileList[0]);

                setIsImageCropModalOpen(true);
                setCurrentCroppingImageUrl(url);
              }
            }}
          />
        </label>
      </div>
    </>
  );
}
