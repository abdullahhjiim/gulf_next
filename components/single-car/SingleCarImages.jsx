'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import car1 from '../../public/1.png';
import car2 from '../../public/2.png';
import car3 from '../../public/3.png';
import ReactImageMagnify from 'react-image-magnify';

const images = [
  { img: car1 },
  { img: car2 },
  { img: car3 },
  { img: car1 },
  { img: car2 },
  { img: car3 },
  { img: car1 },
  { img: car2 },
  { img: car3 },
];

const SingleCarBidImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="w-full">
        <div className="singleImage w-full">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'car image',
                isFluidWidth: true,
                src: images[activeIndex].img.src,
              },
              largeImage: {
                src: images[activeIndex].img.src,
                width: 1200,
                height: 600,
              },
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-6 max-h-[200px] md:max-h-[250px] lg:max-h-[240px] overflow-y-auto p-2">
        {images.map((image, i) => (
          <Image
            key={i}
            src={image.img}
            alt="car1"
            width="full"
            height="full"
            className={`${
              activeIndex === i
                ? 'outline outline-offset-2 outline-2 outline-primary'
                : ''
            } w-full h-full object-cover rounded-md`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleCarBidImages;
