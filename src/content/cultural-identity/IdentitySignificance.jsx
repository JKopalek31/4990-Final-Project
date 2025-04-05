import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const IdentitySignificance = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.2 });

  const borderRef = useRef(null);
  const borderinView = useInView(borderRef, { once: false, threshold: 0.2 });
  
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: false, threshold: 0.2 });

  return (
    <motion.div className="w-auto h-auto pt-32 pb-40 p-0 m-0 px-40 py-0 z-0">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" text-slate-800 rounded-lg bg-gradient-to-r from-maroon via-salmon to-pink-200 shadow-lg w-auto pl-1 pb-1 pr-1 pt-1 mx-0 my-0"
    >
      <motion.div
      ref={borderRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: borderinView ? 1 : 0, y: borderinView ? 0 : 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="  bg-offwhite text-slate-800 rounded-lg p-0 w-auto pl-1 pr-1 pt-1 pb-1 mt-0 mb-0 ml-0 mr-0" 
    >
      {/* <div className=" flex justify-c">
      <h2 className="text-5xl font-bold mb-0 text-center text-maroon mt-0 bg-orange-400">
        Cultural Identity & Significance
      </h2>
      <ul className="list-disc list-inside space-y-4 text-xl text-left text-slate-600 px-0 bg-green-300 mx-auto">
        <li>
          <strong>Who speaks this language?</strong><br />
          The language is spoken by members of the ethnic group, community, or region associated with it.
        </li>
        <li>
          <strong>Cultural Importance:</strong><br />
          The language is deeply tied to traditions, beliefs, and the historical identity of its speakers.
        </li>
        <li>
          <strong>Oral traditions, literature, or media:</strong><br />
          This language features unique folklore, poetry, songs, and storytelling traditions that have been passed down through generations.
        </li>
      </ul>
      </div> */}
      







      <div className="flex flex-col items-center">
  <h2 className="text-5xl font-bold text-maroon mb-1 text-center">
    Cultural Identity & Significance
  </h2>
  <motion.div
              ref={barRef}
              className="w-auto h-1 bg-salmon rounded-full px-80 mx-auto my-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: barInView ? 1 : 0, scaleX: barInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              />

  <div className="mx-auto w-fit mt-1">
    <ul className="list-disc list-inside space-y-4 text-3xl text-slate-60 px-6 text-left">
      <li>
        <strong>Who speaks this language?</strong><br />
        The language is spoken by members of the ethnic group, community, or region associated with it.
      </li>
      <li>
        <strong>Cultural Importance:</strong><br />
        The language is deeply tied to traditions, beliefs, and the historical identity of its speakers.
      </li>
      <li>
        <strong>Oral traditions, literature, or media:</strong><br />
        This language features unique folklore, poetry, songs, and storytelling traditions that have been passed down through generations.
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
