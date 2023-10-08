interface ImageProps {
  threshold: { smallToMedium: string; mediumToLarge: string; };
  smallImageSrc?: string;
  largeImageSrc?: string;
  imageSrc: string;
  alt: string;
}

export default function Image({
  threshold,
  smallImageSrc,
  largeImageSrc,
  imageSrc,
  alt,
}: ImageProps) {
  return (
    <picture>
      <source
        media={`(max-width: ${threshold.smallToMedium})`}
        srcSet={smallImageSrc || imageSrc}
      />
      <source
        media={`(min-width: ${threshold.mediumToLarge})`}
        srcSet={largeImageSrc || imageSrc}
      />
      <img src={imageSrc} alt={alt} />
    </picture>
  );
}
