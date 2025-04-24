import React from 'react'
import { LeftContentHeader } from '../../components/LeftContentHeader'
import { RevitalizationPrograms } from './RevitilizationPrograms'
import {OrganizationsSupport} from './OrginizationsSupport'
import LanguageSurvival from './LanguageSurvival'
import ainuPark from '../../assets/ainuPark.jpg'

export const RevililizationEfforts = () => {
  return (
    // <div>RevililizationEfforts</div>
    <section id="revitalization-efforts" className="h-auto bg-offwhite pt-20 pb-20">
      {/* <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Revitalization Efforts</h1> */}
      <LeftContentHeader
        image={ainuPark}
        title="Revitilization Efforts"
        description="Explore the efforts to preserve Ainu people and their culture."
      />
      <RevitalizationPrograms/>
      <OrganizationsSupport/>
      <LanguageSurvival/>

      {/* <div className="bg-amber-200">Are there revitalization programs</div> */}
      {/* <div className="bg-teal-200">Governmental or non-governmental organizations involved in language preservation</div> */}
      {/* <div className="bg-purple-200">Can the language survive? What are the challenges?</div> */}




    </section>
  )
}
