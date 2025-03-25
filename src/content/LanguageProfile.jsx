import React from 'react'
import { ContentHeader } from '../components/ContentHeader'

export const LanguageProfile = () => {
  return (
    <section id="language-profile" className="h-screen bg-offwhite pt-10">
        <ContentHeader
          image="https://picsum.photos/800/600?random=1"
          title="Language Profile"
          description="Explore the origins and traditions of the Ainu people."
        />
        <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Language Profile</h1>
    </section>
  )
}
