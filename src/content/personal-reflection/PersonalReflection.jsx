import React from 'react'

// import Reflection from "./Reflection.jsx"

import SpringCard from '../endangerment-factors/PreservationEfforts'
import { RightContentHeader } from '../../components/RightContentHeader'
import ImportantIdeas from './ImportantIdeas'
import ThoughtBubbleTitle from './ThoughtsTitle'
import PerspectiveChange from './PerspectiveChange'
import UnderstandingTitle from './UnderstandingTitle'
import DeepUnderstanding from './DeepUnderstanding'
import Conclusion from './Conclusion'
import { ImageEffect } from '../../components/ImageEffect'

import personalReflection from '../../assets/personalReflection.webp'

// • What are the most important ideas or concepts you've learned in this class?
// • In what ways has your thinking or perspective evolved over the course of this class so
// far? Are there any assumptions you’ve had to reconsider or new insights you’ve gained?
// • How has researching your chosen language deepened your understanding of language,
// identity, and culture?


export const PersonalReflection = () => {
  return (
    // <div>PersonalReflection</div>
    <section id="personal-reflection" className="h-auto bg-offwhite pt-20 pb-0 mb-0">
        <RightContentHeader
                image={personalReflection}
                title="Personal Reflection"
                description="Thoughts and ruminations from the class."
              />
        <ThoughtBubbleTitle/>
        <ImportantIdeas/>
        <PerspectiveChange/>
        <UnderstandingTitle/>
        <DeepUnderstanding/>
        <Conclusion/>
        <ImageEffect/>

        <div className="bg-gradient-to-b from-teal-950 via-offwhite to-offwhite h-96"/>



    </section>
  )
}
