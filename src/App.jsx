import React, { useState, useEffect } from 'react'
import './App.css'
import FeaturedMov from './components/FeaturedMov/FeaturedMov'
import Dashboard from './components/Dashboard/Dashboard'
//import { Route, Routes } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [videoData, setvideoData] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {  
    setIsLoading(true)

    fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=21d1982e9f358e5f3273a53ce4d65108")
        .then(res => res.json())
        .then(data => setvideoData(data.results))
        setIsLoading(false)
    }, [])


  return (
    <>   
      <Routes>
        <Route path='/' element={ <FeaturedMov videoData={videoData} isLoading={isLoading} /> } />
        <Route path='/movies/:id' element={ <Dashboard /> } /> 
      </Routes>

    </>
  )
}

export default App
