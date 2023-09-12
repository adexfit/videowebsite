import React from 'react'
import './card.css'
import sampleimg from '../../assets/sampleimg.png'
import Play from '../../assets/Play.png'
import Imbd from '../../assets/Imbd.png'
import apple from '../../assets/apple.png'

const Card = () => {
  return (
    <div className='card'>
      <img src={sampleimg} alt="Card image" />
      <p className='country'>USA, 2016 - Current</p>
      <p className='card__title'>Stranger Things</p>
      <span className='card__sticker'>
        <p><img src={Imbd} alt="imbd image" /> 86.0/100</p>
        <p><img src={apple} alt="apple image" />97%</p>
      </span>
      <p className='genre'>Action, Adventure, Horror</p>
    </div>
  )
}

export default Card