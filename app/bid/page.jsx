'use client';

import React, { useState } from 'react';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import SingleCarBidImages from '@/components/bid/SingleCarBidImages';
import SingleCarBidDetails from '@/components/bid/SingleCarBidDetails';
import UpcomingLots from '@/components/bid/UpcomingLots';
import Topbar from '@/components/bid/Topbar';
import BidSidebar from '@/components/bid/BidSidebar';

const Bid = () => {
  const [musicOn, setMusicOn] = useState(true);

  return (
    <div className="my-8 md:my-12">
      <div className="container mx-auto px-4">
        {/* add auction, music */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h4 className="text-xl text-primary font-semibold text-center sm:text-start">
            {`Today's Auctions:`}
          </h4>
          <button
            className="text-lg font-semibold flex justify-center items-center gap-x-1 cursor-pointer duration-300"
            onClick={() => setMusicOn((prev) => !prev)}
          >
            Music {musicOn ? 'On' : 'Off'}
            {musicOn ? <GiSpeaker size={22} /> : <GiSpeakerOff size={22} />}
          </button>
          <button className="bg-primary text-sm text-white font-bold hover:bg-opacity-90 py-2 px-4 rounded-md duration-300">
            Add Auction +
          </button>
        </div>

        {/* auction details box */}
        <div className="bg-white rounded-lg overflow-hidden mt-4">
          <Topbar />

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-2/3">
              <SingleCarBidImages />
              <SingleCarBidDetails />
            </div>
            {/* sidebar */}
            <BidSidebar />
          </div>
        </div>

        {/* upcoming lots */}
        <UpcomingLots />
      </div>
    </div>
  );
};

export default Bid;
