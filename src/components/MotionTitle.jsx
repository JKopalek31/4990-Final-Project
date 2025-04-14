import React from "react"
import { motion } from "framer-motion"

export default function MotionTitle() {
  return (
    <section
      className="
        relative 
        w-full 
        h-auto
        py-20
        bg-gradient-to-r 
        from-maroon 
        to-salmon
        flex 
        items-center 
        justify-center
      "
    >
      <motion.h1
        /** 
         * This triggers once ~50% of the element is visible 
         * (viewport.amount = 0.5).
         */
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          text-center 
          bg-gradient-to-r 
        from-salmon 
        to-maroon
          via-salmon
          bg-clip-text 
          text-transparent
          font-semibold 
          uppercase 
          text-6xl 
          sm:text-9xl 
          md:text-8xl 
          tracking-wide
        "
      >
        Ainu Culture Experience
      </motion.h1>

      {/* Optional subtle background motion shape */}
      {/* <motion.div
        className="
          absolute 
          w-64 
          h-64 
          bg-gradient-to-br 
          from-offwhite
          to-maroon
          rounded-full 
          -top-10 
          -left-20 
          blur-xl
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      /> */}
    </section>
  )
}
