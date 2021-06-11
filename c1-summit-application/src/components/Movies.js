import React, {useState} from 'react';
import './Movies.css';
import Pagination from './Pagination'

function Movies({movies, pages}) { 
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
                                <div className="card">
                                    <div className="body">
                                        <div className="card-image">
                                            <img className="poster" src="./altPoster.png" alt="No Poster Provided"></img>      
                                        </div>
                                        <div className="card-text">
                                             <h5 className="card-text">{movie.Title} ({movie.Year})</h5>
                                        </div>
                                    </div>
                                    <button>button 
                                </button>
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
                                <button>button 
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