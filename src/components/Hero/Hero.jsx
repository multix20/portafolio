// === Hero.jsx ===
import React from "react";
import HeroTitle from "./HeroTitle";
import CanvasTrail from "./CanvasTrail";
import MiroShapes from "./MiroShapes";
import TechGame from "./TechGame";


// Paleta de colores estilo Joan Miró
const miroColors = {
  primary: '#E63946',    // Rojo
  secondary: '#F1C40F',  // Amarillo
  accent1: '#4361EE',    // Azul
  accent2: '#2EC4B6',    // Turquesa
  accent3: '#000000',    // Negro
  background: '#F1FAEE'  // Fondo claro
};

// Puedes agregar más adelante un hook o toggle para darkMode si lo necesitas
const darkMode = false;

function Hero() {
  return (
    <section className="py-20 relative overflow-hidden min-h-screen" style={{ backgroundColor: miroColors.background }}>
      <CanvasTrail />
      <MiroShapes />
      <div className="container mx-auto text-center px-4 relative z-20">
        <HeroTitle />
        <TechGame miroColors={miroColors} darkMode={darkMode} />
      </div>
    </section>
  );
}

export default Hero;
