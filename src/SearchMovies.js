import { useState, useEffect } from 'react';


const SearchMovies = (url) => {
    
    const[data, setData] = useState([]);

    useEffect(() => {  
          fetch(url)
          .then(response => {
              if (!response.ok) { // error coming back from server
                  throw Error('could not fetch the data for that resource');
              } 
              return response.json();
          }).then(data => {
              setData(data.Search);
          })              
    },[url]);

    return {data};
  }

  export default SearchMovies;