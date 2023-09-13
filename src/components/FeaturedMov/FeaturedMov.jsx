import React, { useState, useEffect } from 'react'
import rightarr from '../../assets/rightarr.png'
import Card from '../Card/Card'
import './FeaturedMov.css'



const FeaturedMov = () => {
  const [videoData, setvideoData] = useState([])

  useEffect(() => {
    
    fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=21d1982e9f358e5f3273a53ce4d65108")
        .then(res => res.json())
        .then(data => setvideoData(data.results))
    }, [])

    const videoElement = videoData.slice(0,10).map(video => {
      return <Card poster_path={video.poster_path} 
              release_date ={video.release_date} 
              original_title = {video.original_title}
              vote_average = {video.vote_average}
              vote_count = {video.vote_count}              
              key={video.id} />

    }) 
  


  return (
    <div className='featured__block'>
      <header className='card__header'>
        <h2 id='header2'>Featured Movie</h2>
        <p id='seemore'>
            <a href="">See more</a>
            <img src={rightarr} alt="right arrow" />
        </p>
      </header>

      <section className='card__wrap'>
        {videoElement}

      </section>

        <div>
          <pre>{JSON.stringify(videoData, null, 2)}</pre>
        </div> 
    </div>
  )
}

export default FeaturedMov