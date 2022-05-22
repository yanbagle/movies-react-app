import './movies-list.css';
import MovieCard from './movie-card';

function MoviesList ({movies}) {
    
  return (
    <ul>
      {movies.map((movie, key) => 
        <li key={key}>
          <MovieCard movie={movie}/>
        </li>
      )}
    </ul>
  );
}

export default MoviesList;