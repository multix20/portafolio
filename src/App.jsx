import React from 'react'
import Header from './components/common/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/common/Footer'


function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App