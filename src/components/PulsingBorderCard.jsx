import { motion } from 'framer-motion';

export default function PulsingBorderCard() {
  const text = "There is cautious optimism that the language can be preserved and revitalized especially if efforts focus on youth engagement and daily life usage.";

  return (
    <motion.div
      className="p-[6px] rounded-xl bg-gradient-to-r from-maroon via-pink-400 to-salmon"
      style={{
        backgroundSize: '300% 300%',
        animation: 'borderMotion 5s linear infinite',
      }}
    >
      <div className="bg-offwhite rounded-xl p-10 text-center text-6xl text-slate-800">
        {text}
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes borderMotion {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}
