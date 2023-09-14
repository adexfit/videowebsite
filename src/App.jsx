import React, { useState, useEffect } from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import FeaturedMov from './components/FeaturedMov/FeaturedMov'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <>
      <section className='hero__div'>
        <Hero />
        <FeaturedMov/>
        <Dashboard/>
        <Footer/>


        <section>

        </section>
      </section> 



    </>
  )
}

export default App
