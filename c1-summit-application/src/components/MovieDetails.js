import React, {useState} from 'react';
import './MovieDetails.css';

function MovieDetails(specificMovie){
    var movie; 
    console.log(specificMovie)

    async function callAPI(){
        const API_KEY = process.env.REACT_APP_API_KEY
        const URL = "http://www.omdbapi.com/?t=" + specificMovie + "&apikey=" + API_KEY

        let response= await fetch(URL)
        response = await response.json()
        console.log(response)
        movie = response
    }
    callAPI()

    return(movie)
    

}
export default MovieDetails