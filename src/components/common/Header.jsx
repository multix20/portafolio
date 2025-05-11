import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll + sección activa con debounce
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 30);

        const sections = ['hero', 'projects', 'services', 'about', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Servicios', id: 'services' },
    { name: 'Sobre mí', id: 'about' },
    { name: 'Contacto', id: 'contact' }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        className={`py-4 px-6 fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto flex justify-between items-center">
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

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`font-medium relative px-2 py-1 transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-indigo-600' 
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-orange-400"
                    initial={false}
                    animate={{ 
                      width: activeSection === item.id ? '100%' : '0%',
                      opacity: activeSection === item.id ? 1 : 0
                    }}
                    whileHover={{ 
                      width: '100%', 
                      opacity: 1 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button 
            className="block md:hidden"
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </nav>
      </motion.header>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <MobileMenu 
          navItems={navItems}
          activeSection={activeSection}
          handleNavClick={handleNavClick}
        />
      )}
    </>
  );
};

export default Header;
