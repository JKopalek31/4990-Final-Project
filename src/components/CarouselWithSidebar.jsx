import React from 'react';
import { ImageSlider } from './ImageSlider';

export const CarouselWithSidebar = () => {
  return (
    <section className="bg-maroon w-screen overflow-hidden pt-20 min-h-screen">
      <div className="flex flex-col min-[805px]:flex-row items-center justify-between w-full">
        
        {/* Left Column: Text (Stacks before collision, Centers on Small Screens) */}
        <div className="w-full min-[805px]:w-1/3 flex flex-col justify-center">
          <h1 className="text-6xl px-2 md:text-7xl lg:text-8xl font-bold text-white text- min-[805px]:text-right">
            Ainu
          </h1>
          <p className="hidden px-2 min-[805px]:block mt-4 text-lg text-white text-center min-[805px]:text-right">
            The indigenous and endangered people of Japan.
          </p>
          <p className="hidden px-2 min-[805px]:block mt-4 text-lg text-white text-center min-[805px]:text-right">
            By Jett Kopalek
          </p>
        </div>

        {/* Right Column: Image (Ensuring Full Width, No Extra Space) */}
        <div className="w-full min-[805px]:w-2/3">
          <ImageSlider />
        </div>

      </div>
    </section>
  );
};
