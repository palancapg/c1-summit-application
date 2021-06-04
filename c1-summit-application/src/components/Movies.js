import React from 'react';
import './Movies.css';

function Movies(props) { 

    return(
        <div className="Movies">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Runtime</th>
                        <th>Genre</th>
                        <th>Director</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Movies.map(movie => {
                        return (<tr id={movie.Title}>
                            <th>{movie.Title}</th>
                            <th>{movie.Released}</th>
                            <th>{movie.Runtime}</th>
                            <th>{movie.Genre}</th>
                            <th>{movie.Director}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Movies;