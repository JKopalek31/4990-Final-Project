import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import showcase from "../assets/fisherShowcase.png";

export const Title = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, {
    once: false,
    threshold: 0,
  });

  return (
    <div
      className="
        grid
        grid-cols-1              /* 1 column on mobile */
        md:grid-cols-[1fr_auto_1fr]  /* 3 columns on md+ */
        gap-6
        px-8
        py-8
        bg-offwhite
        text-slate-800
        shadow-lg
      "
    >
      {/* Left: Image */}
      <motion.div
        ref={headingRef}
        className="flex justify-center items-center px-4 py-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={showcase} alt="Showcase" className="h-auto w-auto" />
      </motion.div>

      

      {/* Middle: Vertical Bar */}
      <div className="flex justify-center items-center">
        <motion.div
          className="
                bg-maroon rounded-full
                /* Mobile: horizontal bar => 80% wide, 1px tall */
                w-[80%] h-1

                /* Desktop: vertical bar => 1px wide, 80% tall */
                md:w-1 md:h-[80%]

                /* center-aligned */
                mx-auto md:mx-auto

                /* Additional spacing if desired */
                mt-2 mb-4
            "
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scaleY: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      {/* Right: Text */}
      <div className="bg-offwhite rounded-lg px-4 py-4">
        <p className="text-lg text-slate-800 leading-relaxed font-medium mb-6">
          This project is the final project for{" "}
          <strong>St. John Fisher University's Cardinal Experience</strong> class, 
          taught by <strong>Professor Marina Bonilla-Conejo</strong>. As a sociolinguist, 
          Professor Bonilla-Conejo naturally focuses on raising awareness about rare 
          and endangered language groups. This final project highlights the <strong>Ainu</strong>, 
          an Indigenous group located near Hokkaido, Japan.
        </p>
        <p className="text-lg text-slate-800 font-semibold mb-3">
          This project aims to research:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>Language Profile</strong>
          </li>
          <li>
            <strong>Cultural Identity and Significance</strong>
          </li>
          <li>
            <strong>Endangerment Factors</strong>
          </li>
          <li>
            <strong>Revitalization Efforts</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};
