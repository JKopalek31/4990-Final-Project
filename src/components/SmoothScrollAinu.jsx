import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import icon from "../assets/ainuIcon.png";

export const SmoothScrollAinu = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, {
    once: false,
    threshold: 0.5, // trigger when 50% is visible
  });

  return (
    <div className="w-screen">
      {/* Animated Section */}
      {/* 1) Use p-4 to add more padding on all sides */}
      <div className="w-full min-h-screen flex items-center justify-center bg-salmon p-4">
        {/* 2) Optional: arrange text and image vertically on mobile, side-by-side on larger screens */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* Title */}
          <motion.h2
            ref={headingRef}
            className="text-6xl font-bold text-offwhite text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            So let's learn a bit about the Ainu.
          </motion.h2>
          
          {/* Image */}
          <motion.img
            src={icon}
            alt="Ainu People"
            className="w-full max-w-xl rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
        </div>
      </div>
    </div>
  );
};
