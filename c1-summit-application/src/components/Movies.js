import React, {useState} from 'react';
import Pagination from './Pagination';
import './Movies.css';

/**
 * 
 *  File        : Movies.js
 * 
 *  Description : This component of the application handles the formating of how the search results from user query is presented.
 *                It will also handle with pulling addition information regarding a specific movie through OMDB API use. This component
 *                is also imported into MoviesSearch.js.
 *
 *  Author      : Phillip Palanca 
 * 
 *  @param        movies            : array object containing all movies from fetched API query result  
 *  @param        pages             : array object of total number of pages that contain 10 or less movies
 *  @param        currentPage       : variable that is defaulted at 1 
 *  @param        currentPageSetter : setter that sets the curent page that should be displayed
 * 
 *  @returns     Object structures shown on web application regarding formating of list of movies and specifc movie details
 * 
 * 
 */

function Movies({movies, pages, currentPage, currentPageSetter}) { 
    const [movieDetails, setMovieDetails] = useState([])

    //The function callAPI() takes in a specific movie and fetches the API results from OMDB API that is then used to display later
    async function callAPI(specificMovie){
        const API_KEY = process.env.REACT_APP_API_KEY
        const URL = "http://www.omdbapi.com/?t=" + specificMovie + "&apikey=" + API_KEY
        
        //Fetch API using URL and log results
        let response= await fetch(URL)
        response = await response.json()
        console.log(response)

        //Check to see if response can be found and is not undefined
        if(response !== undefined){
            //Set response to movie details and toggle open movie details popup
            setMovieDetails(response)
            document.getElementById("movie-Details").classList.toggle("active")
            document.getElementById("transparent-overlay").classList.toggle("active")
        }
        //If a response can not be found alert the user 
        else{
            alert("Movie details can not be found :(")
        }
    }

    //The function closePopUp() closes the extra Movie Details popup
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
                        //When cycling through the movie check to see if there is a poster or not
                        if(movie.Poster === "N/A"){
                            //If there is not a poster then replace the use the altPoster.png as the movie's poster in the card
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
                        //If there is a poster then just use the movie's poster for the card 
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