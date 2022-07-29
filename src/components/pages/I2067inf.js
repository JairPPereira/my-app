import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8ed200f50a6942ca5bc8b5cdec27ff22&language=pt-BR')
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (
    <>
      <h1>Movies</h1>

      {movies.map(movie => {
        return (
            <div key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
            </div>
        )
      })}

</>);
}

export default Home;
