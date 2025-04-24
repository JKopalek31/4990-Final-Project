import React from 'react'
// import CIContentHeader from 'CIContentHeader'
import { LeftContentHeader } from '../../components/LeftContentHeader'
import  IdentitySignificance  from './IdentitySignificance'
// import CultureCards from './CultureCards'
import InfiniteCardSlider from './InfiniteCardSlider'
import VelocityScrollText from "../../components/VelocityScrollText"
import StoriesMediaLiterature from "./StoriesMediaLiterature"

import culturalExperiance from "../../assets/culturalExperiance.jpeg"



export const CulturalIdentity = () => {
  return (
    // <div>CulturalIdentity</div>
    <section id="cultural-identity" className="h-auto bg-offwhite pt-20 pb-20">
        {/* <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Cultural Identity</h1> */}
        {/* <>         */}
        <LeftContentHeader
          image={culturalExperiance}
          title="Cultural Identity"
          description="Explore the traditions, values, and superstitions of the Ainu people."
        />
        
        <IdentitySignificance/>
        
        <VelocityScrollText/>

        <InfiniteCardSlider/>

        {/* <CultureCards/> */}
        <StoriesMediaLiterature/>
        
    </section>
  )
}

