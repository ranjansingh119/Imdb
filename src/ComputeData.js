import SearchMovies from "./SearchMovies";
import Movies from "./Movies";

const ComputeData = ({url}) => {

    const {data: movies} = SearchMovies(url);

    return ( 
        <div className="search">
            { movies ? (
                <Movies movies={movies} />
            ) : (
                <p>No movies found</p>
            )}
        </div>
     );
}
 
export default ComputeData;