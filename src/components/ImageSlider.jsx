import React, { useEffect, useState } from "react";

export const ImageSlider = () => {
  const images = [
    "https://picsum.photos/800/620?random=1",
    "https://picsum.photos/800/620?random=2",
    "https://picsum.photos/800/620?random=3",
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

      <img 
        src={images[index]} 
        alt={`Slide ${index + 1}`}
        className="w-full h-auto"
      />
    </div>
  );
};