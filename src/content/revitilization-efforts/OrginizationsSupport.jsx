// import React from "react";
// import { motion } from "framer-motion";
// import { Landmark, Globe, ShieldCheck } from "lucide-react";

// const orgs = [
//   {
//     icon: <Landmark className="w-8 h-8 text-white" />,
//     title: "FRPAC",
//     org: "Foundation for Research and Promotion of Ainu Culture",
//     description:
//       "A major non-governmental organization supporting Ainu language documentation, education, and cultural transmission.",
//     image: "https://picsum.photos/seed/frpac/400/300",
//   },
//   {
//     icon: <ShieldCheck className="w-8 h-8 text-white" />,
//     title: "Japanese Government",
//     org: "Ministry of Education & Cabinet Secretariat",
//     description:
//       "Recognized the Ainu as Indigenous in 2008 and funds language revitalization programs and policy initiatives.",
//     image: "https://picsum.photos/seed/japan/400/300",
//   },
//   {
//     icon: <Globe className="w-8 h-8 text-white" />,
//     title: "UNESCO & Global Advocacy",
//     org: "UNESCO & International Indigenous Rights Orgs",
//     description:
//       "Push global endangered language frameworks and visibility for Ainu cultural and linguistic survival.",
//     image: "https://picsum.photos/seed/unesco/400/300",
//   },
// ];

// export const OrganizationsSupport = () => {
//   return (
//     <section className="bg-gradient-to-br from-maroon to-offwhite py-24 px-6 text-slate-700 overflow-hidden mx-40">
//       <motion.h2
//         className="text-4xl md:text-6xl font-extrabold mb-20 text-center drop-shadow-lg text-slate-300"
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
//         viewport={{ once: false }}
//       >
//         Organizations Involved
//       </motion.h2>

//       <div className="relative max-w-6xl mx-auto flex flex-col gap-32">
//         {orgs.map((org, index) => {
//           const fromLeft = index % 2 === 0;
//           const layoutDirection = fromLeft ? "md:flex-row" : "md:flex-row-reverse";

//           return (
//             <motion.div
//               key={index}
//               className={`relative w-full md:w-4/5 p-6 bg-white/10 border border-white/20 backdrop-blur-md shadow-xl rounded-xl flex flex-col ${layoutDirection} items-center gap-6
//                 ${fromLeft ? "self-start ml-0 md:ml-8" : "self-end mr-0 md:mr-8"}
//               `}
//               initial={{ opacity: 0, x: fromLeft ? -150 : 150, y: fromLeft ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//               viewport={{ once: false, amount: 0.3 }}
//             >
//               {/* Image side */}
//               <img
//                 src={org.image}
//                 alt={org.title}
//                 className="w-full md:w-[300px] h-[200px] object-cover rounded-md shadow-md"
//               />

//               {/* Text side */}
//               <div className="flex flex-col text-left">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="bg-white/20 p-3 rounded-full">{org.icon}</div>
//                   <h3 className="text-2xl font-bold text-slate-200">{org.title}</h3>
//                 </div>
//                 <h4 className="italic text-slate-200 text-xl mb-2">{org.org}</h4>
//                 <p className="text-slate-200 leading-snug text-2xl">{org.description}</p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default OrganizationsSupport;

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Globe, ShieldCheck } from "lucide-react";

const orgs = [
  {
    icon: <Landmark className="w-8 h-8 text-white" />,
    title: "FRPAC",
    org: "Foundation for Research and Promotion of Ainu Culture",
    description:
      "A major non-governmental organization supporting Ainu language documentation, education, and cultural transmission.",
    image: "https://picsum.photos/seed/frpac/400/300",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Japanese Government",
    org: "Ministry of Education & Cabinet Secretariat",
    description:
      "Recognized the Ainu as Indigenous in 2008 and funds language revitalization programs and policy initiatives.",
    image: "https://picsum.photos/seed/japan/400/300",
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "UNESCO & Global Advocacy",
    org: "UNESCO & International Indigenous Rights Orgs",
    description:
      "Push global endangered language frameworks and visibility for Ainu cultural and linguistic survival.",
    image: "https://picsum.photos/seed/unesco/400/300",
  },
];

export const OrganizationsSupport = () => {
  const whyItmatters = "Why It Matters";
  const whyDesciption =
    "These organizations play a crucial role in preserving the cultural heritage and language of the Ainu people. From grassroots education to international policy, they are helping keep the language alive for future generations.";

  return (
    <div className="bg-gradient-to-br from-maroon to-offwhite mt-20 pt-20 mb-20">
        <div className="">
        <motion.h1
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-9xl font-bold text-center px-auto bg-gradient-to-r from-offwhite to-maroon bg-clip-text text-transparent py-4"
        >
        Organizational Support
        </motion.h1>
        </div>
    <div className="relative flex flex-col lg:flex-row justify-center items-center py-24 px-auto gap-10">
      <motion.div
        className="max-w-md text-white text-left mx"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-6">{whyItmatters}</h2>
        <p className="text-lg leading-relaxed">{whyDesciption}</p>
      </motion.div>

      {/* 🔸 iPhone Container */}
      <div className="relative w-[425px] h-[812px] bg-black rounded-[3rem] border-[16px] border-black shadow-2xl overflow-hidden mx-20 px-35">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-800 rounded-full z-20" />
        <div className="absolute inset-0 overflow-y-auto pt-8 px-4">
          <motion.h2
            className="text-3xl font-extrabold mb-8 text-center text-slate-200 pt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
            viewport={{ once: false }}
          >
            Organizations Involved
          </motion.h2>

          <div className="flex flex-col gap-10">
            {orgs.map((org, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <img
                  src={org.image}
                  alt={org.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-2 rounded-full">{org.icon}</div>
                  <h3 className="text-2xl font-bold">{org.title}</h3>
                </div>
                <h4 className="italic text-lg text-slate-300 mb-1">{org.org}</h4>
                <p className="text-xl text-slate-200 leading-snug">
                  {org.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrganizationsSupport;
