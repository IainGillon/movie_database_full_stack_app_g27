
import React from 'react';
import MovieReviewList from './MovieReviewList';

import { FaPoop } from "react-icons/fa";


const MovieDetail = ({ movies, selectedMovie, onHomeClick, loggedIn, allUsers }) => {


    const handleClick = function () {
        onHomeClick();


    }

    const handleFavouriteToggle = (MovieToUpdate) => {
        const updatedMovies = movies.map((movie) => {
            if(movie.title === MovieToUpdate.title){
                movie.favourite = !movie.favourite
            }
            return movie
        })}


    return (

        <div className="movie-detail-container">
            <div className="movie-detail">
                <div className="movie-detail-icon"><FaPoop /></div>
                <h2>{selectedMovie.Title}</h2>
                <img className="movie-detail-poster" src={selectedMovie.Poster} alt="" />
                <div>
                    <h5>PLOT</h5>
                    <p>{selectedMovie.Plot}</p>
                    <h6>DIRECTOR</h6>
                    <p>{selectedMovie.Director}</p>
                    <h6>CAST</h6>
                    <p>{selectedMovie.Actors}</p>
                    <h6>RUNTIME</h6>
                    <p>{selectedMovie.Runtime}</p>
                    <h6>IMDB</h6>
                    <p>{selectedMovie.Ratings[0].Value}</p>
                </div>
                {/* add favourite tick box (see UserFavourite.js) */}
                {/* add boxcomment  */}
                <button className="custom-button" onClick={handleClick}>HOME</button>
            </div>
            <div className="movie-review-list-container">
                <MovieReviewList selectedMovie={selectedMovie} loggedIn={loggedIn} allUsers={allUsers}/>
            </div>
        </div>    
    )
}

export default MovieDetail;

