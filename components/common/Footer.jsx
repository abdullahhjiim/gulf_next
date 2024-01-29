import Link from 'next/link';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from 'react-icons/fa';

import logoWide from '../../public/logo.png';
import google from '../../public/google-button.png';
import apple from '../../public/apple-button.png';
import Image from 'next/image';

const details = [
  {
    logo: <FaMapMarkerAlt />,
    text: 'UBAI, UNITED ARAB EMIRATES',
  },
  {
    logo: <FaPhoneAlt />,
    text: '0581035772',
  },
  {
    logo: <FaEnvelope />,
    text: 'info@arianashippingline.com',
  },
];

const socialData = [
  {
    logo: <FaFacebookSquare size={35} />,
    link: `/`,
  },
  {
    logo: <FaInstagramSquare size={35} />,
    link: `/`,
  },
  {
    logo: <FaTwitterSquare size={35} />,
    link: `/`,
  },
];

const resourcesData = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/about-us',
  },
  {
    text: 'Auctions',
    link: '/auctions',
  },
  {
    text: 'Services',
    link: '/',
  },
  {
    text: 'Contact Us',
    link: '/contact-us',
  },
  {
    text: 'Terms & Conditions',
    link: '/',
  },
];

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] pt-12 md:pt-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-12">
          <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-start items-center md:items-start">
            <div className="mx-auto md:mx-0 md:-mt-4">
              <Image src={logoWide} alt="" className="max-w-full h-auto" />
            </div>
            <p className="opacity-80 xl:pr-20 mt-5">
              We sell perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
            {/* details */}
            <ul className="flex flex-col gap-y-3 my-10">
              {details.map((detail, i) => (
                <li className="flex items-center gap-x-2" key={i}>
                  <div className="text-primary">{detail.logo}</div>
                  <p className="uppercase opacity-80">{detail.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-8  md:pl-32">
            {/* resources */}
            <div>
              <h4 className="text-xl font-semibold text-primary">Resources</h4>
              <div className="h-[3px] w-32 bg-primary mt-3.5 mb-7" />
              <ul className="flex flex-col gap-y-4 ">
                {resourcesData.map((item, i) => (
                  <li
                    className="text-lg font-medium hover:text-primary"
                    key={i}
                  >
                    <Link href={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-primary">
                Download App
              </h4>
              <div className="h-[3px] w-32 bg-primary mt-3.5 mb-7" />
              <div className="flex gap-x-7">
                <Link href={'/'}>
                  <Image src={google} alt="" />
                </Link>
                <Link href={'/'}>
                  <Image src={apple} alt="" />
                </Link>
              </div>

              <div className="flex flex-col gap-y-4 mt-8">
                <h4 className="text-xl font-semibold text-primary">
                  Opening Hours
                </h4>
                <div className="h-[3px] w-32 bg-primary -mt-0.5 mb-2" />
                <div className="flex justify-between">
                  <p className="text-lg font-medium">Fri</p>
                  <p className="text-lg font-medium text-end">24 Hours</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-lg font-medium">Sun - Thu</p>
                  <p className="text-lg font-medium text-end">
                    6.00 am - 12.00 am
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="text-lg font-medium">Saturday</p>
                  <p className="text-lg font-medium text-end">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© Copyright 2023, All Rights Reserved</p>
          {/* social */}
          <ul className="flex items-center gap-x-4">
            {socialData.map((social, i) => (
              <li key={i}>
                <Link href={social.link}>
                  <div className="rounded-md text-gray-700 hover:text-primary hover:-translate-y-2 duration-500">
                    {social.logo}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
