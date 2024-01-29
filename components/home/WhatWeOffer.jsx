import Image from 'next/image';
import offer1 from '../../public/service1.png';
import offer2 from '../../public/service2.png';
import offer3 from '../../public/service3.png';

import Link from 'next/link';

const ourOffers = [
  {
    img: offer1,
    title: 'BUY A CAR',
    description:
      ' We sell perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore',
    link: '/',
  },
  {
    img: offer2,
    title: 'SELL MY CAR',
    description:
      ' We sell perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore',
    link: '/',
  },
  {
    img: offer3,
    title: 'GET SERVICE',
    description:
      ' We sell perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore',
    link: '/',
  },
];

const WhatWeOffer = () => {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
          {ourOffers?.map((offer, i) => {
            const { img, title, description, link } = offer;
            return (
              <div
                className="relative text-white bg-[#1E1E1E] w-full px-16 py-10 rounded-[30px] overflow-hidden group z-10"
                key={i}
              >
                <div className="absolute bottom-0 right-0 -z-10">
                  <Image
                    src={img}
                    alt={title}
                    className="group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="max-w-[280px]">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-secondary uppercase font-bold">
                    {title}
                  </h4>
                  <p className="mt-4 mb-6 text-lg">{description}</p>
                  <Link
                    href={link}
                    className="py-2 px-8 rounded-full bg-primary text-white text-lg"
                  >
                    More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
