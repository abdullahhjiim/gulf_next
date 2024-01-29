import React from 'react';
import Image from 'next/image';

import carOne from '../../public/1.png';
import carTwo from '../../public/2.png';
import carThree from '../../public/3.png';

const upcomingLots = [
  {
    img: carOne,
    title: '2020 NISSAN TEST 2',
    lot: '70943534',
    item: '2',
    odo: '222',
  },
  {
    img: carTwo,
    title: '2020 NISSAN TEST 2 with exios nos',
    lot: '70943534',
    item: '2',
    odo: '222',
  },
  {
    img: carThree,
    title: '2020 NISSAN TEST 2',
    lot: '70943534',
    item: '2',
    odo: '222',
  },
  {
    img: carThree,
    title: '2020 NISSAN TEST 2',
    lot: '70943534',
    item: '2',
    odo: '222',
  },
];
const UpcomingLots = () => {
  return (
    <div className="mt-12">
      <h6 className="mb-3 font-bold text-primary text-xl">Upcoming Lots:</h6>

      <div className="flex flex-wrap">
        {upcomingLots.map((item, i) => {
          return (
            <div
              className="w-full sm:w-1/2 xl:w-1/3 p-2 flex items-start gap-x-2"
              key={i}
            >
              <Image
                src={item.img}
                alt="car"
                className="max-w-[100px] lg:max-w-[200px] w-auto object-cover rounded-md"
              />
              <div className="flex flex-col gap-y-1">
                <h4 className="font-medium sm:max-w-[200px] overflow-hidden sm:whitespace-nowrap text-ellipsis">
                  {item.title}
                </h4>
                <p className="flex gap-x-1">
                  Lot: <span>{item.lot}</span> Item: {item.item}
                </p>
                <p>Odo: {item.odo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingLots;
