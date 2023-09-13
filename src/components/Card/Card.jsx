import React from 'react'
import './card.css'
import sampleimg from '../../assets/sampleimg.png'
import Play from '../../assets/Play.png'
import Imbd from '../../assets/Imbd.png'
import apple from '../../assets/apple.png'


const Card = (props) => {
  return (
    <div className='card' data-testid= 'movie-card'>
      <img src={'https://image.tmdb.org/t/p/original'+ props.poster_path} alt="Card image"  className='videocover' data-testid= 'movie-poster'/>
      <p className='country' data-testid= 'movie-release-date'>{props.release_date}</p>
      <p className='card__title' data-testid= 'movie-title'>{props.original_title}</p>
      <span className='card__sticker'>
        <p><img src={Imbd} alt="imbd image" /> {props.vote_average}/{props.vote_count}</p>
        <p><img src={apple} alt="apple image" />{(props.vote_average/10 * 100).toFixed(1)} %</p>
      </span>
      <p className='genre'>Action, Adventure, Horror</p>
    </div>
  )
}

export default Card