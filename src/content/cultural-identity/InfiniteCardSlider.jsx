import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

import ainuGods from "../../assets/ainuGods.jpg"
import ainuStoryLine from "../../assets/ainuStoryLine.jpg"
import ainuWorldView from "../../assets/ainuWorldView.avif"
import ainuSymbol from "../../assets/ainuSymbol.jpg"
import ainuRevital from "../../assets/ainuRevital.webp"


const sampleCards = [
  {
    title: "Spiritual Connection",
    image: ainuGods,
    description: "The Ainu language is deeply tied to spirituality."
  },
  {
    title: "Cultural Expression",
    image: ainuStoryLine,
    description: "Ceremonial songs (yukar), chants, and invocations."
  },
  {
    title: "Preserving Worldview",
    image: ainuWorldView,
    description: "Language preserves the Ainu perspective."
  },
  {
    title: "Symbol of Resistance",
    image: ainuSymbol,
    description: "Speaking Ainu has been an act of resistance."
  },
  {
    title: "Revival & Reclamation",
    image: ainuRevital,
    description: "Today, the Ainu language is central to revitalization."
  }
]

/**
 * InfiniteCardSlider (Triple-copy / start-in-middle):
 * - Copies: A, B, C.
 * - We measure A's width => call it widthA.
 * - Start at x = -widthA => user sees chunk B initially.
 * - Animate to x = -2*widthA => chunk C is fully in view, 
 *   then repeat, seamlessly jumping back to x = -widthA 
 *   because B, C, A line up for an infinite loop.
 * - A tween-based approach => often smoother than manual frame updates.
 */
export default function InfiniteCardSlider() {
  const measureRef = useRef(null)
  const [widthA, setWidthA] = useState(0)

  // We'll build triple copies: A, B, C
  // We'll measure the width of chunk A
  // B and C are identical sets of cards.
  // Because we need to "start in the middle," 
  // the user sees chunk B from the beginning.
  
  useEffect(() => {
    if (measureRef.current) {
      setWidthA(measureRef.current.offsetWidth)
    }
  }, [])

  // If not measured yet, just render a static layout so measureRef can do its job
  if (!widthA) {
    return (

      <div style={outerContainer}>

        {/* We'll just show the triple copies, no motion, so measureRef can measure A */}
        <div style={trackStyle}>
          <div ref={measureRef} style={chunkStyle}>
            {sampleCards.map((card, i) => (
              <Card key={`A-${i}`} card={card} />
            ))}
          </div>

          <div style={chunkStyle}>
            {sampleCards.map((card, i) => (
              <Card key={`B-${i}`} card={card} />
            ))}


          <div style={chunkStyle}>
            {sampleCards.map((card, i) => (
              <Card key={`C-${i}`} card={card} />
            ))}
          </div>
        </div>
      </div>
      // </div>
    )
  }

  // Once we know widthA, we can do a tween from x = -widthA to x = -2*widthA
  return (
    <div style={outerContainer}>
      <motion.div
        style={trackStyle}
        initial={{ x: -widthA }}          // Start with chunk B in view
        animate={{ x: -2 * widthA }}      // Scroll until chunk C is in view
        transition={{
          duration: 25,                   // Adjust for speed (lower => faster)
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        {/* Chunk A (measured by measureRef) */}
        <div ref={measureRef} style={chunkStyle}>
          {sampleCards.map((card, i) => (
            <Card key={`A-${i}`} card={card} />
          ))}
        </div>
        
        {/* Chunk B */}
        <div style={chunkStyle}>
          {sampleCards.map((card, i) => (
            <Card key={`B-${i}`} card={card} />
          ))}
        </div>

        {/* Chunk C */}
        <div style={chunkStyle}>
          {sampleCards.map((card, i) => (
            <Card key={`C-${i}`} card={card} />
          ))}
        </div>
      </motion.div>
    </div>
    // </div>
  )
}

/** Sub-component for a single card, with uniform spacing via marginRight: 20 */
function Card({ card }) {
  return (
    <div style={cardStyle}>
      <img src={card.image} alt={card.title} style={imageStyle} />
      <h3 style={titleStyle}>{card.title}</h3>
      <p style={descriptionStyle}>{card.description}</p>
    </div>
  )
}

/* -- Inline Styles -- */

const outerContainer = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "20px 0"
}

const trackStyle = {
  display: "inline-flex",
  whiteSpace: "nowrap"
}

// Each chunk is a row of the original cards
const chunkStyle = {
  display: "inline-flex"
}

// Uniform spacing between cards
const cardStyle = {
  minWidth: 400,
  maxWidth: 500,
  marginRight: 20,
  background: "#EEEBDD",
  borderRadius: 12,
  padding: 24,
  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
  border: "2px solid #630000",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const imageStyle = {
  width: "100%",
  height: 300,
  objectFit: "cover",
  borderRadius: 8,
  marginBottom: 12
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
  padding: "8px 40px"
}
