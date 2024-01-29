'use client';

import lineAbstract from '../../public/line-abstract.png';
import { useState } from 'react';
import Link from 'next/link';
import BrandLoader from '../home/BrandLoader';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const auctionData = [
  {
    link: '/',
    saleTime: '05:55 PM AST',
    saleName: 'Deira',
    region: 'Deira',
    lane: 'A',
    totalVehicle: '11',
  },
  {
    link: '/',
    saleTime: '05:55 PM AST',
    saleName: 'Saja Yard',
    region: 'Deira',
    lane: 'A',
    totalVehicle: '10',
  },
  {
    link: '/',
    saleTime: '05:55 PM AST',
    saleName: 'Deira',
    region: 'Deira',
    lane: 'A',
    totalVehicle: '10',
  },
  {
    link: '/',
    saleTime: '05:55 PM AST',
    saleName: 'Deira',
    region: 'Deira',
    lane: 'B',
    totalVehicle: '10',
  },
];

const AuctionsList = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-white py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h4 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-4">
            Some Recent Auctions
          </h4>
          <div className="flex justify-center items-center mb-10">
            <Image src={lineAbstract} alt="line" />
          </div>
          {loading ? (
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 items-center">
              <BrandLoader />
              <BrandLoader />
              <BrandLoader />
              <BrandLoader />
              <BrandLoader />
              <BrandLoader />
            </div>
          ) : (
            <>
              {auctionData?.length === 0 ? (
                <p className="text-lg font-medium">No recent auction!</p>
              ) : (
                <>
                  <Swiper
                    centeredSlides={false}
                    breakpoints={{
                      360: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      578: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      791: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },

                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Navigation]}
                    navigation={{
                      nextEl: '.auction-arrow-right',
                      prevEl: '.auction-arrow-left',
                    }}
                    className="mySwiper relative !px-6"
                  >
                    <div className="auction-arrow-left bg-primary p-3 rounded-full text-white duration-300 opacity-100 absolute top-1/2 -translate-y-1/2 left-0 z-[1000]">
                      <FaArrowLeft size={11} />
                    </div>

                    <div className="auction-arrow-right bg-primary p-3 rounded-full text-white duration-300 opacity-100 absolute top-1/2 -translate-y-1/2 right-0 z-[1000]">
                      <FaArrowRight size={11} />
                    </div>

                    {auctionData?.map((auction, i) => (
                      <SwiperSlide
                        key={i}
                        className="relative z-10 w-full rounded-2xl overflow-hidden"
                      >
                        <Link href={auction.link} key={i}>
                          <div className="relative  pt-12 p-6 md:pb-6 bg-primary bg-opacity-5 rounded-md flex flex-col justify-center items-center">
                            <h5 className="absolute top-1 right-1 font-semibold bg-primary text-white text-[10px] rounded-full py-1 px-3">
                              {auction.saleTime}
                            </h5>
                            <h5 className="font-bold text-xl">
                              {auction.saleName}
                            </h5>
                            <h5 className="text-lg font-bold text-primary my-2">
                              Total Vehicle:{auction.totalVehicle}
                            </h5>
                            <div className="flex justify-center items-center gap-8 text-sm font-medium">
                              <p className="text-ellipsis line-clamp-1 max-w-[100px]">
                                Region:{auction.region}
                              </p>
                              <p>Lane:{auction.lane}</p>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuctionsList;
