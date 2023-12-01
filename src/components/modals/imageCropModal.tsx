import { Dispatch, SetStateAction, useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/button';
import getCroppedImg from '../../utils/cropImage';

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    zIndex: '10',
    top: '0',
    left: '0',
  },
  content: {
    width: '100%',
    maxWidth: '500px',
    zIndex: '150',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem',
    backgroundColor: 'white',
    overflow: 'auto',
    padding: '0px',
  },
};

interface ImageCropModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  imageUrl: string;
  reviewImages: Blob[];
  setReviewImages: Dispatch<SetStateAction<Blob[]>>;
  reviewImagesTempUrl: string[];
  setReviewImagesTempUrl: Dispatch<SetStateAction<string[]>>;
}

export default function ImageCropModal({
  isOpen,
  setIsOpen,
  imageUrl,
  reviewImages,
  setReviewImages,
  reviewImagesTempUrl,
  setReviewImagesTempUrl,
}: ImageCropModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [currentCroppedAreaPixels, setCurrentCroppedAreaPixels] = useState<Area | null>(null);

  const { t } = useTranslation();

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCurrentCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageUrl,
        currentCroppedAreaPixels,
      );

      if (croppedImage) {
        const prevData = reviewImages.slice();
        const prevUrls = reviewImagesTempUrl.slice();

        prevData.push(croppedImage);
        prevUrls.push(URL.createObjectURL(croppedImage));

        setReviewImages(prevData);
        setReviewImagesTempUrl(prevUrls);

        setIsOpen(false);
        setZoom(1);
        setCrop({ x: 0, y: 0 });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customModalStyles}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      <h1 className="flex h-8 items-center justify-center font-bold">{t('writeReviewPage.cropImage')}</h1>
      <div className="relative h-[calc(100%-6rem)] w-full">
        <Cropper
          image={imageUrl}
          crop={crop}
          onCropChange={setCrop}
          aspect={1}
          zoom={zoom}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="flex h-16 items-center justify-between px-4">
        <Button onClick={() => setIsOpen(false)} backgroundColor="bg-matgpt-gray">{t('writeReviewPage.cancelCrop')}</Button>
        <Button onClick={showCroppedImage}>{t('writeReviewPage.addCrop')}</Button>
      </div>
    </ReactModal>
  );
}
