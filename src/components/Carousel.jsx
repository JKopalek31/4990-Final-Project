// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// export const Carousel = () => {
//   const images = [
//     "https://picsum.photos/800/300?random=1",
//     "https://picsum.photos/800/300?random=2",
//     "https://picsum.photos/800/300?random=3",
//   ];
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
//   const previousSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex">
//       <button 
//         onClick={previousSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
//         aria-label="Previous Slide"
//       >
//         <FaArrowLeft />
//       </button>
//       <img 
//         src={images[index]} 
//         alt={`Slide ${index + 1}`}
//         className="w-full h-auto"
//       />
//       <button 
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
//         aria-label="Next Slide"
//       >
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  // 1) Carousel Logic
  const images = [
    "https://picsum.photos/800/300?random=1",
    "https://picsum.photos/800/300?random=2",
    "https://picsum.photos/800/300?random=3",
  ];
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const previousSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // auto-play every 3s
    return () => clearInterval(interval);
  }, []);

  // 2) Layout: only the carousel, big & centered at the top
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-10">
      {/* Option A: Center near the top */}
      <div className="max-w-3xl mx-auto">

        {/* Carousel Container */}
        <div className="relative flex rounded-xl shadow-lg overflow-hidden">
          {/* Previous Arrow Button */}
          <button 
            onClick={previousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                       bg-black/50 hover:bg-black/70 text-white p-3 
                       rounded-full transition-colors"
            aria-label="Previous Slide"
          >
            <FaArrowLeft />
          </button>

          {/* Current Slide Image */}
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-cover transition-all duration-500"
          />

          {/* Next Arrow Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                       bg-black/50 hover:bg-black/70 text-white p-3 
                       rounded-full transition-colors"
            aria-label="Next Slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
