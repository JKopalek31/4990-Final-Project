import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Carousel = () => {
  const images = [
    "https://picsum.photos/800/300?random=1",
    "https://picsum.photos/800/300?random=2",
    "https://picsum.photos/800/300?random=3",
  ];
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const previousSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex">
      <button 
        onClick={previousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        aria-label="Previous Slide"
      >
        <FaArrowLeft />
      </button>
      <img 
        src={images[index]} 
        alt={`Slide ${index + 1}`}
        className="w-full h-auto"
      />
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        aria-label="Next Slide"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

// export const CarouselWithSidebar = () => {
//   return (
//     <section className="bg-yellow-400 p-10">
//       <div className="bg-red-500">Test</div>
//       <div className="flex flex-row">
//         {/* Left column: White text */}
//         <div className="w-1/4 flex items-center justify-center">
//           <h2 className="text-white text-2xl font-bold">Your White Text Here</h2>
//         </div>
//         {/* Right column: Carousel */}
//         <div className="w-3/4">
//           <Carousel />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarouselWithSidebar;
