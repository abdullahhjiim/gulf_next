'use client';
import brand1 from '../../public/brand1.png';
import brand2 from '../../public/brand2.png';
import brand3 from '../../public/brand3.png';
import brand4 from '../../public/brand4.png';
import brand5 from '../../public/brand5.png';
import brand6 from '../../public/brand6.png';
import lineAbstract from '../../public/line-abstract.png';
import { useState } from 'react';
import Link from 'next/link';
import BrandLoader from '../home/BrandLoader';
import Image from 'next/image';

const brandsData = [
  {
    img: brand1,
    link: '/',
  },
  {
    img: brand2,
    link: '/',
  },
  {
    img: brand3,
    link: '/',
  },
  {
    img: brand4,
    link: '/',
  },
  {
    img: brand5,
    link: '/',
  },
  {
    img: brand6,
    link: '/',
  },
];

const Brands = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-secondary py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h4 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-4">
            Top Car Brands
          </h4>
          <div className="flex justify-center items-center mb-10">
            <Image src={lineAbstract} alt="line" />
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center">
            {loading ? (
              <>
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
              </>
            ) : (
              <>
                {brandsData?.length === 0 ? (
                  <p className="text-lg font-medium">No Product Found!</p>
                ) : (
                  <>
                    {brandsData?.map((brand, i) => (
                      <Link
                        href={brand.link}
                        key={i}
                        className="hover:bg-white hover:border-black border-2 border-transparent rounded-xl flex justify-center items-center  p-2 duration-500 h-40"
                      >
                        <Image src={brand.img} alt="brand" />
                      </Link>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
