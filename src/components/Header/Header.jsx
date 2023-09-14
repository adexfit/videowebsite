import React from 'react'
import logomov from '../../assets/logomov.png'
import menu from '../../assets/menu.png'
import './Header.css'

const Header = () => {
  return (
    <section className='header__container'>
        <div className='logo__div'>
            <img src={logomov} alt="logo image" className='logo__img'/>
            <p>Movie Box</p>
        </div>

        <div className="search__block">
          <span className="fa fa-search"></span>
          <input type="search" placeholder="What do you want to watch?" />
        </div>

        <div className='auth__block'>
          <p>Sign in</p>
          <img src={menu} alt="mobilenav" />
        </div>

    </section>
  )
}

export default Header