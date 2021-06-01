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
            const OMDB_API_KEY = process.env.REACT_APP_API_KEY

            let response = await fetch("http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=)" + new URLSearchParams({query: query}))
            response = await response.json()
            console.log(response.Movies)
            setMovies(response.Movies)
            
        } 
       fetchMyAPI()
       setShowMovies(true)
       setQuery("") 

    }
}