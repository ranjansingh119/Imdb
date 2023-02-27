
const Movies = ({movies}) => {

    return ( 
            <div className="container">
                {movies.map((movie) => (
                    <div className="movie">
                            <div><p>{movie.Year}</p></div>
                            <div><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/350'} alt = {movie.Title}></img></div>
                            <div>
                                <span>{movie.Type}</span>
                                <h3>{movie.Title}</h3>
                            </div>               
                    </div>
                ))}
            </div>
              
     );
}
 
export default Movies;