// utils/ScrollAnimation.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollAnimation = ({ children, initial, animation, transition }) => {
  const ref = useRef();
  const isInView = useInView(ref, {
    once: false, // or true, depending on your use case
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animation : initial}
      transition={transition || { duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
