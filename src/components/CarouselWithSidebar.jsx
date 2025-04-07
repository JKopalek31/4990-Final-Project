import React from 'react';
import { ImageSlider } from './ImageSlider';
import logo from "../assets/fisherlogo.png";

export const CarouselWithSidebar = () => {
  return (
    <section className="bg-maroon w-screen overflow-hidden min-h-screen">

      {/* Top Navbar Background Strip */}
      <div className="h-20 w-full bg-offwhite top-0 left-0 z-40" />

      {/* Content with space for navbar */}
      <div className="pt-0 flex flex-col min-[805px]:flex-row items-center justify-between w-full">
        
        {/* Left Column: Text */}
        <div className="w-full min-[805px]:w-1/3 flex flex-col justify-center">
          <h1 className="text-6xl px-2 md:text-7xl lg:text-8xl font-bold text-white min-[805px]:text-right">
            Ainu
          </h1>
          <p className="hidden px-2 min-[805px]:block mt-4 text-lg text-white text-center min-[805px]:text-right">
            The indigenous and endangered people of Japan.
          </p>
          <p className="hidden px-2 min-[805px]:block mt-4 text-lg text-white text-center min-[805px]:text-right">
            By Jett Kopalek
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="w-full min-[805px]:w-2/3">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};
