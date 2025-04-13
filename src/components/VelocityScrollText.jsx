import React from "react";
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

export default function VelocityScrollText() {
  // How many repeated segments of text (the more, the longer the line)
  const textRepeatCount = 80;

  // Grab the current Y scroll
  const { scrollY } = useScroll();
  // Extract velocity (speed of scrolling)
  const rawVelocity = useVelocity(scrollY);
  // Smooth out that velocity
  const smoothVelocity = useSpring(rawVelocity, {
    damping: 50,
    stiffness: 300,
  });
  // Map the velocity into some factor
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [1, 5]);

  // Independent motion values for top & bottom lines
  const baseXTop = useMotionValue(0);
  const baseXBottom = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    // Adjust these for overall speed
    const baseSpeed = 15;
    const multiplier = 8;
    // Move distance based on time delta, speed, & velocity factor
    const move = (delta / 1000) * baseSpeed * multiplier * velocityFactor.get();

    // Top line physically moves left (negative move)
    baseXTop.set(baseXTop.get() - move);

    // Bottom line also moves left in code,
    // but since it's rotated 180°, it appears to move in the opposite direction
    baseXBottom.set(baseXBottom.get() - move);
  });

  // Wrap from -8000px to 0px so there's plenty of text, no gap
  const xTop = useTransform(baseXTop, (v) => `${wrap(-8000, 0, v)}px`);
  const xBottom = useTransform(baseXBottom, (v) => `${wrap(-8000, 0, v)}px`);

  return (
    <div className="relative w-full overflow-hidden bg-offwhite h-auto flex flex-col justify-center space-y-2 shadow-md shadow-salmon pb-4 pt-4 mb-8">
      {/* TOP LINE: normal orientation, moves right-to-left */}
      <motion.div
        style={{ x: xTop }}
        className="flex whitespace-nowrap text-7xl font-bold text-maroon"
      >
        {Array.from({ length: textRepeatCount }).map((_, i) => (
          <span key={`top-${i}`} className="inline-block px-2">
            Important Cultural Aspects
          </span>
        ))}
      </motion.div>

      {/* BOTTOM LINE: rotated 180°, so from the user's POV, it goes left-to-right */}
      <motion.div
        style={{ x: xBottom }}
        className="flex whitespace-nowrap text-7xl font-bold text-maroon rotate-180"
      >
        {Array.from({ length: textRepeatCount }).map((_, i) => (
          <span key={`bottom-${i}`} className="inline-block px-2">
            Important Cultural Aspects
          </span>
        ))}
      </motion.div>
    </div>
  );
}
