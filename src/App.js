import { React, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import ComputeData from './ComputeData';

const API_URL = 'http://www.omdbapi.com/?apikey=12e4294';



const App = () => {

    const[searchTerm, setSearchTerm] = useState('');
    const[url, setUrl] = useState('');
    const[searchTriggered, setSearchTriggered] = useState(false);

    const HandleSearch = (url) => {
        setSearchTriggered(true);
        setUrl(url);
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
                <img src={SearchIcon} alt="search" onClick={() => HandleSearch(`${API_URL}&s=${searchTerm}`)}
                />
            </div>      

            { searchTriggered ? (<ComputeData url={url}/>) : (<></>) }
            
        </div>
     );
}
 
export default App;