'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import ProgressBar from '@/components/bid/ProgressBar';

import flag from '../../public/flag.png';

const previousBids = [
  {
    flag: flag,
    country: 'United Arab Amirat',
    price: 60,
  },
];

const BidSidebar = () => {
  const [price, setPrice] = useState(0);

  return (
    <div className="w-full sm:w-1/3">
      <div className="relative bg-primary bg-opacity-20 w-full rounded p-4">
        <div className="absolute top-2 right-2 cursor-pointer hover:text-primary duration-300">
          <IoNotifications size={22} />
        </div>
        {/* progress bar */}
        <ProgressBar />

        <h4 className="text-center my-2 text-primary font-medium">
          All Bid In USD
        </h4>

        <form action="">
          <div className="flex items-center gap-2 h-full">
            <div className="bg-black bg-opacity-50 hover:bg-primary text-sm text-white font-bold hover:bg-opacity-90 h-[55px] min-w-[50px] flex justify-center items-center rounded-md duration-300 cursor-pointer">
              <FaMinus size={22} />
            </div>
            <input
              type="number"
              readOnly
              min={0}
              className="input-with-shadow w-full my-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="bg-black bg-opacity-50 hover:bg-primary text-sm text-white font-bold hover:bg-opacity-90 h-[55px] min-w-[50px] flex justify-center items-center rounded-md duration-300 cursor-pointer">
              <FaPlus size={22} />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-xl text-white font-bold w-full py-3 uppercase hover:bg-opacity-90 rounded-md duration-300 mt-2"
          >
            Bid
          </button>
        </form>

        {/* previous bids */}
        <div className="mt-3">
          <h6 className="text-primary font-medium text-lg mb-3">
            Previous Bids:
          </h6>
          <div className="flex flex-wrap gap-2">
            {previousBids.map((item, i) => {
              const { flag, country, price } = item;
              return (
                <div
                  className="flex items-center gap-x-1 max-w-[150px]"
                  key={i}
                >
                  <Image
                    src={flag}
                    alt="flag"
                    className="max-w-[40px] h-auto object-cover"
                  />
                  <div>
                    <h4 className="font-medium max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
                      {country}
                    </h4>
                    <p className="font-bold text-xl">${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidSidebar;
