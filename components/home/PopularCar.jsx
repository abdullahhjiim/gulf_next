'use client';
import carShape from '../../public/car-shape.png';
import lineAbstract from '../../public/line-abstract.png';
import car1 from '../../public/1.png';
import car2 from '../../public/2.png';
import car3 from '../../public/3.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import CarItemLoader from './CarItemLoader';
import Image from 'next/image';

const data = [
  {
    images: [{ img: car1 }, { img: car2 }, { img: car3 }],
    title: 'classic Cars',
    count: 25,
  },
  {
    images: [{ img: car2 }, { img: car3 }, { img: car1 }],
    title: 'Sports Cars',
    count: 21,
  },
  {
    images: [{ img: car1 }, { img: car2 }, { img: car3 }],
    title: 'Convertible Cars',
    count: 9,
  },
  {
    images: [{ img: car2 }, { img: car3 }, { img: car1 }],
    title: 'Modal Cars',
    count: 29,
  },
  {
    images: [{ img: car3 }, { img: car2 }, { img: car1 }],
    title: 'Luxury Cars',
    count: 14,
  },
  {
    images: [{ img: car1 }, { img: car2 }, { img: car3 }],
    title: 'Mini Cars',
    count: 17,
  },
];

const PopularCars = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-20 sm:pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="relative">
            <div className="absolute -top-[50%] md:-top-[130%] left-1/2 -translate-x-1/2">
              <Image src={carShape} alt="car" />
            </div>
            <h4 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-6">
              Buy your desire car with affordable price.
            </h4>
          </div>
          <h4 className="text-[#90A3BF] font-secondary text-2xl">
            Popular Car
          </h4>
          <div className="flex justify-center items-center mt-4 mb-10">
            <Image src={lineAbstract} alt="line" />
          </div>
        </div>

        {/* cars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {loading ? (
            <>
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
            </>
          ) : (
            <>
              {data?.length === 0 ? (
                <p className="text-lg font-medium">No Cars Found!</p>
              ) : (
                <>
                  {data?.map((item, i) => {
                    const { images, title, count } = item;

                    return (
                      <div
                        className="relative rounded-2xl overflow-hidden group"
                        key={i}
                      >
                        <Swiper
                          modules={[Navigation]}
                          navigation={{
                            nextEl: '.arrow-right',
                            prevEl: '.arrow-left',
                          }}
                          className="mySwiper relative overflow-hidden"
                        >
                          <div className="flex gap-x-2 justify-center items-center absolute top-5 right-5 z-[1000] opacity-0 group-hover:opacity-100 duration-500">
                            <button className="arrow-left bg-white p-3 rounded-full hover:bg-primary hover:text-white duration-300 opacity-100">
                              <FaArrowLeft size={11} />
                            </button>

                            <button className="arrow-right bg-white p-3 rounded-full hover:bg-primary hover:text-white duration-300 opacity-100">
                              <FaArrowRight size={11} />
                            </button>
                          </div>

                          {images?.map((car, j) => (
                            <SwiperSlide
                              key={j}
                              className="relative z-10 w-full rounded-2xl overflow-hidden"
                            >
                              <div className="absolute inset-0 -z-10 text-center bg-black bg-opacity-10" />
                              <div className="flex justify-center items-center -z-20 relative">
                                <Image
                                  src={car.img}
                                  alt="car"
                                  className="w-full h-auto object-cover -z-10"
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div
                          className="absolute top-0 left-0 bg-black text-white w-20 h-10 text-xl flex justify-center items-center z-10"
                          style={{
                            clipPath: `polygon(0% 0%, 100% 0, 85% 50%, 100% 100%, 0% 100%)`,
                          }}
                        >
                          {count}
                        </div>
                        <div className="relative bottom-12 left-6 right-6 z-10">
                          <h4 className="text-primary font-secondary text-2xl font-bold capitalize">
                            {title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCars;
