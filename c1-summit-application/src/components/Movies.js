import React from 'react';
import './Movies.css';

function Movies(props) { 

    return(
        <div className="movies">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>imdbID</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map(movie => {
                        return (<tr id={movie.Title}>
                            <th>{movie.Title}</th>
                            <th>{movie.Year}</th>
                            <th>{movie.imdbID}</th>
                            <th>{movie.Type}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Movies;