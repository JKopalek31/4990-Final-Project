import React from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Colonization & Historical Oppression",
    description:
      "During Japan’s colonization of Hokkaido in the 19th century, Ainu people were systematically assimilated. The government banned Ainu cultural practices and prohibited the language in schools and public life. This forced shift led to generations of Ainu children growing up without learning their native tongue.",
    icon: "🌏",
    image: "https://picsum.photos/800/900?random=21",
  },
  {
    title: "Migration & Urbanization",
    description:
      "As many Ainu families moved to urban centers for work or education, the pressure to conform to mainstream Japanese society intensified. In cities, there was little to no space for cultural preservation, and many Ainu concealed their identity due to discrimination.",
    icon: "🏙️",
    image: "https://picsum.photos/800/900?random=22",
  },
  {
    title: "Economic & Political Pressures",
    description:
      "For decades, government policies prioritized economic assimilation over cultural preservation. Ainu people faced systemic discrimination, making Japanese fluency essential for access to jobs, education, and social mobility—further distancing them from their native language.",
    icon: "💼",
    image: "https://picsum.photos/800/900?random=23",
  },
  {
    title: "Language Shift to Dominant Languages",
    description:
      "The dominance of the Japanese language in every aspect of public life, from education to media, led to a language shift. As fewer people used Ainu in daily conversation, intergenerational transmission broke down, and the language fell into disuse.",
    icon: "🗣️",
    image: "https://picsum.photos/800/900?random=24",
  },
  {
    title: "Language Classes & Community Centers",
    description:
      "Local cultural centers, like the Upopoy National Ainu Museum and Park, offer language classes and workshops. These programs are helping a new generation of Ainu (and allies) learn and engage with the language.",
    icon: "🔐",
    image: "https://picsum.photos/800/900?random=20",
  },
];

export const PreservationEfforts = () => {
  const text = "Efforts being made to preserve the language?".split(" ");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="relative w-full py-10 px-6 pt-40 text-center pb-0">
      {text.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: i * 0.05 }}
          className="text-7xl"
        >
          {el + " "}
        </motion.span>
      ))}

      <motion.div
        ref={ref}
        className="w-auto h-1 bg-maroon rounded-full mb-40 mx-0 my-6 "
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-screen-xl mx-auto mb-20">
        {cards.map((card, index) => {
          const direction = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
            key={index}
            className="relative w-full h-[500px] rounded-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, x: -100 * 2, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.175, 0.885, 0.32, 1.275],
              delay: index * 0.1,
            }}
            initialState="rest"
            whileHover="hover"
            animate="rest"
          >
              {/* Background Image */}
              <motion.img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 0.85 },
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Title */}
              <motion.div
                className="absolute top-0 left-0 p-6 z-10 text-left"
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-slate-900 text-7xl font-bold mx-auto">
                  {card.title}
                </h3>
              </motion.div>

              {/* Description */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left bg-maroon rounded-b-xl text-white"
                variants={{
                  rest: { opacity: 0, x: 40 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-md leading-snug text-lightgrey">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PreservationEfforts;
