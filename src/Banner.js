import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './request';
import './banner.css'
const baseURL = "https://image.tmdb.org/t/p/original/";
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTopRated);
            console.log(request.data.results);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length- 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);
  return (
    <header className="banner"
    style={{
        backgroundSize: "cover",
        background: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}
    >
        {/* <img classNamesrc={`${baseURL}${movie.backdrop_path}`} alt='movie.name'/> */}
        <div className="banner-contents">
            <h1>
                {movie?.title || movie?.name || movie?.orignal_name}
            </h1>
            <div className="banner-buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner-caption'>
                {movie?.overview}
            </h1>
        </div>
       
        {/* {
            movie.map(movie => {
                return (
                    <img src={`${baseURL}${movie.backdrop_path}`} alt={movie.title}/>)
            })
        } */}
        {/* background image */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}
    </header>
  )
}

export default Banner