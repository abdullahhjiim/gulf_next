'use client';

import React, { useState } from 'react';
import Image from 'next/image';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import car1 from '../../public/1.png';
import car2 from '../../public/2.png';
import car3 from '../../public/3.png';

const images = [
  { img: car1 },
  { img: car2 },
  { img: car3 },
  { img: car1 },
  { img: car2 },
  { img: car3 },
];

const SingleCarBidImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="mySwiper2 mb-2"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item.img}
              alt="car"
              className="w-full max-h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item.img}
              alt="car"
              className="max-h-[100px] w-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SingleCarBidImages;
