import React, {useState} from 'react';
import Pagination from './Pagination';
import './Movies.css';

function Movies({movies, pages, currentPage, currentPageSetter}) { 
    const [movieDetails, setMovieDetails] = useState([])
    console.log(pages.length)

    async function callAPI(specificMovie){
        const API_KEY = process.env.REACT_APP_API_KEY
        const URL = "http://www.omdbapi.com/?t=" + specificMovie + "&apikey=" + API_KEY
    
        let response= await fetch(URL)
        response = await response.json()
        console.log(response)
        setMovieDetails(response)

        if(movieDetails !== null){
            document.getElementById("movie-Details").classList.toggle("active")
            document.getElementById("transparent-overlay").classList.toggle("active")
        }
    }

    function closePopup(){
        document.getElementById("movie-Details").classList.toggle("active")
        document.getElementById("transparent-overlay").classList.toggle("active")
    }

    return(
        <div className="movies">
            <table>
                <thead>
                    <tr>
                        <th><img className="search-Image" src="./images/searchResults.png" alt="Sunny Day Movie Search"></img></th>
                    </tr>
                </thead>
                <tbody>
                    {Pagination(movies, currentPage).map(movie => {
                        if(movie.Poster === "N/A"){
                            return(<tr key={movie.imdbID}id={movie.imdbID}>
                                <th>
                                <div className="card" id={movie.imdbID}>
                                    <div className="body">
                                        <div className="card-image">
                                            <img className="poster" src="./images/altPoster.png" alt="No Poster Provided"></img>      
                                        </div>
                                        <div className="card-text">
                                             <h3>{movie.Title} ({movie.Year})</h3>
                                             <button className="details-button" id={movie.imdbID} onClick={() => callAPI(movie.Title)}>Click for more details</button>
                                        </div>
                                    </div>
                                </div>
                               </th>
                            </tr>   
                            ) 
                        }
                        return(<tr key={movie.imdbID}>
                            <th>
                            <div className="card">
                                <div className="body">
                                    <div className="card-image">
                                        <img className="poster" src={movie.Poster} alt="No Poster Provided"></img>      
                                    </div>
                                    <div className="card-text">
                                         <h3>{movie.Title} ({movie.Year})</h3>
                                         <button className="details-button" id={movie.imdbID} onClick={() => callAPI(movie.Title)}>Click for more details</button>
                                    </div>
                                </div>
                            </div>
                           </th>
                        </tr>   
                        )        
                    })}     
                </tbody>
            </table>
                    
            {/**
            * Pagination (Page Selector) div
            */}
            <div>
                <div className="pageNumberLine">
                    Page {currentPage} of {pages.length}
                </div>
                <nav className="pageSelector">
                <ul className="pagination">
                    {pages.map(number => (
                        <span key={number} className='page-item'>
                        <a className='page-Number' onClick={() => currentPageSetter(number)} href='!#'>
                        {number}
                        </a>
                        </span>
                    ))}
                </ul>
                </nav>
            </div>

            {/**
             * PopUp div
             */}
            <div className="movieDetails">
            <div className="popUp" id="movie-Details" >
                <button data-close-button className="close-btn" onClick={() => closePopup()}>&times;</button>
                <img className="sunny-smile" src="./images/smileySun.png" alt="No Sun Today :("></img>    
                <h1>{movieDetails.Title}</h1>
                Release Date : {movieDetails.Released} <br></br>
                Runtime : {movieDetails.Runtime} <br></br>
                Genre : {movieDetails.Genre} <br></br>
                Director : {movieDetails.Director} <br></br>
            </div>
            <div className="overlay" id="transparent-overlay"></div>
            </div>
         </div>
    )
}
export default Movies;