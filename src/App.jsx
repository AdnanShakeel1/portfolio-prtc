import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <><div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-400 selection:text-cyan-900'>
    </div>
      <Navbar/>
      <Hero/>
      <About/>
      <Technology/>
      <Experience/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
