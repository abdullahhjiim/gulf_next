'use client';

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = 5;
  return (
    <div className="flex items-center gap-x-1 mt-6">
      <div className="flex justify-center items-center w-11 h-11  bg-black bg-opacity-10 text-black hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer">
        <FaArrowLeft />
      </div>
      <div className="flex justify-center items-center w-11 h-11  bg-black bg-opacity-10 text-black hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer font-bold">
        1
      </div>
      <div className="flex justify-center items-center w-11 h-11  bg-black bg-opacity-10 text-black hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer font-bold">
        2
      </div>
      <div className="flex justify-center items-center w-11 h-11  bg-black bg-opacity-10 text-black hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
