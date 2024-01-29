'use client';

import Image from 'next/image';
import car1 from '../../public/car1.jpg';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-[60vh] md:min-h-[90vh]">
      <div className="hidden md:block md:w-[44%]">
        <div className="flex justify-center items-center h-full w-full max-h-[90vh]">
          <Image
            src={car1}
            alt="abstract"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-[56%] bg-primary bg-opacity-5 p-4 md:p-12 lg:p-20 text-center flex justify-center items-center">
        <div className="w-full">
          <h4 className="font-bold text-2xl md:text-3xl font-secondary">
            Welcome Back
          </h4>
          <p className="opacity-75">Sign In To your account</p>
          <form className="text-start max-w-[555px] mx-auto bg-black bg-opacity-5 p-4 md:p-12 rounded-md backdrop-blur-md mt-6">
            {/* email */}
            <div className="my-4">
              <label htmlFor="email">
                Your Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="hello@gmail.com"
                className="input-with-shadow w-full my-2 !py-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* password */}
            <div>
              <label htmlFor="password">
                Your Password <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  required
                  name="password"
                  placeholder="Enter Your Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-with-shadow w-full my-2 !py-4"
                />
                <div
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-cyan-500"
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
            {/* forgot password */}
            <Link href={`/`}>
              <p className="font-semibold mt-4 hover:text-primary duration-300">
                Forget Password?
              </p>
            </Link>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-primary text-white font-bold w-full py-3 uppercase hover:bg-opacity-90 rounded-md duration-300 mt-2"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
