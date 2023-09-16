import React, {useEffect, useState} from 'react'
import './Dashboard.css'
// import TVicon from '../../assets/TVicon.png'
// import Movieicon from '../../assets/Movieicon.png'
// import Homeicon from '../../assets/Homeicon.png'
// import upcomingicon from '../../assets/upcomingicon.png'
// import logomov from '../../assets/logomov.png'
// import videodp from '../../assets/videodp.png'
import Star from '../../assets/Star.png'
import bestmovie from '../../assets/bestmovie.png'
import Rectangle from '../../assets/Rectangle.png'
import { useParams } from 'react-router-dom'
import axios from "axios";



const Dashboard = () => {
  const [newData, setnewData] = useState({})
  const [ut__date, setut__date] = useState('')
  const { id } = useParams()



  useEffect(() => {  
    fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=21d1982e9f358e5f3273a53ce4d65108")
        .then(res => res.json())
        .then(data => setnewData(data.results.find(ob => ob.id == id)))

    }, [])

    // useEffect(() => {
    //   axios.get("https://api.themoviedb.org/3/movie/top_rated/?api_key=21d1982e9f358e5f3273a53ce4d65108").then((response) => {
    //     setnewData(response.data.results.find(ob => ob.id == id));
    //   });
    // }, []);

    // let dateUT = new Date(newData.release_date).toISOString()
    // console.log(dateUT)
    //(new Date(newData.release_date).toISOString())
    //09034504411

  return (
    <section className='dashboard__container'>

      <div className='dashboard__content'>
        <img src={'https://image.tmdb.org/t/p/original' + newData.backdrop_path } alt="video playing" className='dp__image' />

        <div className='divider__block'>
          <div className='right__div'>
            <div className='video__titles'>
              <p data-testid="movie-title">{newData.title}:</p>
              <p data-testid="movie-release-date">{new Date(newData.release_date).toUTCString()}</p>
              <p data-testid="movie-runtime">{new Date(newData.release_date).getMinutes()}</p>
              
            </div>
            <p data-testid="movie-overview">
              {newData.overview}
            </p>
            <h1></h1>
            <p>Director : Joseph Kosinski</p>
            <p>Writers :  Jim Cash, Jack Epps Jr,  Peter Craig</p>
            <p>Stars: Tom Cruise, Jennifer Connelly, Miles Teller</p> <br />

            <img src={Rectangle} alt="Select drop down" />

          </div>

          <div className='left__div'>
          <span className='flex'>
            <img src={Star} alt="star" />
            <p>8.5 | 350k</p>
          </span>


          <div className='block'>
            <button className='primary'>
              See showtimes
            </button><br />

            <button className='secondary'>
              More watch options
            </button><br />

            <img src={bestmovie} alt="best movie" />     
          </div>

        </div>

        </div>

      </div>

    </section>
  )
}

export default Dashboard