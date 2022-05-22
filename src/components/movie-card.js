import {useState, useEffect} from 'react';
import './movie-card.css';

function MovieCard ({movie}) {
    
  useEffect(() => {
    setShowContent(false);
  }, [movie]);  
  
  const [showContent, setShowContent] = useState(false);
  
  const setShow = () => {
    setShowContent(!showContent);
  }
  
  return(
    <div className="movie-card">
      <button type="button" className="title" onClick={setShow}>
        {movie.Title}
      </button>
      <section className="content" style={{display: showContent ? 'block' : 'none'}}>
        <img src={`${movie.Poster}`}></img>
      </section>
    </div>
  );
}

export default MovieCard;