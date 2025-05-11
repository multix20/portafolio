import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => (
  <motion.div 
    className="text-2xl font-bold"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
      Multi
    </span>
    <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
      X
    </span>
  </motion.div>
);

export default Logo;
