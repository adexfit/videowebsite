// import { useState } from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import FeaturedMov from './components/FeaturedMov/FeaturedMov'

function App() {
  return (
    <>
      <section className='hero__div'>
        <Hero />
        <FeaturedMov/>

      </section>
    </>
  )
}

export default App
