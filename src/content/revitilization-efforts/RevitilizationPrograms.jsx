import React, {useRef} from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, MonitorPlay, Radio, School } from "lucide-react";

const programs = [
  {
    icon: <School className="w-10 h-10 text-white" />,
    title: "Educational Programs",
    description:
      "Ainu language classes are offered in various community centers, museums, and some schools in Hokkaido.",
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-white" />,
    title: "Digital Resources",
    description:
      "Apps, YouTube channels, and online dictionaries have been developed to support language learning and exposure.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-white" />,
    title: "Upopoy National Ainu Museum and Park",
    description:
      "Opened in 2020 in Shiraoi, Hokkaido, this national center offers immersive Ainu language and cultural experiences.",
  },
  {
    icon: <Radio className="w-10 h-10 text-white" />,
    title: "Broadcast Media",
    description:
      "Some radio and television programs now include segments in Ainu to promote use and visibility.",
  },
];

export const RevitalizationPrograms = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  return (
    // <section className="py-20 px-6 bg-gradient-to-b from-maroon to-[#410000] text-white text-center">
    <section className="py-20 px-6 text-center">
        <motion.h2
            className="text-6xl md:text-7xl tracking-wide text-slate-800 mb-8 mx-auto max-w-4xl"
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                duration: 0.8,
                ease: [0.175, 0.885, 0.32, 1.275], // easeOutBack
            }}
            >
            Revitalization Programs
            {/* <div className="w-auto h-1 bg-maroon rounded-full mb-20 mx-52 my-6"/> */}
            <motion.div
                ref={ref}
                className="w-auto h-1 bg-maroon rounded-full mb-20 mx-7 my-6"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
        </motion.h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {programs.map((item, index) => {
          const fromDirection = index % 2 === 0 ? -150 : 150;

          return (
            <motion.div
              key={index}
              className="bg-salmon backdrop-blur-lg border border-white/20 rounded-xl p-6 text-left shadow-lg hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, x: fromDirection }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-full">{item.icon}</div>
                <h3 className="text-3xl font-semibold text-maroon">{item.title}</h3>
              </div>
              <p className="text-slate-600 text-xl">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
