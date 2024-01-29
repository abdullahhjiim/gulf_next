import Image from 'next/image';
import aboutImage from '../../public/about-car.png';

const About = () => {
  return (
    <div className="relative py-20 md:py-32 bg-secondary bg-cover bg-left bg-no-repeat z-10">
      <Image
        src={aboutImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover hidden md:block -z-10"
      />
      <div className="absolute inset-0 bg-white bg-opacity-50 -z-10 block lg:hidden" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 lg:col-span-5" />
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-y-5">
            <h4 className="text-primary font-secondary font-semibold text-2xl">
              About Us
            </h4>
            <h2 className="text-3xl md:text-5xl md:leading-snug font-bold font-secondary mb-4">
              Everything you need to build an Gulf Cars auction.
            </h2>
            <p className="text-lg leading-8 font-secondary">
              Car Dealer is the best premium HTML5 Template. We provide
              everything you need to build an <b>Gulf Cars auction</b> developed
              especially for car sellers, dealers or auto motor retailers. You
              can use this template for creating website based on any framework
              and any language
            </p>
            <h4 className="mt-0 lg:-mt-8 mb-11 -rotate-12 font-tertiary sm:pl-20 text-[#CACACA] text-6xl">
              Gulf Cars auction
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
