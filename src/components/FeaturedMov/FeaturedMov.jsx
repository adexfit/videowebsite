import React from 'react'
import rightarr from '../../assets/rightarr.png'

const FeaturedMov = () => {
  return (
    <section className='featured__block'>
        <h2 id='header2'>FeaturedMov</h2>
        <p id='seemore'>
            <a href="">See more</a>
            <img src={rightarr} alt="right arrow" />
        </p>
        

    </section>
  )
}

export default FeaturedMov