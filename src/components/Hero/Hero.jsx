import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Play from '../../assets/Play.png'
import imbd from '../../assets/imbd.png'
import apple from '../../assets/apple.png'


const Hero = () => {
  return (
    <section className='hero__div' >
        <Header/>

        <div className='hero__text'>
            <h1>John Wick 3: Parabellum</h1>
            <div className='label'>
              <p><img src={imbd} alt="imbd image" /> 86.0/100</p>
              <p><img src={apple} alt="apple image" />97%</p>
            </div>
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </p>
            <button>
                <span><img src={Play} alt="" className='btnico'/></span>
                WATCH TRAILER
            </button>
        </div>

    </section>
  )
}

export default Hero