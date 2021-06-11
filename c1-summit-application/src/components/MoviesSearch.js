import React, { useState } from 'react';
import './MoviesSearch.css';
import Movies from './Movies';

function MoviesSearch(){
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("")
    const [showMovies,setShowMovies] = useState(false)
    const [pages, setPages] = useState([])

    var totalPages = []
    var totalResults = 0
    var allMovies = []

    function handleSubmit(e){
        e.preventDefault()
        async function fetchMyAPI(){
            const API_KEY = process.env.REACT_APP_API_KEY
            let page = 1
            const URL = "http://www.omdbapi.com/?s=" + query + "&page=" + page + "&apikey=" + API_KEY

            let response = await fetch(URL)
            response = await response.json()
            console.log(response)
            if(response.Search !== undefined){

                response.Search.forEach(movie => {
                    if(movie.Type === "movie"){
                        allMovies.push(movie)
                    }
                })
                totalResults = response.totalResults

                while(page <= totalResults/10){
                    page++
                    const URL = "http://www.omdbapi.com/?s=" + query + "&page=" + page + "&apikey=" + API_KEY
                    response = await fetch(URL)
                    response = await response.json()
                    if(response.Search !== undefined){
                        response.Search.forEach(movie => {
                            if(movie.Type === "movie"){
                                allMovies.push(movie)
                            }
                        })
                    }
                }
                
                if(allMovies.length !== 0){
                    console.log(allMovies)
                    setMovies(allMovies)

                    for (let index = 1; index <= Math.ceil(allMovies.length / 10); index++) {
                        totalPages.push(index)    
                    }
                    setPages(totalPages)
                }
                else{
                    alert('Ooops no movies can be found please you can try again :)');
                }

            }
            else{
                alert('Ooops no movies can be found please you can try again :)');
            }
        }
       fetchMyAPI()
       setShowMovies(true)
       setQuery("")       
    }
    
    return(
        <div className="moviesinfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Movie or Show Title:</label>
                <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/>
                <button className="search">Submit</button>
           </form>
           {showMovies ? <Movies movies={movies} pages={pages}></Movies> : <></>}
        </div>
    )
}
export default MoviesSearch;