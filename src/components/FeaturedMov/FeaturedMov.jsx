import React from 'react'
import rightarr from '../../assets/rightarr.png'
import Card from '../Card/Card'
import './FeaturedMov.css'

const FeaturedMov = () => {
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  )
}

export default FeaturedMov