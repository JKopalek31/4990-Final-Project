import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  wrap,
} from "framer-motion";

const ScrollRevolverText = () => {

//   const contentWidth = 4000;
  // Independent motion values for top and bottom
  const baseXTop = useMotionValue(0);
  const baseXBottom = useMotionValue(0);

//   const smoothBaseXTop = useSpring(baseXTop, { damping: 50, stiffness: 150 });
//   const smoothBaseXBottom = useSpring(baseXBottom, { damping: 50, stiffness: 150 });


  const { scrollY } = useScroll();
  const rawVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(rawVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [1, 5]);

  useAnimationFrame((_, delta) => {
    const baseSpeed = 2;
    const multiplier = 5;
    const move = (delta / 1000) * baseSpeed * multiplier * velocityFactor.get();

    // Top scrolls right to left (negative movement)
    baseXTop.set(baseXTop.get() + move);

    // Bottom scrolls left to right (positive movement)
    baseXBottom.set(baseXBottom.get() + move);
  });

  // Wrap both directions correctly
  const xTop = useTransform(baseXTop, (v) => `${wrap(-100, 0, v)}%`);
  const xBottom = useTransform(baseXBottom, (v) => `${wrap(-100, 0, v)}%`);
//   const xTop = useTransform(smoothBaseXTop, (v) => `${wrap(0, contentWidth, v)}px`);
//   const xBottom = useTransform(smoothBaseXBottom, (v) => `${wrap(0, contentWidth, v)}px`);

  return (
    <div className="relative w-full overflow-hidden bg-offwhite h-auto flex flex-col justify-center space-y-2 shadow-md shadow-salmon pb-4 pt-4">
      {/* Top: scrolls right to left */}
      <motion.div
        style={{ x: xTop }}
        className="flex whitespace-nowrap text-6xl font-bold text-maroon"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={`top-${i}`} className="mx-12 inline-block">
            Important Cultural Aspects   Important Cultural Aspects
          </span>
        ))}

        {/* {[...Array(2)].map((_, batch) => (
        Array.from({ length: 40 }).map((_, i) => (
            <span key={`top-${batch}-${i}`} className="mx-12 inline-block">
            Important Cultural Aspects
            </span>
        ))
        ))} */}
      </motion.div>

      {/* Bottom: scrolls left to right + flipped */}
      <motion.div
        style={{ x: xBottom }}
        className="flex whitespace-nowrap text-6xl font-bold text-maroon rotate-180"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={`bottom-${i}`} className="mx-12 inline-block">
            Important Cultural Aspects   Important Cultural Aspects
          </span>
        ))}
        {/* {[...Array(2)].map((_, batch) => (
            Array.from({ length: 40 }).map((_, i) => (
                <span key={`bottom-${batch}-${i}`} className="mx-12 inline-block">
                Important Cultural Aspects
                </span>
            ))
            ))} */}


      </motion.div>
    </div>
  );
};

export default ScrollRevolverText;
