import React from 'react'
import { PreservationEfforts } from './PreservationEfforts'
import { RightContentHeader } from '../../components/RightContentHeader'

export const EndangermentFactors = () => {
  return (
    // <div>EndangermentFactors</div>
    <section id="endangerment-factors" className="h-auto bg-offwhite pt-20">
                {/* <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Engangerment Factors</h1> */}
                <RightContentHeader
                          image="https://picsum.photos/800/600?random=1"
                          title="Engangerment Factors"
                          description="Explore the origins and traditions of the Ainu people."
                        />
                <PreservationEfforts/>
    </section>
    )
}
