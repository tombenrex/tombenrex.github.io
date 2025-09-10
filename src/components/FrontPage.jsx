import { motion } from 'framer-motion';
import Button from './Button';

export default function FrontPage({ onEnter }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-white">
      {/* Namn */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bungee-spice-regular text-7xl md:text-8xl font-extrabold tracking-wide mb-6"
      >
        Tom Larsson
      </motion.h1>

      {/* Titel */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mr-dafoe-regular text-5xl text-gray-400 mb-12"
      >
        Developer
      </motion.h2>

      {/* Styled-components knapp */}
      <Button onEnter={onEnter} />
    </div>
  );
}
