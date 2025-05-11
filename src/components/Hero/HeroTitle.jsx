import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle = () => {
  return (
    <div className="text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          dev
        </span>
        <span className="mx-2 text-gray-800">+</span>
        <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
          art
        </span>
      </motion.h1>

      <motion.div 
        className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-orange-400 mx-auto my-6"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      <motion.p 
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Construyo experiencias digitales escalables, dinámicas y optimizadas para un desarrollo de bajo costo.
      </motion.p>
    </div>
  );
};

export default HeroTitle;