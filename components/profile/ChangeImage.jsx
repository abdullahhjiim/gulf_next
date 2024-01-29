'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import banner from '../../public/abstract1.jpg';

const ChangeImage = () => {
  const [choosenFile, setChoosenFile] = useState(null);
  const [fileName, setFileName] = useState('No Selected File');

  return (
    <div className="relative">
      <Image
        src={banner}
        alt="banner"
        className="w-40 h-40 rounded-full object-cover mx-auto"
      />
      <div className="absolute bottom-4 -right-4">
        <input
          type="file"
          accept="image/*"
          className="file_upload_input"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setChoosenFile(URL.createObjectURL(files[0]));
            }
          }}
        />
        <button
          className="bg-primary text-[12px] text-white font-bold hover:bg-opacity-90 py-1 px-2.5 rounded duration-300"
          onClick={() => document.querySelector('.file_upload_input').click()}
        >
          Edit Image
        </button>
      </div>
    </div>
  );
};

export default ChangeImage;
