import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import icon from "../assets/ainuIcon.png";

export const SmoothScrollAinu = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, {
    once: false,
    threshold: 0.5, // trigger when 50% visible
  });

  return (
    <div className="w-screen">
      {/* Animated Section */}
      <div className="w-full min-h-screen flex items-center justify-center bg-salmon p-2">
        <motion.h2
          ref={headingRef}
          className="text-6xl font-bold text-offwhite text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          So lets learn a bit about the Ainu.
        </motion.h2>
        <motion.img
          src={icon}
          alt="Ainu People"
          className="w-full max-w-xl rounded-lg "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
};
