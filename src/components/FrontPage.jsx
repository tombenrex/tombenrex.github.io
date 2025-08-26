import { motion } from 'framer-motion';

export default function FrontPage({ onEnter }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-white">
      {/* Namn */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-extrabold tracking-wide mb-6"
      >
        Tom Larsson
      </motion.h1>

      {/* Titel */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl text-gray-400 mb-16"
      >
        Frontend Developer
      </motion.h2>

      {/* Knapp */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onEnter}
        className="px-12 py-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
           text-white font-bold text-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
      >
        Check Me Out
      </motion.button>
    </div>
  );
}
