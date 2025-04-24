import React from 'react'
import ImageCitations from './ImageCitations'
import TextCitations from './TextCitations'
import WorksCitedTitle from './WorksCitedTitle'
import LetterBounce from '../../components/LetterBounce'

export const WorksCited = () => {
  return (
    <section id="works-cited" className="h-auto bg-offwhite pb-28 pt-10">
        {/* <h1 className="text-2xl px-2 md:text-4xl lg:text-6xl font-bold text-maroon text-left">Works Cited</h1>
   
        <h1>HERO2: Four women perform an Ainu ritual at the Symbolic Space for Ethnic Harmony, also known as Upopoy, in Shiraoi, Hokkaido, in 2020. | FOUNDATION FOR AINU CULTURE</h1>
        <h1>SOURCE: https://www.japantimes.co.jp/2022/02/21/special-supplements/efforts-underway-save-ainu-language-culture/</h1>
        <h1>____________</h1>
        <h1>HERO3: The Ainu were assimilated into Japanese society and their traditional tattoos and other customs banned (Credit: Michele and Tom Grimm/Alamy)</h1>
        <h1>SOURCE: https://www.bbc.com/travel/article/20200519-japans-forgotten-indigenous-people</h1>
        <h1>____________</h1>
        <h1>HERO4: NOT PROVIDED</h1>
        <h1>SOURCE: https://www.tokyoweekender.com/art_and_culture/japanese-culture/ainu-hokkaido-tourism/</h1>
        <h1>____________</h1> */}

        {/* <div className="bg-gradient-to-b from-teal-950 to-offwhite h-96"/> */}

        <WorksCitedTitle title="Works Cited"/>
        <TextCitations/>

        <WorksCitedTitle title="Image Citations"/>
        <ImageCitations/>


    </section>
  )
}
