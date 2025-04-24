import React, { useState } from "react"
import { motion } from "framer-motion"
import MotionTitle from "../../components/MotionTitle"
import PulsingBorderCardChildren from "../../components/PulsingBorderCardChildren"
import ainuYukarimg from "../../assets/ainuYukarimg.jpg"
import ainuUepeker from "../../assets/ainuUepeker.jpg"
import ainuUpopo from "../../assets/ainuUpopo.jpg"
import ainuMedia from "../../assets/ainuMedia.webp"
import ainuMuseum from "../../assets/ainuMuseum.jpg"
import ainuClass from "../../assets/ainuClass.jpeg"

/** 
 * FlippableCard: 
 * - On mobile (below `sm`), w-full/h-auto
 * - On sm+, fixes width & height
 * - 3D flip on tap/click
 */
function FlippableCard({ frontImage, frontTitle, backTitle, backContent }) {
  const [flipped, setFlipped] = useState(false)
  const handleFlip = () => setFlipped(!flipped)

  return (
    <div
      onClick={handleFlip}
      // Perspective on container
      style={{ perspective: "1000px" }}
      className="
        relative
        cursor-pointer
        w-full h-auto
        sm:w-full sm:h-[28rem]
        flex-shrink-0
      "
    >
      <div className="w-full h-1 sm:w-0 sm:h-0 bg-maroon my-8"/>
      <motion.div
        // This is your 3D wrapper
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* FRONT SIDE */}
        <div
          className="
            absolute
            inset-0
            w-full h-full
            backface-hidden
            rounded-3xl
            shadow-lg
            bg-gradient-to-tr
            from-salmon
            to-offwhite
            flex
            flex-col
            
          "
          style={{ minHeight: "100%" }}
        >
          <img
            src={frontImage}
            alt={frontTitle}
            className="
              w-full
              h-52
              sm:h-7/8
              object-cover
              rounded-t-2xl
            "
          />
          <div className="p-2 flex items-center justify-center">
            <h2 className="text-5xl sm:text-4xl font-bold text-center text-slate-800 leading-tight">
              {frontTitle}
            </h2>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="
            absolute
            inset-0
            w-full 
            h-52
            bg-white
            rounded-3xl
            shadow-lg
            rotate-y-180
            backface-hidden
            flex
            p-2
            flex-col
            border-4 
          border-maroon
          "
          style={{
            transform: "rotateY(180deg)",
            minHeight: "100%",
          }}
        >
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            {backTitle && (
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-maroon">
                {backTitle}
              </h3>
            )}
            <p className="text-base sm:text-lg text-slate-700 leading-snug">
              {backContent}
            </p>
          </div>
          <p className="text-xs text-gray-500 text-center">
            Tap to flip
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function AinuCultureFlipShowcase() {
  const cards = [
    {
      frontImage: ainuYukarimg,
      frontTitle: "Epic Poems (Yukar)",
      backTitle: "Heroic Narratives",
      backContent:
        "Yukar are long narrative poems—half song, half storytelling—performed by the Indigenous Ainu of northern Japan (Hokkaidō) and Sakhalin. A single performance can last from a few minutes to several hours and relates the adventures of gods (kamuy), culture heroes, animals, or legendary humans.",
    },
    {
      frontImage: ainuUepeker,
      frontTitle: "Folk Tales (Uepeker)",
      backTitle: "Moral Lessons",
      backContent:
        "Uepeker are short, spoken Ainu folktales—everyday prose stories told in a natural voice rather than chanted. Lasting only a few minutes, each tale relates humorous trickster exploits, place-name legends, or moral fables drawn from village life and encounters with animal spirits or minor deities.",
    },
    {
      frontImage: ainuUpopo,
      frontTitle: "Communal Songs (Upopo)",
      backTitle: "Repetitive Chants",
      backContent:
        "Upopo are short Ainu communal songs—rhythmic, repetitive chants performed while beating time on a wooden tray, clapping, or dancing in a circle. Each piece lasts only seconds to a few minutes and features repeated vocables or brief refrains, serving both as work songs and as social‐bonding music at gatherings and rituals.",
    },
    {
      frontImage: ainuClass,
      frontTitle: "Language Education",
      backTitle: "Modern Efforts",
      backContent:"Community language nests immerse preschoolers in Ainu play, evening classes guide parents through everyday phrases, and online courses pair video drills with live tutors. Together, childcare, adult study, and digital learning are rebuilding a speaker base across generations.",
    },
    {
      frontImage: ainuMedia,
      frontTitle: "Radio & Children’s Books",
      backTitle: "Media Initiatives",
      backContent:
        "Radio shows weave Ainu phrases into daily news, museum workshops let families hear the language live, and new picture books tuck Ainu words into bedtime. Together, broadcast, culture, and kids’ media are nudging the language back into homes and public life.",
    },
    {
      frontImage: ainuMuseum,
      frontTitle: "Language Courses & Events",
      backTitle: "Community Hubs",
      backContent:
        "Local circles at community centers and weekend gatherings at Upopoy Museum keep Ainu alive. Shared songs, crafts, and casual language chats turn every meeting into a living classroom. These grassroots gatherings bring together elders and young people, letting the language flow naturally across generations.",
    },
  ]

  return (
    <div className="mt-40">
      <MotionTitle />

      <section className="py-10 bg-offwhite mb-40">
        <div className="max-w-screen-xl mx-auto px-2 text-center mt-16">
          {/* 1 column below sm (640px), 2 col at sm, 3 at lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-96 sm:gap-8 mx-auto mb-4">
            {cards.map((card, index) => {
              const fromLeft = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ x: fromLeft ? -80 : 80, opacity: 0, scale: 0.8 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FlippableCard
                    frontImage={card.frontImage}
                    frontTitle={card.frontTitle}
                    backTitle={card.backTitle}
                    backContent={card.backContent}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
