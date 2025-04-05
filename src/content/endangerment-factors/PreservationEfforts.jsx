import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

// const cards = [
//   {
//     title: "Documentation & Linguistic Research",
//     description: "Scholars and linguists have worked to document the Ainu language, compiling dictionaries, recording elders' speech, and studying its unique grammar and oral traditions.",
//     icon: "⚡",
//     image: "https://picsum.photos/800/900?random=21",
//   },
//   {
//     title: "Language Classes & Community Centers",
//     description: "Local cultural centers, like the Upopoy National Ainu Museum and Park, offer language classes and workshops. These programs are helping a new generation of Ainu (and allies) learn and engage with the language.",
//     icon: "🔐",
//     image: "https://picsum.photos/800/900?random=20",
//   },
//   {
//     title: "Media & Cultural Revitalization",
//     description: "Ainu language is being featured in children’s books, songs, anime, and public signage in Hokkaido. There are even modern music and storytelling efforts that incorporate the language.",
//     icon: "🎨",
//     image: "https://picsum.photos/800/900?random=20",
//   },
//   {
//     title: "Legal Recognition & Support",
//     description: "In 2019, Japan passed a law recognizing the Ainu as an Indigenous people for the first time. While implementation is still evolving, it has created more visibility and funding opportunities for language preservation.",
//     icon: "⚡",
//     image: "https://picsum.photos/800/900?random=21",
//   },
//   {
//     title: "Security",
//     description: "Your data is safe with us.",
//     icon: "🔐",
//     image: "https://picsum.photos/800/900?random=20",
//   },
//   {
//     title: "Design",
//     description: "Sleek and modern UI/UX.",
//     icon: "🎨",
//     image: "https://picsum.photos/800/900?random=20",
//   },
// ]


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
  const [isOpen, setIsOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const text = "Why is this language endangered?".split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="relative w-full py-10 px-6 pt-40 text-center">

      {text.map((el, i) => (
          <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // re-triggers when 50% of it is in view
          transition={{
            duration: 0.7,
            delay: i * 0.05,
          }}
          className="text-7xl"
        >
                {el}{" "}
              </motion.span>
            ))}
          <motion.div
            ref={ref}
            className="w-auto h-1 bg-maroon rounded-full mb-40 mx-32 my-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />


        <div className="grid grid-cols-2 gap-12 w-full max-w-screen-xl mx-auto justify-items-start">

      {cards.map((card, index) => (
        <motion.div
          key={index}
          layout
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          onClick={() => {
            setActiveCard(card)
            setIsOpen(true)
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-lg shadow-lg overflow-hidden w-full h-[500px] cursor-pointer"
        >
          <div className="relative w-full h-full">
            <img src={card.image} alt={card.title} className="rounded-lg w-full h-full object-cover" />
            <div className="absolute top-0 left-0 px-2 py-10 w-20 rounded-br-lg">
              <h3 className="text-slate-900 text-7xl font-semibold">{card.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen p-10">
  <motion.img
    src={activeCard?.image}
    alt={activeCard?.title}
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl object-cover"
  />
  <motion.div
    className="text-white text-left max-w-xl"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
  >
    <h2 className="text-4xl font-bold mb-4">{activeCard?.title}</h2>
    <p className="text-lg opacity-80">{activeCard?.description}</p>
  </motion.div>
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  )
}

export default PreservationEfforts