import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AinuPopulationGraph from "../../components/populationGraph";

export const AinuPopulation = () => {
  const populationRef = useRef(null);
  const populationInView = useInView(populationRef, {
    once: false,
    threshold: 0
  });

  const popRef = useRef(null);
  const popInView = useInView(popRef, {
    once: false,
    threshold: 0
  });

  return (
    <div className="mt-16 mb-16">
      {/* Title + maroon line */}
      <motion.div
        ref={populationRef}
        className="px-4 md:px-96 py-6 mb-12 text-center rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: populationInView ? 1 : 0, y: populationInView ? 0 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="px-4 py-6 mt-0 mb-4 text-5xl md:text-5xl text-slate-800 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: populationInView ? 1 : 0, y: populationInView ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          How many Ainu are left?
        </motion.h1>

        <motion.div
          className="w-auto h-1 bg-maroon rounded-full mb-4 mx-auto md:mx-20"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: populationInView ? 1 : 0, scaleX: populationInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        />
      </motion.div>

      {/* Graph and text side by side (stack on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <div>
          <AinuPopulationGraph />
        </div>
        
        <motion.h1
          ref={popRef}
          className="text-4xl text-left md:text-5xl mc:text-center font-bold text-slate-800 mx-auto m-4 md:m-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: popInView ? 1 : 0, x: popInView ? 0 : 100 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
        >
          According to UNESCO, there are only 9 native speakers left
        </motion.h1>
      </div>
    </div>
  );
};
