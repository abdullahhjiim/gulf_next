import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import VehicleSearch from '@/components/home/VehicleSearch';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import Services from '@/components/home/Services';
import Brands from '@/components/common/Brands';
import PopularCars from '@/components/home/PopularCar';
import AuctionsList from '@/components/home/AuctionsList';

export default function Home() {
  return (
    <>
      <Hero />
      <VehicleSearch />
      <WhatWeOffer />
      <About />
      <Services />
      <Brands />
      <AuctionsList />
      <PopularCars />
    </>
  );
}
