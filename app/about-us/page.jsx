import React from 'react';
import Image from 'next/image';
import banner from '../../public/banner1.png';
import banner2 from '../../public/banner2.png';
import banner3 from '../../public/banner4.png';
import Services from '@/components/home/Services';
import Numbers from '@/components/common/Numbers';

const AboutUs = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center py-12 min-h-[30vh] sm:min-h-[66vh] z-10">
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 -z-[1]" />
        <div className="absolute inset-0 w-full h-full -z-[2]">
          <Image
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4">
          <h4 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Home / About Us
          </h4>
        </div>
      </div>
      <div className="bg-secondary bg-opacity-30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <div className="w-full sm:w-1/2">
              <Image src={banner2} alt="cars" className="text-center w-full" />
            </div>
            <div className="w-full sm:w-1/2 lg:pl-12">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl !leading-snug mb-4">
                Welcome GULF CARS AUCTION
              </h2>
              <p className="opacity-75 lg:pr-20 xl:pr-36">
                Gulf Cars auction is the best used car auction based in UAE. We
                provide everything you need to build an Amazing dealership
                website developed especially for car sellers, dealers or auto
                motor retailers. You can use this template for creating website
                based on any framework language. <br />
                <br /> Dealer obcaecati adipisci vero lorem ipsum dolor sit
                amet, consectetur adipisicing elit. dolorum pariatur aut
                consectetur. Sit quisquam rerum corporis neque atque inventore
                nulla, quibusdam, ipsa suscipit aperiam reiciendis, ea odio?
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-8 items-center sm:flex-row-reverse mt-12">
            <div className="w-full sm:w-1/2">
              <Image src={banner3} alt="cars" className="text-center w-full" />
            </div>
            <div className="w-full sm:w-1/2 lg:pr-20 xl:pr-40">
              <p className="opacity-75">
                Adipisicing ipsum dolor sit amet, consectetur elit. Obcaecati
                adipisci vero dolorum pariatur aut consectetur. Sit quisquam
                rerum corporis neque atque inventore nulla, quibusdam, ipsa
                suscipit aperiam reiciendis, ea odio? <br />
                <br /> Obcaecati adipisci vero dolorum pariatur aut consectetur.
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                quisquam rerum corporis neque atque inventore nulla, quibusdam,
                ipsa suscipit aperiam reiciendis, ea odio?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Numbers />
    </div>
  );
};

export default AboutUs;
