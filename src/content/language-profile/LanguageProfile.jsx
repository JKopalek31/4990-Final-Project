import React from 'react'

import { RightContentHeader } from '../../components/RightContentHeader'
import { LanguageName } from './LanguageName';
import {AinuLocation} from "./AinuLocation"
import { AinuPopulation } from './AinuPopulation';
import { LinguisticFeatures } from './LinguisticFeatures';
import whoAreThey from '../../assets/whoAreThey.jpg'
import VideoPlayer from '../../components/VideoPlayer.jsx'

export const LanguageProfile = () => {

  return (
    <section id="language-profile" className="h-auto bg-offwhite pt-20 mb-0">
        <RightContentHeader
          image= {whoAreThey}
          title="Language Profile"
          description="Explore the origins, population, and linguistic features of Ainu"
        />
        <LanguageName/>
        <AinuLocation/>
        <AinuPopulation/>
        <LinguisticFeatures/>
        <VideoPlayer/>

    </section>
  )
}
