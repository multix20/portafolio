import React, { useState, useEffect } from 'react';

const STATES = ['ice', 'water', 'vapor'];

const Logo = () => {
  const [phase, setPhase] = useState('ice');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => {
        const index = STATES.indexOf(prev);
        return STATES[(index + 1) % STATES.length];
      });
    }, 3000); // Cambia de estado cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const getClasses = () => {
    switch (phase) {
      case 'ice':
        return 'bg-gradient-to-br from-blue-200 via-white to-blue-300 text-blue-800 shadow-inner';
      case 'water':
        return 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white animate-pulse shadow-md';
      case 'vapor':
        return 'bg-gradient-to-t from-gray-200 via-white to-transparent text-gray-600 opacity-70 blur-sm';
      default:
        return '';
    }
  };

  return (
    <div className="relative group">
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm font-orbitron transition-all duration-[2000ms] ease-in-out ${getClasses()}`}
      >
      dev&Art
      </div>

      {/* Tooltip al hacer hover */}
      <div
        className={`absolute left-full ml-3 whitespace-nowrap text-white bg-gray-800 px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        Multix Web Solutions
      </div>
    </div>
  );
};

export default Logo;
