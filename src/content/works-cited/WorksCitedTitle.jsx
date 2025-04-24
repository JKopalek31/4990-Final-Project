import React, {useRef} from 'react'
import LetterBounce from '../../components/LetterBounce'
import {motion,useInView} from 'framer-motion'

const WorksCitedTitle = ({title}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
    <div className="text-center p-4 ">
    <LetterBounce text={title} className='text-7xl text-slate-800 font-bold mx-1/2'/>
    </div>
        <motion.div
        ref={ref}
        className="w-1/2 h-1 bg-maroon rounded-full mb-10 my-4 mx-auto"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    />
    </>
  )
}

export default WorksCitedTitle