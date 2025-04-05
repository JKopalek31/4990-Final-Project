// ImageScroller.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Image data array
const imageData = [
  {
    id: 1,
    text: "Canyon",
    url: "https://picsum.photos/800/900?random=90",
  },
  {
    id: 2,
    text: "Kyoto",
    url: "https://picsum.photos/800/900?random=91",
  },
  {
    id: 3,
    text: "Forest",
    url: "https://picsum.photos/800/900?random=93",
  },
  {
    id: 4,
    text: "Vietnam",
    url: "https://picsum.photos/800/900?random=94",
  },
];

// Single image + scroll text component
const ImageItem = ({ text, url }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 2]), {
    stiffness: 100,
    damping: 10,
  });

  return (
    <section className="relative h-screen overflow-hidden border">
      <div ref={ref} className="absolute inset-0 rounded-[5px]">
        <img
          src={url}
          alt={text}
          className="absolute h-full w-full object-cover"
        />
        <motion.h2
          style={{ scale }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-red-500 tracking-tight"
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
};

// Parent component that maps over images
export const ImageEffect = () => {
  return (
    <div>
      {imageData.map((img) => (
        <ImageItem key={img.id} text={img.text} url={img.url} />
      ))}
    </div>
  );
};
