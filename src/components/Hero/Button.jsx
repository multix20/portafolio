import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente de botón reutilizable con efectos animados
 * @param {Object} props - Propiedades del componente
 * @param {string} props.text - Texto del botón
 * @param {string} props.ariaLabel - Etiqueta de accesibilidad
 * @param {string} props.primaryColor - Color principal del botón
 * @param {string} props.secondaryColor - Color secundario para efectos hover
 * @param {Object} props.style - Estilos adicionales
 * @param {Function} props.onClick - Función al hacer clic
 * @param {React.ReactNode} props.children - Contenido alternativo al texto
 */
function Button({
  text,
  ariaLabel,
  primaryColor = '#E63946',
  secondaryColor = '#4361EE',
  style = {},
  onClick,
  children,
  className = '',
  ...props
}) {
  return (
    <motion.button
      aria-label={ariaLabel || text}
      className={`py-3 px-8 rounded-full relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${className}`}
      style={{ 
        backgroundColor: primaryColor,
        color: 'white',
        ...style
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 10px 25px ${primaryColor}66` // 40% opacity
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children || text}</span>
      <motion.span 
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{ backgroundColor: secondaryColor }}
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ type: "tween" }}
      />
    </motion.button>
  );
}

export default Button;