import { useState } from 'react'
// import './App.css'
// import Navbar from './components/Navbar.jsx'
import  {Navbar}  from './components/Navbar'
import {Carousel} from './components/Carousel'
import { Title } from './components/Title'
import { CarouselWithSidebar } from './components/CarouselWithSidebar'
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/footer'


import { LanguageProfile } from './content/LanguageProfile'
import { CulturalIdentity } from './content/CulturalIdentity'
import { EndangermentFactors } from './content/EndangermentFactors'
import { RevililizationEfforts } from './content/RevililizationEfforts'
import { PersonalReflection } from './content/PersonalReflection'


function App() {

  return (
    <>
      <Navbar />
      <CarouselWithSidebar />
      <Title />

      <div className="flex size-48">
        <h1>cheese</h1>
      </div>
      <Carousel />
      <h1>Yolo</h1>
      <LanguageProfile />
      <CulturalIdentity />
      <EndangermentFactors />
      <RevililizationEfforts />
      <PersonalReflection />
      <Carousel />

      <Footer/>
    </>
  )
}

export default App
