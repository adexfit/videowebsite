import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twiter from '../../assets/twiter.png'
import youtube from '../../assets/youtube.png'

const Footer = () => {
  return (
    <div className='footer__wrap'>
        <span className='foot__ico'>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twiter} alt="twitter" />
            <img src={youtube} alt="youtube" />
        </span>
        <span className='footer__links'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </span>
        <p id='copyright'>2021 MovieBox by Adriana Eka Prayudha</p>

    </div>
  )
}

export default Footer