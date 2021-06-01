import React from 'react';
import './Movies.css';

function Movies(props) { 

    return(
        <div className="movies">
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
                    {props.movies.map(movie => {
                        return (<tr id={place.Title}>
                            <th>{place.Title}</th>
                            <th>{place.Released}</th>
                            <th>{place.Runtime}</th>
                            <th>{place.Genre}</th>
                            <th>{place.Director}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Movies;