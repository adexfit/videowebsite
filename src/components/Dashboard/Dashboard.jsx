import React from 'react'
import './Dashboard.css'
import TVicon from '../../assets/TVicon.png'
import Movieicon from '../../assets/Movieicon.png'
import Homeicon from '../../assets/Homeicon.png'
import upcomingicon from '../../assets/upcomingicon.png'
import logomov from '../../assets/logomov.png'
import videodp from '../../assets/videodp.png'

const Dashboard = (props) => {
  return (
    <section className='dashboard__container'>
      <div className='right__nav'>
        <div className='logonav__div'>
            <img src={logomov} alt="logo image" className='logo__img'/>
            <p id='logo__text'>Movie Box</p>
        </div>
        <nav>
          <li>
            <img src={Homeicon} alt="Home" />
            <a href="#">Home</a>
          </li>
          <li>
            <img src={Movieicon} alt="Movie" />
            <a href="#">Movie</a>
          </li>
          <li>
            <img src={TVicon} alt="Series" />
            <a href="#">Tv Series</a>
          </li>
          <li>
            <img src={upcomingicon} alt="Upcoming" />
            <a href="#">Upcoming</a>
          </li>
        </nav>

        <div className='rigthnav__card'>
          <h5>Play movie quizes and earn free tickets</h5>
          <p>50k people are playing now</p>
          <button className='Start__play'>Start playing</button>
        </div>

        <div>
          <img src="" alt="" />
          <a href="">Logout</a>
        </div>
      </div>
      <div className='dashboard__content'>
        <img src={videodp} alt="video playing" className='dp__image' />
        <div className='video__titles'>

        </div>
        <div className='right__div'>
          <p>
            After thirty years, Maverick is still pushing the envelope as a top naval aviator,
            but must confront ghosts of his past when he leads TOP GUN's elite graduates
            on a mission that demands the ultimate sacrifice from those chosen to fly it.
          </p>
          <p>Director : {props.director}</p>
          <p>Writers :  {props.writer}</p>
          <p>Stars: {props.stars}</p>

        </div>
        <div className='left__div'>

        </div>

      </div>

    </section>
  )
}

export default Dashboard