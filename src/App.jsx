// import { useState } from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import FeaturedMov from './components/FeaturedMov/FeaturedMov'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <section className='hero__div'>
        <Hero />
        <FeaturedMov/>
        <Footer/>

      </section>
    </>
  )
}

export default App
