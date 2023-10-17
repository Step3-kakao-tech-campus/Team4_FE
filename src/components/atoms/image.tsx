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
        srcSet={smallImageSrc || imageSrc}
      />
      <source
        media={`(min-width: ${threshold.mediumToLarge})`}
        srcSet={largeImageSrc || imageSrc}
      />
      <img {...props} src={imageSrc} alt={alt} />
    </picture>
  );
}
