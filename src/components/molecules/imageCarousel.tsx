import { Carousel } from '@material-tailwind/react';

interface ImageCarouselType {
  children: React.ReactNode;
  className: string
}

function ImageCarousel({ children, className }:ImageCarouselType) {
  return (
    <Carousel transition={{ duration: 0.5 }} className={className}>
      {children}
    </Carousel>
  );
}

export default ImageCarousel;
