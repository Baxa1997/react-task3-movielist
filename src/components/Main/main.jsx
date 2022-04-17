import React, { useState, useEffect } from 'react';
import './main.css';
import TestPic from '../../Assets/images/test-movie.png';
import PlayBtn from '../../Assets/images/play.png';
import axios from 'axios';
import { movieId } from '../../redux/actions/moviesAction';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [banner, setBanner] = useState([]);
    
    const getMovies = () => {
        axios
        .get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies')
        .then((res) => {
             setMovies(res.data.filter((data => data.type !== 'banner')));
             setBanner(res.data.filter((data => data.type === 'banner')));           
        });
    }
    useEffect(() => {
        getMovies();
    }, [])
    
    return (
        <div className="main">
            <div className='banner'>
                <img className='bannerImg' src={banner[0]?.movieImageUrl} alt={banner[0]?.title} />
            </div>
            
            <h3>Continue Watching  |  4 Movies</h3>
            <div className="movie-list">
                {movies && movies.map(movie => (
                    <div className="movies">
                    <img className='background' src={movie?.movieImageUrl} alt="" />
                    <div className="movies-control">
                       <div className="control-panel">
                            <button className="play-button"><img src={PlayBtn} alt="" /></button> 
                            <div className="info">
                                <h4>{movie?.title} <span>{movie?.release_date}</span></h4>
                            </div>
                            <div className="time-info">
                                <p>{movie?.duration}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Main;