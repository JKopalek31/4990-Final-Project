import React from 'react'
// import CIContentHeader from 'CIContentHeader'
import { LeftContentHeader } from '../../components/LeftContentHeader'
import  IdentitySignificance  from './IdentitySignificance'
import CultureCards from './CultureCards'
import InfiniteCardSlider from './InfiniteCardSlider'
import VelocityScrollText from "../../components/VelocityScrollText"

import RecordWithSoundBubble from "./CultureCardsTitle"


export const CulturalIdentity = () => {
  return (
    // <div>CulturalIdentity</div>
    <section id="cultural-identity" className="h-auto bg-offwhite pt-20 pb-20">
        {/* <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Cultural Identity</h1> */}
        {/* <>         */}
        <LeftContentHeader
          image="https://picsum.photos/800/600?random=2"
          title="Cultural Identity"
          description="Explore the origins and traditions of the Ainu people."
        />
        
        <IdentitySignificance/>
        
        <VelocityScrollText/>

        <InfiniteCardSlider/>

        {/* <RecordWithSoundBubble/> */}
        

        {/* <div className="h-96x bg-amber-300">Oral traditions, literature, or media</div> */}

        {/* <CultureCards/> */}
        
    </section>
  )
}

