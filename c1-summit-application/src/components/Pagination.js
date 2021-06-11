function Pagination(movies, desiredPage){
    var page = desiredPage
    var moviesPerPage = 10
    var offset = (page - 1) * moviesPerPage
   
    var paginatedMoviesList = movies.slice(offset).slice(0, moviesPerPage)

    return(paginatedMoviesList)  
}
export default Pagination