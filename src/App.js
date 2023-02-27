import { React, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=12e4294';

const App = () => {

    const[movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const movieData = await response.json();
        setMovies(movieData.Search);
    }


    return ( 
        <div className = "app">
            <h1>ImdbCode</h1>
            <div className="search">
                <input 
                    placeholder='Search for movies' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <img src={SearchIcon} 
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies.length > 0 ? 
                (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
           
        </div>
     );
}
 
export default App;