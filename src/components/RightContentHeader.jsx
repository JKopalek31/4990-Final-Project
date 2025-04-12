import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation.jsx";

export const RightContentHeader = ({ image, title, description }) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, x: -100 }}
      animation={{ opacity: 1, x: 0 }}
    >
      <div className="flex flex-col md:flex-row items-center bg-offwhite p-4 rounded-xl">
        
        {/* Image */}
        <img
          className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
          src={image}
          alt={title}
        />
        
        {/* Text Container */}
        <div className="md:w-1/2 md:pl-10 text-left">
          
          {/* 
            1) Keep text-7xl so it stays large
            2) Use break-words to wrap any too-long word
            3) Use whitespace-normal so text can break onto new lines
          */}
          <h3
            className="
              text-6xl
              sm:text-7xl
              text-maroon
              font-bold
              mb-2 pb-4
              break-words
              whitespace-normal
            "
          >
            {title}
          </h3>

          {/* Description can remain responsive if you want */}
          <p className="text-4xl md:text-4xl text-slate-800">
            {description}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
};
