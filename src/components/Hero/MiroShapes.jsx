import React from 'react';
import { motion } from 'framer-motion';

// Componente individual para cada forma
const MiroShape = ({ className, initial, animate }) => (
  <motion.div
    className={className}
    initial={initial}
    animate={animate}
    transition={{
      duration: Math.random() * 10 + 5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }}
  />
);

const MiroShapes = () => (
  <>
    {/* Círculo flotante amarillo */}
    <MiroShape
      className="absolute top-1/4 left-10 w-32 h-32 rounded-full z-0"
      initial={{ backgroundColor: '#F1C40F', y: 0, rotate: 0 }}
      animate={{ y: [0, -40, 0], rotate: [0, 20, 0] }}
    />

    {/* Rectángulo rojo oscilante */}
    <MiroShape
      className="absolute bottom-1/4 right-20 w-48 h-8 z-0"
      initial={{ backgroundColor: '#E63946', x: 0, rotate: 45 }}
      animate={{ x: [0, 30, 0], rotate: [45, 65, 45] }}
    />

    {/* Círculo azul que cambia de escala y forma */}
    <MiroShape
      className="absolute top-1/3 right-1/4 w-16 h-16 z-0"
      initial={{ backgroundColor: '#4361EE', scale: 1, borderRadius: '50%' }}
      animate={{ scale: [1, 1.2, 1], borderRadius: ['50%', '10%', '50%'] }}
    />

    {/* Cuadrado turquesa rotante */}
    <MiroShape
      className="absolute bottom-1/3 left-1/4 w-24 h-24 z-0"
      initial={{ backgroundColor: '#2EC4B6', rotate: 0 }}
      animate={{ rotate: [0, 180, 360, 180, 0] }}
    />
  </>
);

export default MiroShapes;
