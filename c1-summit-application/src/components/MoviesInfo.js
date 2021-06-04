import React, { useState } from 'react';
import './MoviesInfo.css';
import Movies from './Movies';

function MoviesInfo(){
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("")
    const [showMovies,setShowMovies] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        async function fetchMyAPI(){
    
            const API_KEY = process.env.REACT_APP_API_KEY
            const URL = "http://www.omdbapi.com/?s=" + query + "&apikey=" + API_KEY

            let response = await fetch(URL)
            response = await response.json()
            console.log(response.Movies)
            setMovies(response.Movies)
            
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
           { showMovies ? <Movies movies={movies}></Movies> : <></>}
        </div>
    )
}

export default MoviesInfo;