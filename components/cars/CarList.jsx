import React from 'react';
import Image from 'next/image';
import carOne from '../../public/1.png';
import carTwo from '../../public/2.png';
import carThree from '../../public/3.png';
import sale from '../../public/sale.png';
import upcoming from '../../public/upcoming.png';

const dummyData = [
  {
    title: '2016 TOYOTA Xts',
    timestamp: '5D 9H 20M',
    isSale: true,
    image: carOne,
    details: [
      {
        title: 'Location',
        content: 'Inter-nation city',
      },
      {
        title: 'Make',
        content: 'TOYOTA',
      },
      {
        title: 'Lot',
        content: '36169522',
      },
      {
        title: 'Color',
        content: 'Black',
      },
      {
        title: 'Model',
        content: 'Xts',
      },
      {
        title: 'Year',
        content: '2016',
      },
      {
        title: 'Conditions',
        content: '2016 TOYOTA Xts, Keys Available',
      },
    ],
  },
  {
    title: '2016 TOYOTA Xts',
    timestamp: '9H 20M',
    sale: false,
    image: carTwo,
    details: [
      {
        title: 'Location',
        content: 'Inter-nation city',
      },
      {
        title: 'Make',
        content: 'TOYOTA',
      },
      {
        title: 'Lot',
        content: '36169522',
      },
      {
        title: 'Color',
        content: 'Black',
      },
      {
        title: 'Model',
        content: 'Xts',
      },
      {
        title: 'Year',
        content: '2016',
      },
      {
        title: 'Conditions',
        content: '2016 TOYOTA Xts, Keys Available',
      },
    ],
  },
  {
    title: '2016 TOYOTA Xts',
    timestamp: '9H 20M',
    sale: false,
    image: carThree,
    details: [
      {
        title: 'Location',
        content: 'Inter-nation city',
      },
      {
        title: 'Make',
        content: 'TOYOTA',
      },
      {
        title: 'Lot',
        content: '36169522',
      },
      {
        title: 'Color',
        content: 'Black',
      },
      {
        title: 'Model',
        content: 'Xts',
      },
      {
        title: 'Year',
        content: '2016',
      },
      {
        title: 'Conditions',
        content: '2016 TOYOTA Xts, Keys Available',
      },
    ],
  },
];

const CarList = ({ isGrid }) => {
  return (
    <div
      className={`${
        isGrid
          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
          : 'flex flex-col gap-y-4'
      } `}
    >
      {dummyData.map((item, i) => {
        const { title, timestamp, details, isSale, image } = item;

        return (
          <div
            className={`${
              isGrid ? 'grid col-span-1' : 'grid grid-cols-8 gap-x-4'
            }  bg-primary rounded-lg overflow-hidden`}
            key={i}
          >
            <div
              className={`relative ${
                isGrid ? 'col-span-1' : 'col-span-8 sm:col-span-3 sm:order-2'
              }`}
            >
              <Image
                src={isSale ? sale : upcoming}
                alt="badge"
                className={`absolute top-0 max-w-[100px] ${
                  isGrid ? 'left-0' : 'sm:-left-6'
                } `}
              />

              <Image
                src={image}
                alt="car"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div
              className={`relative ${
                isGrid
                  ? 'col-span-1'
                  : 'col-span-8 sm:col-span-5 order-2 sm:order-1'
              }`}
            >
              <div className="text-white p-4 pb-5">
                <div
                  className={`${
                    isGrid ? 'flex-col' : 'flex-row'
                  } flex justify-between items-start gap-x-2`}
                >
                  <h2 className="text-xl font-semibold max-w-[77%] overflow-hidden whitespace-nowrap text-ellipsis">
                    {title}
                  </h2>
                  <div className="bg-white bg-opacity-30 py-1.5 px-3 rounded-md">
                    <h2 className="sm:text-base font-semibold text-white">
                      {timestamp}
                    </h2>
                  </div>
                </div>

                <div className="mt-1">
                  <div
                    className={`grid ${
                      isGrid
                        ? 'grid-cols-1 gap-1'
                        : 'grid-cols-2 gap-x-4 gap-y-1.5'
                    }`}
                  >
                    {details.map((detail, j) => (
                      <h2 className="text-sm opacity-90" key={j}>
                        {detail.title}: {detail.content}
                      </h2>
                    ))}

                    <div className="col-span-1 w-full">
                      <button className="text-primary bg-white rounded-md font-bold py-2.5 px-4 w-full">
                        Bid Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarList;
