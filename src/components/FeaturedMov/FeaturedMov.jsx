import React, { useState, useEffect } from 'react'
import rightarr from '../../assets/rightarr.png'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import './FeaturedMov.css'
import Hero from '../Hero/Hero'


const FeaturedMov = (props) => {

  const videoElement = props.videoData.slice(0,10).map(video => {
    return <Card poster_path={video.poster_path} 
                release_date ={video.release_date} 
                original_title = {video.original_title}
                vote_average = {video.vote_average}
                vote_count = {video.vote_count}
                our_id = {video.id}            
                key={video.id} />

  }) 
  


  return (
    <>
      <Hero />
      <div className='featured__block'>
          <header className='card__header'>
            <h2 id='header2'>Featured Movie</h2>
            <p id='seemore'>
                <a href="">See more</a>
                <img src={rightarr} alt="right arrow" />
            </p>
          </header>

          <section className='card__wrap'>
          {videoElement } 
          {/* {props.isLoading && <p>Loading..</p>} */}
          {/* {props.videoData == [] && <p>Could not fetch data</p>} */}

          </section>

            {/* <div>
              <pre>{JSON.stringify(props.videoData, null, 2)}</pre>
            </div>  */}
        </div> 
        <Footer/>
    </>
  )
}

export default FeaturedMov