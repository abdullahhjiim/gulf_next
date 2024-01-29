'use client';

import Image from 'next/image';
import car1 from '../../public/1.png';
import car2 from '../../public/2.png';
import car3 from '../../public/3.png';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const dummyData = [
  {
    title: '1979 HONDA Durango',
    lot: '7435903470',
    currentBid: '',
    location: 'DXB - Dubai',
    image: car1,
  },
  {
    title: '1979 HONDA Durango',
    lot: '7435903470',
    currentBid: '',
    location: 'DXB - Dubai',
    image: car3,
  },
  {
    title: '1979 HONDA Durango',
    lot: '7435903470',
    currentBid: '',
    location: 'DXB - Dubai',
    image: car3,
  },
  {
    title: '1979 HONDA Durango',
    lot: '7435903470',
    currentBid: '',
    location: 'DXB - Dubai',
    image: car3,
  },
  {
    title: '1979 HONDA Durango',
    lot: '7435903470',
    currentBid: '',
    location: 'DXB - Dubai',
    image: car3,
  },
];

const RelatedCars = () => {
  return (
    <div className="mt-12">
      <h4 className="text-2xl md:text-4xl font-bold mb-6">Related Vehicles</h4>
      <div className="relative z-10">
        <button className="arrow-left absolute top-24 md:top-[150px] left-0 md:-left-6 bg-gray-100 w-11 h-11 rounded-full shadow-xl flex items-center justify-center z-[1000] hover:bg-primary hover:text-white duration-500">
          <FaArrowLeft size={20} />
        </button>
        <button className="arrow-right absolute top-24 md:top-[150px] right-0 md:-right-6 bg-gray-100 w-11 h-11 rounded-full shadow-xl flex items-center justify-center z-[1000] hover:bg-primary hover:text-white duration-500">
          <FaArrowRight size={20} />
        </button>

        <Swiper
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {dummyData.map((item, i) => {
            const { title, lot, currentBid, location, image } = item;
            return (
              <SwiperSlide
                className="border border-primary border-opacity-20  rounded-md overflow-hidden"
                key={i}
              >
                <Image src={image} alt="car" className="w-full" />
                <div className="p-3 flex flex-col gap-1">
                  <p>Lot: {lot}</p>
                  <h4 className="font-semibold text-lg">
                    Current Bid:{' '}
                    {currentBid ? (
                      currentBid
                    ) : (
                      <span className="text-primary cursor-pointer">
                        Start the bid
                      </span>
                    )}
                  </h4>
                  <p>Location: {location}</p>
                </div>
                <div className="flex justify-between items-center gap-2 p-3">
                  <button className="flex justify-center items-center gap-x-1 bg-primary text-white hover:bg-opacity-90 rounded-lg py-2 px-3">
                    View Details <FaArrowRight />
                  </button>
                  <button className="border border-primary text-primary hover:text-white hover:bg-primary duration-300 rounded py-1.5 px-3 flex justify-center items-center gap-x-1">
                    <FaStar />
                    Watch
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedCars;

{
  /* <SwiperSlide key={i}>
<Image src={image} alt="car" className="w-full" />
<div className="p-3 flex flex-col gap-1">
  <p>Lot: {lot}</p>
  <h4 className="font-semibold text-lg">
    Current Bid:{' '}
    {currentBid ? (
      currentBid
    ) : (
      <span className="text-primary cursor-pointer">
        Start the bid
      </span>
    )}
  </h4>
  <p>Location: {location}</p>
</div>
<div className="flex justify-between items-center gap-2 p-3">
  <button className="flex justify-center items-center gap-x-1 bg-primary text-white hover:bg-opacity-90 rounded-lg py-2 px-3">
    View Details <FaArrowRight />
  </button>
  <button className="border border-primary text-primary hover:text-white hover:bg-primary duration-300 rounded py-1.5 px-3 flex justify-center items-center gap-x-1">
    <FaStar />
    Watch
  </button>
</div>
</SwiperSlide> */
}
