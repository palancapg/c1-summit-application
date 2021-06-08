import React from 'react';
import './Movies.css';

function Movies(props) { 

    return(
        <div className="movies">
            <table>
                <thead>
                    <tr>
                        <th>Search Results</th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map(movie => {
                        if(movie.Type === "movie"){
                            if(movie.Poster === "N/A"){
                                return(<tr key={movie.imdbID}>
                                    <th>
                                    <div className="card">
                                        <div className="body">
                                            <div className="card-image">
                                                <img className="poster" src="" alt="No Poster Provided"></img>      
                                            </div>
                                            <div className="card-text">
                                                 <h5 className="card-text">{movie.Title} ({movie.Year})</h5>
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
                                            <img className="poster" src={movie.Poster} alt="No Poster Provide"></img>      
                                        </div>
                                        <div className="card-text">
                                             <h5 className="card-text">{movie.Title} ({movie.Year})</h5>
                                        </div>
                                    </div>
                                </div>
                               </th>
                            </tr>   
                            )
                        }  
                        return(null)                 
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Movies;