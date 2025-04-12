import React from 'react'

import { RightContentHeader } from '../../components/RightContentHeader'
import { LanguageName } from './LanguageName';
import {AinuLocation} from "./AinuLocation"
import { AinuPopulation } from './AinuPopulation';
import { LinguisticFeatures } from './LinguisticFeatures';

export const LanguageProfile = () => {

  return (
    <section id="language-profile" className="h-auto bg-offwhite pt-20 mb-0">
        <RightContentHeader
          image="https://picsum.photos/800/600?random=1"
          title="Language Profile"
          description="Explore the origins and traditions of the Ainu people."
        />
        <LanguageName/>
        <AinuLocation/>
        <AinuPopulation/>
        <LinguisticFeatures/>


    </section>
  )
}
