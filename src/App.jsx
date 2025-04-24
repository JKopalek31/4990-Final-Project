import { useState } from 'react'
import './App.css'

import  { Navbar }  from './components/Navbar'
// import {Carousel} from './components/Carousel'
import Carousel from './components/Carousel'
import { Title } from './components/Title'
import { CarouselWithSidebar } from './components/CarouselWithSidebar'
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { SmoothScrollAinu } from './components/SmoothScrollAinu';
// import {ContentHeader} from './components/ContentHeader';

import AinuHero from './components/AinuHero'

import { LanguageProfile } from './content/language-profile/LanguageProfile'
import { CulturalIdentity } from './content/cultural-identity/CulturalIdentity'
import { EndangermentFactors } from './content/endangerment-factors/EndangermentFactors'
import { RevililizationEfforts } from './content/revitilization-efforts/RevililizationEfforts'
import { PersonalReflection } from './content/personal-reflection/PersonalReflection'
import { ImageEffect } from './components/ImageEffect'
import { WorksCited } from './content/works-cited/WorksCited'



function App() {

  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* <CarouselWithSidebar /> */}

      <AinuHero/>
      <Title />
      <SmoothScrollAinu/>      

      <LanguageProfile />
      <CulturalIdentity />    
      <EndangermentFactors />
      <RevililizationEfforts />
      <PersonalReflection />

      <WorksCited/>

      <Footer/>
    </div>
  )
}

export default App
