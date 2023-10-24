import {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';
import Image from '../atoms/image';
import ImageCarousel from '../molecules/imageCarousel';
import Icon from '../atoms/icon';
import ImageCropModal from '../modals/imageCropModal';
import Button from '../atoms/button';
import { ReviewImageTagInfo } from '../../types/review';
import MenuTag from '../molecules/menuTag';

interface UploadImageProps {
  reviewImages: Blob[];
  setReviewImages: Dispatch<SetStateAction<Blob[]>>;
  reviewImageTags: ReviewImageTagInfo[];
  setReviewImageTags: Dispatch<SetStateAction<ReviewImageTagInfo[]>>;
}

export default function UploadImage({
  reviewImages,
  setReviewImages,
  reviewImageTags,
  setReviewImageTags,
}: UploadImageProps) {
  const imageCarouselRef = useRef<HTMLDivElement>(null);
  const [isImageCropModalOpen, setIsImageCropModalOpen] = useState<boolean>(false);
  const [currentCroppingImageUrl, setCurrentCroppingImageUrl] = useState<string>('');

  useEffect(() => {
    if (imageCarouselRef.current) {
      imageCarouselRef.current.style.height = `${imageCarouselRef.current.offsetWidth}px`;
    }
  }, []);

  const handleDeleteImage = (imageIndex: number) => {
    const prevData = reviewImages.slice();

    setReviewImages([...prevData.slice(0, imageIndex), ...prevData.slice(imageIndex + 1)]);
  };

  const addMenuTag = (imageIndex: number) => {
    const prevTags = reviewImageTags.slice();
    prevTags.push({
      imageIndex,
      tagIndex: prevTags.length > 0 ? prevTags[prevTags.length - 1].tagIndex + 1 : 0,
      name: '',
      locationX: 50,
      locationY: 50,
    });

    setReviewImageTags(prevTags);
  };

  const deleteMenuTag = (tagIndex: number) => {
    const prevTags = reviewImageTags.slice();

    setReviewImageTags([...prevTags.slice(0, tagIndex), ...prevTags.slice(tagIndex + 1)]);
  };

  return (
    <>
      <ImageCropModal
        isOpen={isImageCropModalOpen}
        setIsOpen={setIsImageCropModalOpen}
        imageUrl={currentCroppingImageUrl}
        reviewImages={reviewImages}
        setReviewImages={setReviewImages}
      />
      <div
        className={`relative mb-2 w-full ${reviewImages.length === 0 ? 'bg-matgpt-gray' : ''}`}
        ref={imageCarouselRef}
      >
        {reviewImages.length === 0 ? <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">선택된 사진 없음</div> : null}
        <ImageCarousel swiperStyle="w-full h-full">
          {reviewImages.map((imageData, imageIndex) => {
            const imageUrl = URL.createObjectURL(imageData);
            return (
              <div
                className="relative h-full w-full"
                key={imageUrl}
              >
                {reviewImageTags.map(({
                  imageIndex: thisTagImageIndex, tagIndex, name, locationX, locationY,
                }) => (
                  thisTagImageIndex === imageIndex && (
                  <div
                    className="absolute"
                    style={{ left: `${locationX}%`, top: `${locationY}%` }}
                    key={tagIndex}
                  >
                    <MenuTag
                      tagIndex={tagIndex}
                      name={name}
                      mode="modify"
                      onDeleteEvent={() => {
                        deleteMenuTag(tagIndex);
                      }}
                      reviewImageTags={reviewImageTags}
                      setReviewImageTags={setReviewImageTags}
                    />
                  </div>
                  )
                ))}
                <Image
                  imageSrc={imageUrl}
                  alt={imageUrl}
                  objectFitMode
                  className="object-cover"
                />
                <Button
                  size="small"
                  onClick={() => {
                    addMenuTag(imageIndex);
                  }}
                  extraStyle="absolute left-4 top-4"
                >
                  메뉴 태그 추가
                </Button>
                <button
                  type="button"
                  className="absolute right-4 top-4 rounded-full bg-white/50 p-1"
                  onClick={() => {
                    handleDeleteImage(imageIndex);
                  }}
                >
                  <Icon name="OutlineClose" ariaLabel="사진 삭제" size="1rem" />
                </button>
              </div>
            );
          })}
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
