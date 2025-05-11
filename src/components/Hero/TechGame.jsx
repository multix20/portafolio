import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql,
  SiTableau, SiLinux, SiGithub, SiFirebase
} from 'react-icons/si';

// Tecnologías disponibles en el juego
const techIcons = [
  { id: 'html', icon: <SiHtml5 size={40} title="HTML5" />, color: 'text-orange-500' },
  { id: 'css', icon: <SiCss3 size={40} title="CSS3" />, color: 'text-blue-600' },
  { id: 'js', icon: <SiJavascript size={40} title="JavaScript" />, color: 'text-yellow-400' },
  { id: 'react', icon: <SiReact size={40} title="React" />, color: 'text-cyan-500' },
  { id: 'tailwind', icon: <SiTailwindcss size={40} title="Tailwind CSS" />, color: 'text-teal-400' },
  { id: 'node', icon: <SiNodedotjs size={40} title="Node.js" />, color: 'text-green-600' },
  { id: 'mongo', icon: <SiMongodb size={40} title="MongoDB" />, color: 'text-green-500' },
  { id: 'postgres', icon: <SiPostgresql size={40} title="PostgreSQL" />, color: 'text-blue-500' },
  { id: 'tableau', icon: <SiTableau size={40} title="Tableau" />, color: 'text-indigo-600' },
  { id: 'linux', icon: <SiLinux size={40} title="Linux" />, color: 'text-gray-800' },
  { id: 'github', icon: <SiGithub size={40} title="GitHub" />, color: 'text-black' },
  { id: 'firebase', icon: <SiFirebase size={40} title="Firebase" />, color: 'text-yellow-500' },
];

function TechGame({ miroColors, darkMode }) {
  const [target, setTarget] = useState('react');
  const [message, setMessage] = useState('');
  const controls = useAnimationControls();

  const triggerExplosion = async () => {
    await controls.start({
      scale: [1, 1.2, 0.9, 1.1, 1],
      transition: { duration: 0.5 }
    });

    if (window.animateTitle) {
      window.animateTitle();
    }
  };

  const handleClick = (id) => {
    if (id === target) {
      setMessage('¡Correcto! 🚀');
      triggerExplosion();
      setTimeout(() => {
        setTarget(getRandomId());
        setMessage('');
      }, 1000);
    } else {
      setMessage('¡Inténtalo otra vez!');
    }
  };

  const getRandomId = () => {
    const ids = techIcons.map(icon => icon.id);
    return ids[Math.floor(Math.random() * ids.length)];
  };

  return (
    <motion.div 
      className="mt-16 p-6 rounded-xl max-w-xl mx-auto shadow-xl relative"
      style={{ backgroundColor: darkMode ? '#2D3748' : '#ffffff' }}
      animate={controls}
    >
      <motion.div
        className="absolute -top-6 -left-6 w-12 h-12 rounded-full"
        style={{ backgroundColor: miroColors.primary }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute -bottom-4 -right-4 w-8 h-8"
        style={{ backgroundColor: miroColors.accent1 }}
        animate={{ rotate: [0, 360], borderRadius: ['0%', '50%', '0%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <h2 className="text-xl font-bold mb-4" style={{ color: darkMode ? '#E2E8F0' : '#1A202C' }}>
        ¿Dónde está <span style={{ color: miroColors.primary }} className="uppercase">{target}</span>?
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-4">
        {techIcons.map(({ id, icon, color }) => (
          <motion.button
            key={id}
            onClick={() => handleClick(id)}
            whileHover={{
              scale: 1.2,
              boxShadow: `0 0 15px ${id === target ? miroColors.secondary : 'rgba(0,0,0,0.1)'}`
            }}
            animate={id === target ? {
              y: [0, -8, 0],
              transition: { repeat: Infinity, repeatType: "reverse", duration: 2 }
            } : {}}
            whileTap={{ rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-3 rounded-full shadow-md ${color} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            aria-label={`Icono de tecnología ${id}`}
            tabIndex={0}
            style={{
              outline: 'none',
              filter: id === target ? `drop-shadow(0 0 4px ${miroColors.secondary})` : 'none'
            }}
          >
            {icon}
          </motion.button>
        ))}
      </div>

      {message && (
        <motion.p
          className="mt-4 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: message.includes("Correcto") ? miroColors.accent2 : miroColors.primary }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
}

export default TechGame;
