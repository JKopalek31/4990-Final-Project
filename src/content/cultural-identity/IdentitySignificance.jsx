import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const IdentitySignificance = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.2 });

  const borderRef = useRef(null);
  const borderInView = useInView(borderRef, { once: false, threshold: 0.2 });
  
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: false, threshold: 0.2 });

  return (
    <motion.div 
      className="
        w-auto h-auto 
        pt-8 md:pt-32 
        pb-10 md:pb-32 
        px-4 md:px-40 
        mb-16 md:mb-32 
        z-0
      "
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          text-slate-800
          bg-gradient-to-r from-maroon via-salmon to-pink-200
          shadow-lg
          rounded-lg
          w-auto
          p-1
          mx-0 my-0
        "
      >
        <motion.div
          ref={borderRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: borderInView ? 1 : 0, y: borderInView ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            bg-offwhite
            text-slate-800
            rounded-lg
            p-1
            m-0
          " 
        >
          {/* Content */}
          <div className="flex flex-col items-center">
            {/* Title */}
            <h2 
              className="
                text-3xl sm:text-4xl md:text-5xl 
                font-bold
                text-maroon
                mb-1
                text-center
              "
            >
              Cultural Identity &amp; Significance
            </h2>

            {/* Bar */}
            <motion.div
              ref={barRef}
              className="
                w-auto h-1 
                bg-salmon
                rounded-full
                px-20 md:px-80 /* narrower on mobile, wider on desktop */
                mx-auto
                my-4
              "
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: barInView ? 1 : 0, scaleX: barInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />

            {/* Body / List */}
            <div className="mx-auto w-fit mt-1">
              <ul className="
                list-disc
                list-inside
                space-y-4
                text-base sm:text-lg md:text-2xl
                text-slate-600
                px-6
                text-left
              ">
                <li>
                  <strong>Who speaks this language?</strong><br />
                  The language is spoken by members of the ethnic group, community, and region associated with it. Primarily the Ainu population in Hokkaido who embrace the language.
                </li>
                <li>
                  <strong>Cultural Importance:</strong><br />
                  The language is deeply tied to traditions, beliefs, and the historical identity of its speakers. These markers of identity that are kept alive often though festivals and preservation events meant to spread awareness for the indiginous group as well as preserve herritiage.
                </li>
                <li>
                  <strong>Oral traditions, literature, or media:</strong><br />
                  This language features unique folklore, poetry, songs, and storytelling traditions passed down through generations. These tails have been pivital in world building and providing a basis for the Ainu peoples world view.
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IdentitySignificance;
