import BidInformations from '@/components/single-car/BidInformations';
import RelatedCars from '@/components/single-car/RelatedCars';
import SingleCarImages from '@/components/single-car/SingleCarImages';
import VehicleInformation from '@/components/single-car/VehicleInformation';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const page = () => {
  return (
    <div className="my-12">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="flex justify-between items-center gap-4">
          <div>
            <h4 className="text-2xl md:text-4xl font-bold">
              1979 HONDA Durango
            </h4>
            <p className="mt-3 text-[12px]">
              Lot # <span className="text-primary font-semibold">66948111</span>{' '}
              | Sale Location: <span>IN - INTERNATIONAL CITY</span> | Sale Date:{' '}
              <span>20:51 PM AST</span>
            </p>
          </div>
          <div>
            <button className="border border-primary text-primary hover:text-white hover:bg-primary duration-300 rounded py-1.5 px-3 flex justify-center items-center gap-x-1">
              <FaStar />
              Watch
            </button>
          </div>
        </div>

        {/* main box */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 max-w-full overflow-hidden mt-12">
          <div className="w-full lg:w-[45%]">
            <SingleCarImages />
          </div>
          <div className="w-full lg:w-[30%]">
            <VehicleInformation />
          </div>
          <div className="w-full lg:w-[25%]">
            <BidInformations />
          </div>
        </div>

        {/* related cars */}
        <div>
          <RelatedCars />
        </div>
      </div>
    </div>
  );
};

export default page;
