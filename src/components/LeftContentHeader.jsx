import React from "react"
import ScrollAnimation from "../utils/ScrollAnimation"

export const LeftContentHeader = ({ image, title, description }) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, x: -100 }}
      animation={{ opacity: 1, x: 0 }}
    >
      {/* 
        - On small screens: items stack with the image on the bottom (flex-col-reverse)
        - On md+: items in a row 
      */}
      <div className="flex flex-col-reverse md:flex-row pb-32 items-center bg-offwhite p-4 rounded-xl">
        {/* Text Column */}
        <div className="md:w-1/2 md:pl-10 text-left md:text-left">
          {/* Title with bigger text on larger screens */}
          <h3 className="text-6xl sm:text-7xl md:text-7xl text-maroon font-bold mb-2 pb-4">
            {title}
          </h3>
          <p className="text-slate-800 text-xl sm:text-2xl md:text-4xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Column */}
        {/* margin on small screens -> mb-8 so there's spacing from text */}
        <img
          className="w-full md:w-1/2 rounded-lg mb-8 md:mb-0 md:ml-6"
          src={image}
          alt={title}
        />
      </div>
    </ScrollAnimation>
  )
}
