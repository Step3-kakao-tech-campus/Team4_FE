import { useState } from 'react';
import Image from '../atoms/image';
import ImageCarousel from '../molecules/imageCarousel';

export default function UploadImage() {
  const [images, setImages] = useState<string[]>([]);
  return (
    <>
      <ImageCarousel swiperStyle="">
        {images.map((imageUrl) => (
          <Image imageSrc={imageUrl} alt={imageUrl} objectFitMode className="" />
        ))}
      </ImageCarousel>
      <div className="flex justify-center">
        <label htmlFor="uploadImage">
          <div>사진 추가</div>
          <input
            id="uploadImage"
            className="hidden"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const fileList = e.target.files;

              if (fileList) {
                const prev = images.slice();

                Array.from(fileList).forEach((file) => {
                  const url = URL.createObjectURL(file);
                  prev.push(url);
                });

                setImages(prev);
              }
            }}
          />
        </label>
      </div>
    </>
  );
}
