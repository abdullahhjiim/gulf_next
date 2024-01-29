import { FaArrowRight } from 'react-icons/fa';
import heroBg from '../../public/hero.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-[65vh] sm:min-h-[75vh] flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden py-12 z-10">
      <Image
        src={heroBg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black bg-opacity-45 -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-[600px] text-white text-center flex flex-col justify-center items-center gap-y-3 md:gap-y-5 mx-auto">
          <h1 className="text-3xl md:text-6xl md:leading-[80px] uppercase font-bold">
            The Wind is Not Even Close To Us
          </h1>
          <p className="text-lg font-secondary ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus cupiditate mollitia suscipit ipsum.
          </p>
          <button className="bg-primary text-white font-secondary font-medium rounded-full flex items-center justify-center gap-x-3 pl-5 pr-2 py-1 hover:translate-x-4 duration-500">
            Discover More
            <div className="inline-block p-4 bg-white rounded-full text-primary">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
