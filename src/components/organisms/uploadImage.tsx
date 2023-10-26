import {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import Image from '../atoms/image';
import ImageCarousel from '../molecules/imageCarousel';
import Icon from '../atoms/icon';
import ImageCropModal from '../modals/imageCropModal';
import Button from '../atoms/button';
import { useMenuTagSelector } from '../../hooks/store';
import MenuTag from '../molecules/menuTag';
import { addMenuTag, removeAllMenuTagFromCurrentImage, resetMenuTag } from '../../store/slices/menuTagSlice';

interface UploadImageProps {
  reviewImages: Blob[];
  setReviewImages: Dispatch<SetStateAction<Blob[]>>;
}

export default function UploadImage({
  reviewImages,
  setReviewImages,
}: UploadImageProps) {
  const imageCarouselRef = useRef<HTMLDivElement>(null);
  const [isImageCropModalOpen, setIsImageCropModalOpen] = useState<boolean>(false);
  const [currentCroppingImageUrl, setCurrentCroppingImageUrl] = useState<string>('');
  const [isAddingMenuTag, setIsAddingMenuTag] = useState(false);
  const [reviewImagesTempUrl, setReviewImagesTempUrl] = useState<string[]>([]);

  const reviewTags = useMenuTagSelector((state) => state.menuTag);
  const menuTagDispatch = useDispatch();

  useEffect(() => {
    if (imageCarouselRef.current) {
      imageCarouselRef.current.style.height = `${imageCarouselRef.current.offsetWidth}px`;
    }

    menuTagDispatch(resetMenuTag());
  }, []);

  const handleDeleteImage = (imageIndex: number) => {
    const prevData = reviewImages.slice();
    const prevUrls = reviewImagesTempUrl.slice();

    menuTagDispatch(removeAllMenuTagFromCurrentImage({
      imageIndex,
    }));
    setReviewImages([...prevData.slice(0, imageIndex), ...prevData.slice(imageIndex + 1)]);
    setReviewImagesTempUrl([...prevUrls.slice(0, imageIndex), ...prevUrls.slice(imageIndex + 1)]);
  };

  const handleAddTag = (imageIndex: number, locationX: number, locationY: number) => {
    menuTagDispatch(addMenuTag({
      imageIndex,
      locationX,
      locationY,
    }));
  };

  return (
    <>
      <ImageCropModal
        isOpen={isImageCropModalOpen}
        setIsOpen={setIsImageCropModalOpen}
        imageUrl={currentCroppingImageUrl}
        reviewImages={reviewImages}
        setReviewImages={setReviewImages}
        reviewImagesTempUrl={reviewImagesTempUrl}
        setReviewImagesTempUrl={setReviewImagesTempUrl}
      />
      <div
        className={`relative mb-2 w-full ${reviewImages.length === 0 ? 'bg-matgpt-gray' : ''}`}
        ref={imageCarouselRef}
      >
        {reviewImages.length === 0 ? <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">선택된 사진 없음</div> : null}
        <ImageCarousel swiperStyle="w-full h-full">
          {reviewImagesTempUrl.map((imageUrl, imageIndex) => (
            <div
              className="relative h-full w-full"
              key={imageUrl}
            >
              {isAddingMenuTag ? (
                <button
                  type="button"
                  className="absolute z-50 h-full w-full bg-black/50 text-white"
                  onClick={(e: React.MouseEvent) => {
                    if (imageCarouselRef.current) {
                      const x = e.nativeEvent.offsetX;
                      const y = e.nativeEvent.offsetY;

                      handleAddTag(
                        imageIndex,
                        (x / imageCarouselRef.current.offsetWidth) * 100,
                        (y / imageCarouselRef.current.offsetHeight) * 100,
                      );
                      setIsAddingMenuTag(false);
                    }
                  }}
                >
                  메뉴 태그를 추가할 위치를 클릭하세요.
                </button>
              ) : null}
              {reviewTags.map((reviewTag) => {
                if (imageIndex === reviewTag.imageIndex) {
                  return (
                    <div
                      className="absolute"
                      style={{ left: `${reviewTag.locationX}%`, top: `${reviewTag.locationY}%` }}
                      key={reviewTag.tagIndex}
                    >
                      <MenuTag
                        tagIndex={reviewTag.tagIndex}
                        mode="modify"
                        name={reviewTag.name}
                        rating={reviewTag.rating}
                      />
                    </div>
                  );
                }

                return null;
              })}
              <Image
                imageSrc={imageUrl}
                alt={`${imageIndex + 1}번째 음식 이미지`}
                objectFitMode
                className="object-cover"
              />
              <Button
                size="small"
                onClick={() => {
                  setIsAddingMenuTag(true);
                }}
                extraStyle="absolute left-4 top-4 flex gap-2"
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
