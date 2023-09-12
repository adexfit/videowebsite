import React, { useState, useEffect } from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import FeaturedMov from './components/FeaturedMov/FeaturedMov'
import Footer from './components/Footer/Footer'

function App() {
  const [videoData, setvideoData] = useState(0)

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated")
        .then(res => res.json())
        .then(data => setvideoData(data))
    }, [])

  return (
    <>
      <section className='hero__div'>
        <Hero />
        <FeaturedMov/>
        <Footer/>

        {/* <div>
          <pre>{JSON.stringify(videoData, null, 2)}</pre>
        </div> */}

      </section> 

    </>
  )
}

export default App
