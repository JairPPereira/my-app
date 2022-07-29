import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/4/list/8211920?page=1&api_key=fcfe44809de84129fab53e785124bb95')
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
            <span>{movie.overview}</span>
            <span>{movie.homepage}</span>
            <span>{movie.original_title}</span>

            
            </div>
        )
      })}

</>);
}

export default Home;
