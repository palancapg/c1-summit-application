import React, {useState} from 'react';
import MovieDetails from './MovieDetails';
import './Movies.css';
import Pagination from './Pagination';

function Movies({movies, pages}) { 
    const [moviePopUp, setMoviePopup] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    return(
        <div className="movies">

            <nav>
               <ul className="pagination">
                   {pages.map(number => (
                       <span key={number} className='page-item'>
                            <a onClick={() => setCurrentPage(number)} href='!#' className='page-link'>
                                {number}
                            </a>
                       </span>
                   ))}
               </ul>
           </nav>

            <table>
                <thead>
                    <tr>
                        <th>Search Results</th>
                    </tr>
                </thead>
                <tbody>
                    {Pagination(movies, currentPage).map(movie => {
                        if(movie.Poster === "N/A"){
                            return(<tr key={movie.imdbID}>
                                <th>
                                <div className="card" id={movie.imdbID} >
                                    <div className="body">
                                        <div className="card-image">
                                            <img className="poster" src="./altPoster.png" alt="No Poster Provided"></img>      
                                        </div>
                                        <div className="card-text">
                                             <h5 className="card-text">{movie.Title} ({movie.Year})</h5>
                                        </div>
                                    </div>
                                    <div className="popup">
                                        <div className="overlay"></div>
                                        <div className="content">
                                            <button id={movie.imdbID} onClick={() => setMoviePopup(MovieDetails(movie.Title))}>Click for more details</button> 
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
                                        <img className="poster" src={movie.Poster} alt="No Poster Provided"></img>      
                                    </div>
                                    <div className="card-text">
                                         <h5 className="card-text">{movie.Title} ({movie.Year})</h5>
                                    </div>
                                </div>
                                <button>Click for more details
                                </button>
                            </div>
                           </th>
                        </tr>   
                        )        
                    })}
                </tbody>
            </table>
         </div>
    )
}
export default Movies;