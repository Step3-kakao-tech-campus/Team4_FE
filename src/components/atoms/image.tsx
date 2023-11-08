import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  threshold?: { smallToMedium: string; mediumToLarge: string; };
  smallImageSrc?: string;
  largeImageSrc?: string;
  imageSrc: string;
  alt: string;
  objectFitMode?: boolean;
}

export default function Image({
  threshold = { smallToMedium: '0px', mediumToLarge: '1920px' },
  smallImageSrc,
  largeImageSrc,
  imageSrc,
  alt,
  objectFitMode = false,
  ...props
}: ImageProps) {
  return (
    <picture className={`${objectFitMode ? 'flex h-full w-full' : ''}`}>
      <source
        media={`(max-width: ${threshold.smallToMedium})`}
        srcSet={smallImageSrc || imageSrc || '/logo192.png'}
      />
      <source
        media={`(min-width: ${threshold.mediumToLarge})`}
        srcSet={largeImageSrc || imageSrc || '/logo192.png'}
      />
      <img {...props} src={imageSrc || '/logo192.png'} alt={alt} />
    </picture>
  );
}
