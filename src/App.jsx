import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Service'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div>
     
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App


