import React, { useState, useEffect } from 'react';
import { Star, Moon, Sun, Send, ChevronUp, Heart } from 'lucide-react';

const MiroFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation effect
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setShowPopup(true);
      setEmail('');
      
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Miro-inspired floating elements
  const MiroElement = ({ className, style }) => {
    return (
      <div 
        className={`absolute ${className}`}
        style={style}
      />
    );
  };

  return (
    <footer className="relative overflow-hidden pt-16 pb-10 font-sans">
      {/* Miró-inspired background with primary colors */}
      <div className="absolute inset-0 bg-blue-50 z-0">
        {/* Abstract animated shapes inspired by Miró */}
        <MiroElement 
          className="w-40 h-40 rounded-full bg-yellow-400"
          style={{ 
            top: '15%', 
            left: '10%',
            opacity: 0.8,
            transform: `translateY(${Math.sin(Date.now() / 2000) * 10}px)`
          }} 
        />
        <MiroElement 
          className="w-32 h-32 rounded-full bg-red-500"
          style={{ 
            bottom: '20%', 
            right: '15%',
            opacity: 0.7,
            transform: `translateX(${Math.cos(Date.now() / 1800) * 15}px)`
          }} 
        />
        <MiroElement 
          className="w-64 h-24 bg-blue-400"
          style={{ 
            top: '60%', 
            left: '25%',
            opacity: 0.6,
            borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%'
          }} 
        />
        
        {/* Miro-inspired line drawing with SVG */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q150,180 300,100 T600,100 T900,100 T1200,100 T1500,100" fill="none" stroke="black" strokeWidth="3" />
          <path d="M900,200 Q750,250 600,200 T300,200 T0,200" fill="none" stroke="black" strokeWidth="2" />
        </svg>
        
        {/* Star shapes */}
        <MiroElement 
          className="w-8 h-8 bg-yellow-300"
          style={{ 
            top: '30%', 
            left: '80%',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }} 
        />
        <MiroElement 
          className="w-12 h-12 bg-red-400"
          style={{ 
            top: '70%', 
            left: '60%',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }} 
        />
        <MiroElement 
          className="w-6 h-6 bg-black"
          style={{ 
            top: '25%', 
            left: '30%',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }} 
        />
        
        {/* Interactive Miró element that follows cursor with delay */}
        <MiroElement 
          className="w-20 h-20 rounded-full bg-red-600 mix-blend-multiply"
          style={{ 
            top: mousePosition.y * 0.3, 
            left: mousePosition.x * 0.3,
            opacity: 0.4,
            transition: 'top 1s ease-out, left 1s ease-out',
          }} 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Scroll to top button */}
        <div className="absolute right-8 top-0 transform -translate-y-1/2">
          <button 
            onClick={scrollToTop}
            className="bg-yellow-400 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-black hover:bg-yellow-300"
          >
            <ChevronUp size={24} />
          </button>
        </div>

        {/* Quote Section */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block">
            <div className="text-4xl mb-2 font-bold italic">
              "Trabajo como un jardinero o un viñador. Las cosas vienen lentamente. Mi vocabulario de formas, por ejemplo, no lo descubrí de una vez."
            </div>
            <div className="text-blue-800 text-sm">— Joan Miró</div>
          </div>
        </div>

        {/* Subscribe Section with Miró style */}
        <div className={`max-w-md mx-auto mb-12 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} border-4 border-black relative overflow-hidden`}>
          {/* Miró-inspired decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-6 left-6 w-4 h-4 bg-blue-600 rounded-full"></div>
          
          <div className="text-center mb-4 relative">
            <h3 className="text-xl font-bold mb-2">Mantente Conectado al Arte</h3>
            <p>Suscríbete para inspirarte con las últimas creaciones</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 relative">
            <div className="flex-1 border-2 border-black rounded-lg flex items-center pl-3 overflow-hidden bg-blue-50">
              <Moon className="text-blue-800 mr-2" size={18} />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full py-3 px-1 focus:outline-none"
              />
            </div>
            <button 
              onClick={handleSubscribe}
              className="group relative px-6 py-3 overflow-hidden rounded-lg bg-red-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-600 border-2 border-black"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/10"></div>
              <div className="relative flex items-center justify-center">
                <span>Unirse</span>
                <Send size={16} className="ml-2" />
              </div>
            </button>
          </div>
        </div>

        {/* Footer Links & Social Media with Miró style */}
        <div className={`flex flex-col md:flex-row justify-between items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col mb-6 md:mb-0">
            <div className="font-bold text-2xl mb-2 relative inline-block">
              Joan Artista
              <span className="absolute -top-3 -right-6 text-red-500 text-3xl">★</span>
            </div>
            <div className="text-blue-800 text-sm">Creador & Soñador</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 md:mb-0">
            <a href="#" className="text-black hover:text-red-500 transition-colors font-medium">Inicio</a>
            <a href="#" className="text-black hover:text-blue-600 transition-colors font-medium">Obras</a>
            <a href="#" className="text-black hover:text-yellow-500 transition-colors font-medium">Proceso</a>
            <a href="#" className="text-black hover:text-green-600 transition-colors font-medium">Contacto</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-300 transition-all duration-300 border-2 border-black">
              <Star className="text-black" size={20} />
            </a>
            <a href="#" className="bg-red-500 p-2 rounded-full hover:bg-red-400 transition-all duration-300 border-2 border-black">
              <Moon className="text-white" size={20} />
            </a>
            <a href="#" className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition-all duration-300 border-2 border-black">
              <Sun className="text-white" size={20} />
            </a>
          </div>
        </div>
        
        {/* Copyright with Miró style */}
        <div className={`text-center mt-10 text-black text-sm transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block">
            © {new Date().getFullYear()} Inspirado en el universo de Joan Miró.
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500"></span>
          </div>
          <div className="mt-4 flex items-center justify-center">
            Creado con <Heart size={12} className="mx-1 text-red-500" /> y surrealismo
          </div>
        </div>
      </div>
      
      {/* Success Popup with Miró style */}
      <div className={`fixed bottom-8 right-8 bg-white rounded-lg shadow-xl p-4 transform transition-all duration-300 ${showPopup ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'} z-50 border-2 border-black`}>
        <div className="flex items-center text-black">
          <Star className="w-5 h-5 mr-2 text-yellow-500 fill-current" />
          <span>¡Te has unido al universo Miró!</span>
        </div>
      </div>
    </footer>
  );
};

export default MiroFooter;