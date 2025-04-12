import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const LanguageName = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, threshold: 0 });

  return (
    <>
      <motion.h1
        ref={headingRef}
        className="px-4 py-6 mt-56 mb-4 text-center text-5xl text-slate-800 rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Formally, the language is known as Ainu (アイヌ イタㇰ, Aynu Itak)
      </motion.h1>

      <motion.div
        // We can reuse the same ref, or define another
        ref={headingRef}
        className="w-auto h-1 bg-maroon rounded-full mb-4 mx-20"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      />
    </>
  );
};
