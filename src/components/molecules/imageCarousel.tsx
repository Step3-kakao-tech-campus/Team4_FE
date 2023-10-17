import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/carouselCss.css';

interface ImageCarouselType {
  swiperStyle: string;
  children: React.ReactNode;
}

function ImageCarousel({ swiperStyle, children }:ImageCarouselType) {
  let global = 0;
  const modifiedChildren = React.Children.map(children, (child) => {
    global += 1;
    return (
      <SwiperSlide key={global}>
        {child}
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={swiperStyle}
    >
      {modifiedChildren}
    </Swiper>
  );
}

export default ImageCarousel;
