import React, { useState } from 'react';
import './MoviesSearch.css';
import Movies from './Movies';

/**
 * 
 *  File        : MoviesSearch.js
 * 
 *  Description : This component of the application takes in a query from the user that will then call the OMDB API for an intial list of movies.
 *                This file is imported within App.js and called within it. 
 *
 *  Author      : Phillip Palanca 
 * 
 *  @returns    Object structures shown on web application regarding querysubmission and Movies return object structure 
 * 
 */

function MoviesSearch(){

    const [query, setQuery] = useState("")
    const [showMovies,setShowMovies] = useState(false)

    //Constants that are passed and referenced throughout other components
    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    var totalPages = []
    var totalResults = 0
    var allMovies = []

    /**
     * 
     * The function handleSubmit() works so that after a user inputs a query for a Movie,
     * it will then call the OMDB api and fetch the results so that it is stored within the application.
     * It will also then take into account storing only the movies of all pages of the fetched results.
     * 
     * @param {*} e 
     * 
     */
    function handleSubmit(e){
        e.preventDefault()
        
        //The fetchMyAPI() fetch the queries results from OMDB API and sets these results to constant values
        async function fetchMyAPI(){
            const API_KEY = process.env.REACT_APP_API_KEY
            let page = 1
            const URL = "http://www.omdbapi.com/?s=" + query + "&page=" + page + "&apikey=" + API_KEY

            //Calling API and fetch results
            let response = await fetch(URL)
            response = await response.json()

            //Check to see if the first results from API call is valid and not undefined or not found
            if(response.Search !== undefined){

                //If response is found then cycle through each response to pull out only movies
                response.Search.forEach(movie => {
                    //Check to see if respone if movie then push it into list of all movies
                    if(movie.Type === "movie"){
                        allMovies.push(movie) 
                    }
                })

                totalResults = response.totalResults 
                
                //Cycle through all results by considering each set of 10 results as a page
                while(page <= totalResults/10){
                    page++ //Increment page

                    //Set URL for API fetch so that it consponding with page in cycle 
                    const URL = "http://www.omdbapi.com/?s=" + query + "&page=" + page + "&apikey=" + API_KEY

                    //Call API and fetch results
                    response = await fetch(URL)
                    response = await response.json()

                    //Check to see if results from each page of responses is valid 
                    if(response.Search !== undefined){
                        //Cycle through and grab only the movies that are in each page of responses
                        response.Search.forEach(movie => {
                            if(movie.Type === "movie"){
                                allMovies.push(movie)
                            }
                        })
                    }
                }
                
                //Check to see if there are movies from search 
                if(allMovies.length !== 0){
                    //Console log to see and check what movies are stored and found
                    console.log(allMovies) 
                    //Set the movies into a constant variable to be passed through other components of web app
                    setMovies(allMovies)

                    //Find how many pages there are that can consist of 10 or less movies from all movies list
                    for (let index = 1; index <= Math.ceil(allMovies.length / 10); index++) {
                        totalPages.push(index)    
                    }
                    //Store pages found previously into constant variable that can be passed through other components 
                    setPages(totalPages)
                }
                //If there are no movies that can be found from all pages then alert user
                else{
                    alert('Ooops no movies can be found, please try again :)');
                }

            }
            //If response from API is undefined and not valdi then alert user
            else{
                alert('Ooops no movies can be found, please try again :)');
            }
        }
        //Call fetchMyAPI to fetch responses from query
       fetchMyAPI()
       //If everything checks out from fetchMyAPI() call then movies list is able to show from first page and searchquery clears
       setShowMovies(true)
       setCurrentPage(1)
       setQuery("")       
    }
    
    return(
        <div className="querySearch"> 
           <form className="query-submission" onSubmit={handleSubmit}>
                <img className="enter-Image" src="./images/enterImage.png" alt="Sunny Day Movie Search"></img>
                <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/>
                <button className="search" >Submit</button>
           </form>
           <div className="moviesInfo">
                {showMovies ? <Movies movies={movies} pages={pages} currentPage={currentPage} currentPageSetter={setCurrentPage}></Movies> : <></>}
           </div>
        </div>
    )
}
export default MoviesSearch;