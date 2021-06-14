function Pagination(movies, desiredPage){
    var page, moviesPerPage, offset, paginatedMoviesList

    if(desiredPage === 0){
        page = 1
    }else{
        page = desiredPage
    }
    
    moviesPerPage = 10
    offset = (page - 1) * moviesPerPage
   
    paginatedMoviesList = movies.slice(offset).slice(0, moviesPerPage)

    return(paginatedMoviesList)  
}
export default Pagination