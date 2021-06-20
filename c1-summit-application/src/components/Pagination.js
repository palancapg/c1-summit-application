/**
 * 
 *  File        : Pagination.js
 * 
 *  Description : This component of the application handles pagination of the movies list and is implemented into the 
 *                Movies.js. In its own js file to be used later if needed. 
 * 
 *  Author      : Phillip Palanca 
 * 
 *  @param        movies            : array object containing all movies from fetched API query result  
 *  @param        desiredPage       : variable that represents the page that user wants of paginated data
 * 
 *  @returns     Array of 10 movies that represents current page user is wants to view
 * 
 */

function Pagination(movies, desiredPage){
    var page = desiredPage
    var moviesPerPage = 10
    //Find offset for pagination
    var offset = (page - 1) * moviesPerPage
   //Slice given movies list by offset and then by 0 and by 10 
    var paginatedMoviesList = movies.slice(offset).slice(0, moviesPerPage)

    return(paginatedMoviesList)  
}
export default Pagination