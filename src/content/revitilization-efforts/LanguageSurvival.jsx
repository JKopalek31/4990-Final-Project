import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PulsingBorderCard from '../../components/PulsingBorderCard';

const challenges = [
  'Fluent speakers: Very few remain, mostly elderly. It is considered a critically endangered language by UNESCO.',
  'Intergenerational transmission: There is a generational gap in fluency; many younger Ainu identify culturally but do not speak the language.',
  'Social stigma & historical marginalization: Past policies of assimilation and discrimination have deeply impacted the confidence and opportunity to use the language publicly.',
];

const hopeful = [
  'Increased national and international recognition,',
  'A growing sense of cultural pride among younger Ainu people, and',
  'Continued support from organizations and the government.',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedBlock = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function LanguageSurvival() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24 space-y-12">

      {/* Title */}
      <AnimatedBlock className="text-8xl text-center mb-4 bg-gradient-to-r text-maroon">
        Can Ainu Survive?
      </AnimatedBlock>

      {/* Intro Text */}
      <AnimatedBlock delay={0.1} className="text-lg text-center mb-20 text-slate-700">
        The survival of the Ainu language faces serious challenges:
      </AnimatedBlock>

      {/* Challenges */}
      {challenges.map((text, i) => (
        <AnimatedBlock
          key={`challenge-${i}`}
          delay={i * 0.15}
          className="bg-salmon border border-maroon rounded-lg shadow p-4 text-gray-800 mb-4 text-2xl hover:shadow-lg transition-shadow"
        >
          {text}
        </AnimatedBlock>
      ))}

      {/* "However" Text */}
      <AnimatedBlock delay={0.3} className="text-8xl text-center my-6 text-maroon mt-36 mb-20">
        However, with
      </AnimatedBlock>

      {/* Hopefuls */}
      {hopeful.map((text, i) => (
        <AnimatedBlock
          key={`hopeful-${i}`}
          delay={i * 0.15}
          className="bg-salmon border border-maroon rounded-lg shadow p-4 text-gray-800 mb-4 text-2xl hover:shadow-lg transition-shadow"
        >
          {text}
        </AnimatedBlock>
        
      ))}

      <AnimatedBlock delay={0.3} className="text-8xl text-center my-6 text-maroon mt-36 mb-10">
        <PulsingBorderCard/>
      </AnimatedBlock>
    </div>
  );
}
