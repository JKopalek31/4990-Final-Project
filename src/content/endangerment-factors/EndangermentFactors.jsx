import React from 'react'
import { PreservationEfforts } from './PreservationEfforts'
import { RightContentHeader } from '../../components/RightContentHeader'
import EndangermentReasons from './EndangermentReasons'
import ainuEndangerment from "../../assets/ainuEndangerment.webp"

export const EndangermentFactors = () => {
  return (
    // <div>EndangermentFactors</div>
    <section id="endangerment-factors" className="h-auto bg-offwhite pt-20 pb-4">
                {/* <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Engangerment Factors</h1> */}
                <RightContentHeader
                          image= {ainuEndangerment}
                          title="Engangerment Factors"
                          description="Explore the history and plight of the Ainu people."
                        />
                <PreservationEfforts/>

                <EndangermentReasons/>
    </section>
    )
}
