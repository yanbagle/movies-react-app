import {useState, useEffect} from 'react';
import MoviesList from './movies-list';

function SearchBar() {
  
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    if (query.length >= 3) {
      fetchMovies();
    }
  }, [query]);
  
  const fetchMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=8fc6c84a&s=${query}`);
    const json = await res.json();
    const {Search} = json;
    if (Search && Search.length) {
      setMovies(Search);
    }
  }
  
  const updateQuery = (event) => {
    setQuery(event.target.value);
  }
  
  return(
    <div>
      <form>
        <label for="search-bar" > Search Movies: 
          <input id="search-bar" type="text" onChange={updateQuery} />
        </label>
      </form>
      <MoviesList movies={movies}/>
    </div>
  );
}

export default SearchBar;