import React from 'react'
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import WhatsAppButton from './components/common/WhatsAppButton';


function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />      
    </div>
  )
}

export default App