// ScrollAnimation.jsx must export a component using `useInView` + `motion.div`

import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation.jsx";






export const ContentHeader = ({ image, title, description }) => {
    const features = [
        {
          id: 1,
          image: "https://picsum.photos/800/300?random=1",
          title: "Language Profile",
          description: "Explore the origins and traditions of the Ainu people.",
        },
      ];
  return (
    <ScrollAnimation
      initial={{ opacity: 0, x: -100 }}
      animation={{ opacity: 1, x: 0 }}
    >
      <div className="flex flex-col md:flex-row items-center bg-offwhite p-4 rounded-xl">
        <img
          className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
          src={image}
          alt={title}
        />
        <div className="md:w-1/2 md:pl-10 text-left md:text-left">
          <h3 className="text-7xl text-maroon font-bold mb-2">{title}</h3>
          <p className="text-slate-800 text-4xl" >{description}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};
