'use client';

import React, { useState } from 'react';

const selectOptions = ['Default', 'Price Low To High', 'Price High To Low'];

const Topbar = () => {
  const [sortby, setSortby] = useState('default');

  return (
    <div className="py-2 px-4 bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-2">
      <h4 className="text-lg sm:text-xl font-semibold text-center sm:text-start">
        {`Auction List- Dubai - 2 Participants`}
      </h4>
      <div className="flex gap-3 items-center">
        <form action="">
          <div className="flex justify-between items-center gap-x-3 mt-2">
            <select
              required
              name="sort"
              id="sort"
              value={sortby}
              className="bg-white text-black p-1 rounded-lg focus:border-0 focus:outline-none w-full max-h-[70px] overflow-y-auto input-with-shadow"
              onChange={(e) => setSortby(e.target.value)}
            >
              {selectOptions.map((option, i) => (
                <option className="my-1" value={option} key={i}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </form>
        <h4 className="text-lg font-semibold text-center sm:text-start">
          {`2 Left`}
        </h4>
      </div>
    </div>
  );
};

export default Topbar;
