'use client';

import React, { useState } from 'react';

const dummyData = [
  {
    title: 'Bid Status',
    value: '',
  },
  {
    title: 'Eligibility Test:',
    value: 'Check Now',
    link: '',
  },
  {
    title: 'Sell Status',
    value: 'Minimum Bid',
  },
  {
    title: 'Current Bid:',
    value: '$0',
  },
];

const BidInformations = () => {
  const [startingBid, setStartingBid] = useState();
  const [maximumBid, setMaximumBid] = useState();

  return (
    <div>
      {/* bid info */}
      <div className="border border-primary rounded overflow-hidden">
        <div className="bg-primary text-white rounded p-3 flex justify-between items-center gap-x-1">
          <h4 className="text-lg font-semibold">Bid Informations:</h4>
          <p className="text-[12px]">Glossary</p>
        </div>

        <div className="p-3">
          <div>
            <div className="flex flex-col">
              {dummyData?.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between gap-x-1 py-1">
                    <p className="font-semibold text-sm">{item.title}:</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                  <div className="bg-primary w-full h-[1px] my-1 bg-opacity-20" />
                </div>
              ))}
              <div className="flex justify-between gap-x-1 py-1">
                <p className="font-semibold text-sm">Starting Bid:</p>
                <input
                  type="number"
                  className="border border-primary border-opacity-20 rounded-md max-w-[120px] max-h-10 px-2 py-3"
                  placeholder="0"
                  value={startingBid}
                  onChange={(e) => setStartingBid(e.target.value)}
                />
              </div>
              <div className="bg-primary w-full h-[1px] my-1 bg-opacity-20" />
              <div className="flex justify-between gap-x-1 py-1">
                <p className="font-semibold text-sm">Maximum Bid:</p>
                <input
                  type="number"
                  className="border border-primary border-opacity-20 rounded-md max-w-[120px] max-h-10 px-2 py-3"
                  placeholder="0"
                  value={maximumBid}
                  onChange={(e) => setMaximumBid(e.target.value)}
                />
              </div>
              <button className="text-sm font-bold bg-primary text-white py-3 px-3 rounded-md mt-3">
                Bid Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-primary bg-opacity-35 text-white rounded p-2 flex justify-between items-center gap-x-1">
          <h4 className="text-[12px] font-medium">
            All bids are legally binding and all sales are final.{' '}
            <span className="font-bold cursor-pointer hover:text-primary">
              Learn More
            </span>
          </h4>
        </div>
      </div>

      {/* sale info */}
      <div className="border border-primary rounded overflow-hidden mt-4">
        <div className="bg-primary text-white rounded p-3">
          <h4 className="text-lg font-semibold">Sale Informations:</h4>
        </div>

        <div className="p-3">
          <div>
            <div className="flex flex-col">
              {dummyData?.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between gap-x-1 py-1">
                    <p className="font-semibold text-sm">{item.title}:</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                  {i !== dummyData.length - 1 && (
                    <div className="bg-primary w-full h-[1px] my-1 bg-opacity-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidInformations;
