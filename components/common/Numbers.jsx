import React from 'react';
import Image from 'next/image';
import banner from '../../public/banner3.png';

const dummyData = [
  {
    number: '5000',
    title: 'vehicle in stock',
  },
  {
    number: '987',
    title: 'vehicle delivered',
  },
  {
    number: '745',
    title: 'happy customers',
  },
  {
    number: '45',
    title: 'Awards',
  },
];

const Numbers = () => {
  return (
    <div className="relative flex justify-center items-center py-12 min-h-[44vh] z-10">
      <div className="absolute inset-0 w-full h-full bg-primary bg-opacity-80 -z-[1]" />
      <div className="absolute inset-0 w-full h-full -z-[2]">
        <Image
          src={banner}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center text-white">
          {dummyData.map((item, i) => (
            <div
              className="w-full sm:w-1/2 md:w-1/4 p-4 flex flex-col justify-center items-center text-center"
              key={i}
            >
              <h2 className="text-3xl sm:text-4xl font-bold">{item.number}</h2>
              <p className="uppercase">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
