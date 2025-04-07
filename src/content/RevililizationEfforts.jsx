import React from 'react'
import { LeftContentHeader } from '../components/LeftContentHeader'

export const RevililizationEfforts = () => {
  return (
    // <div>RevililizationEfforts</div>
    <section id="revitalization-efforts" className="h-screen bg-offwhite pt-20 pb-40">
      {/* <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Revitalization Efforts</h1> */}
      <LeftContentHeader
        image="https://picsum.photos/800/600?random=1"
        title="Revitilization Efforts"
        description="Explore the origins and traditions of the Ainu people."
      />

      <div className="bg-amber-200">Are there revitalization programs</div>
      <div className="bg-teal-200">Governmental or non-governmental organizations involved in language preservation</div>
      <div className="bg-purple-200">Can the language survive? What are the challenges?</div>




    </section>
  )
}
