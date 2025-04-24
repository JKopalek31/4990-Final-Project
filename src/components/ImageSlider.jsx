// import hero from "../assets/hero.webp"
import hero2 from "../assets/hero2.jpeg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"

import React, { useEffect, useState } from "react";

export const ImageSlider = () => {
  // Same images + fade logic as before
  const images = [
    // hero,
    hero2,
    hero3,
    hero4,
  ];
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const previousSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 1) Crossfade Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover
            transition-opacity duration-700 ease-in-out
            ${index === i ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        />
      ))}

      {/* 2) Gradient Overlay for darker top, transparent bottom */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-b
          from-offwhite/80
          via-black/1
          to-transparent
          z-20
        "
      />
    </div>
  );
};

