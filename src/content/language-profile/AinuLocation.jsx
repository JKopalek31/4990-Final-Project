import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import location from "../../assets/ainuLocation.png";

export const AinuLocation = () => {
  const locRef = useRef(null);
  const locInView = useInView(locRef, {
    once: false,
    threshold: 0.3
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto mt-16 mb-0">
      {/* Left column text */}
      <motion.div
        ref={locRef}
        className="p-4 md:p-8 text-left bg-maroon h-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: locInView ? 1 : 0, x: locInView ? 0 : -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 mt-4">
          Traditionally, Ainu speakers can be found in
        </h1>
        <ul className="list-disc pl-6 md:pl-10 list-inside text-base sm:text-lg md:text-xl text-white space-y-2">
          <li>
            <strong>Hokkaido (Northern Japan)</strong>
          </li>
          <li>
            <strong>Sakhalin (now part of Russia)</strong>
          </li>
          <li>
            <strong>Kuril Islands</strong>
          </li>
        </ul>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-20 mb-auto">
          But today’s population mostly resides in Hokkaido
        </h1>
      </motion.div>

      {/* Right column image */}
      <motion.div
        ref={locRef}
        className="bg-maroon px-2 py-2 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: locInView ? 1 : 0, x: locInView ? 0 : 100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Make the image responsive */}
        <img
          src={location}
          alt="Location Map"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};
