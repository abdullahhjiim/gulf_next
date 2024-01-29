'use client';

import React, { useEffect, useState } from 'react';
import { FaCheck, FaInfo, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const ProfilePass = () => {
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const [infoVisible, setInfoVisible] = useState(false);

  const handlePassChange = (e) => {
    e.preventDefault();

    if (password && conPassword && country && state) {
      if (password === conPassword) {
        setActiveStep(4);
      } else {
        console.log('Password Doesnot Match!');
      }
    } else {
      console.log('Please Fill All The Fields');
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (infoVisible && e.target.closest('.info-box') === null) {
        setInfoVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [infoVisible]);
  return (
    <form onSubmit={handlePassChange}>
      {/* password */}
      <div className="text-start">
        <div className="flex items-center gap-x-2">
          <label htmlFor="password" className="font-semibold">
            New Password <span className="text-primary">*</span>
          </label>
          <div className="relative z-[111]">
            <div
              className="cursor-pointer bg-gray-300 w-4 h-4 rounded-full flex justify-center items-center hover:text-white hover:bg-primary duration-500"
              onClick={() => setInfoVisible((prev) => !prev)}
            >
              <FaInfo size={10} />
            </div>
            {infoVisible && (
              <div className="absolute top-[180%] left-1/2 -translate-x-1/2 p-4 rounded-md overflow-hidden bg-gray-100 w-[320px] z-[111]">
                <ul className="text-sm gap-y-2.5 flex flex-col">
                  <li className="flex items-center gap-x-1">
                    <FaCheck size={12} />
                    Password must contain an Uppercase letter
                  </li>
                  <li className="flex items-center gap-x-1">
                    <FaCheck size={12} />
                    Password must contain a lowercase letter
                  </li>
                  <li className="flex items-center gap-x-1">
                    <FaCheck size={12} />
                    Password must contain a special character
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <input
            required
            name="password"
            placeholder="Enter Your Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-with-shadow w-full my-2 !py-4 !pr-12"
          />

          <div
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaRegEye size={20} />
            ) : (
              <FaRegEyeSlash size={20} />
            )}
          </div>
        </div>
      </div>

      {/* confirm password */}
      <div className="text-start mt-3 mb-4">
        <label htmlFor="conPass" className="font-semibold">
          Confirm New Password <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <input
            required
            name="conPass"
            placeholder="Confirm Your Password"
            type={showConPassword ? 'text' : 'password'}
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            className="input-with-shadow w-full my-2 !py-4 !pr-12"
          />
          <div
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary"
            onClick={() => setShowConPassword((prev) => !prev)}
          >
            {showConPassword ? (
              <FaRegEye size={20} />
            ) : (
              <FaRegEyeSlash size={20} />
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary text-sm text-white font-bold hover:bg-opacity-90 py-3.5 px-4 rounded-md duration-300"
      >
        Change Password
      </button>
    </form>
  );
};

export default ProfilePass;
