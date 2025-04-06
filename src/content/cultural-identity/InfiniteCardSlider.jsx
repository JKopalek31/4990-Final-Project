import React from "react"
import { motion } from "framer-motion"
import ScrollRevolverText from "../../components/VelocityScrollText"

const sampleCards = [
  {
    title: "Spiritual Connection",
    image: "https://picsum.photos/800/600?random=10",
    description: "The Ainu language is deeply tied to spirituality. It’s used in rituals, prayers, and to honor kamuy (spiritual beings), serving as a sacred medium in Ainu cosmology."
  },
  {
    title: "Cultural Expression",
    image: "https://picsum.photos/800/600?random=11",
    description: "Ceremonial songs (yukar), chants, and invocations are traditionally performed in Ainu. These oral traditions express values, myths, and cultural depth that transcend translation."
  },
  {
    title: "Preserving Worldview",
    image: "https://picsum.photos/800/600?random=13",
    description: "Language preserves the Ainu perspective on nature, relationships, and life. It carries knowledge systems that define how the Ainu interpret and interact with the world."
  },
  {
    title: "Symbol of Resistance",
    image: "https://picsum.photos/800/600?random=14",
    description: "Throughout history, speaking Ainu has been an act of resistance against forced assimilation. It symbolizes cultural survival and the fight to retain Indigenous identity."
  },
  {
    title: "Revival & Reclamation",
    image: "https://picsum.photos/800/600?random=15",
    description: "Today, the Ainu language is central to cultural revitalization. Youth are reclaiming it as part of their heritage, using it in education, media, and activism to restore pride and continuity."
  }
]

export default function InfiniteCardSlider({ cards = sampleCards }) {
  return (
    <div style={sliderContainer}>
      {/* <motion.div
        style={sliderTrack}
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div key={index} style={cardStyle}>
            <img src={card.image} alt={card.title} style={imageStyle} />
            <h3 style={titleStyle}>{card.title}</h3>
            <p style={descriptionStyle}>{card.description}</p>
          </div>
        ))}
      </motion.div> */}
      <ScrollRevolverText/>

      <motion.div
            style={sliderTrack}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 30,
            }}
            >
            {[...cards, ...cards].map((card, index) => (
                <div key={index} style={cardStyle}>
                <img src={card.image} alt={card.title} style={imageStyle} />
                <h3 style={titleStyle}>{card.title}</h3>
                <p style={descriptionStyle}>{card.description}</p>
                </div>
            ))}
            </motion.div>
    </div>
  )
}

const sliderContainer = {
  overflow: "hidden",
  width: "100%",
  padding: "100px 0 100px 0",
}

const sliderTrack = {
  display: "flex",
  gap: "20px",
  width: "fit-content",
  marginTop: "100px",
  marginBottom: "250px"

}

const cardStyle = {
  minWidth: 400,
  maxWidth: 500,
//   background: "#630000",
// background:  "#oooooo",
background: "#EEEBDD",
  borderRadius: 12,
  
  padding: 24,
//   boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
border: "2px solid #630000", // golden border

  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const imageStyle = {
  width: "100%",
  height: 300,
  objectFit: "cover",
  borderRadius: 8,
  marginBottom: 12,
}

const titleStyle = {
  fontSize: 28,
  margin: 0,
  marginBottom: 8,
  fontWeight: "bold",
  textAlign: "center",
  color: "#1e293b"
}

const descriptionStyle = {
  fontSize: 20,
  textAlign: "left",
  color: "#475569",
  padding: "8px 40px",
} 
