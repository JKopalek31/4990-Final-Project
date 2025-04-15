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

// • What are the most important ideas or concepts you've learned in this class?
// • In what ways has your thinking or perspective evolved over the course of this class so
// far? Are there any assumptions you’ve had to reconsider or new insights you’ve gained?
// • How has researching your chosen language deepened your understanding of language,
// identity, and culture?


export const PersonalReflection = () => {
  return (
    // <div>PersonalReflection</div>
    <section id="personal-reflection" className="h-auto bg-offwhite pb-60">
        <RightContentHeader
                image="https://picsum.photos/800/600?random=1"
                title="Personal Reflection"
                description="Explore the origins and traditions of the Ainu people."
              />
        <ThoughtBubbleTitle/>
        <ImportantIdeas/>
      
        <PerspectiveChange/>
        <UnderstandingTitle/>
        <DeepUnderstanding/>
        <Conclusion/>




        <h1>Yo</h1>



    </section>
  )
}
