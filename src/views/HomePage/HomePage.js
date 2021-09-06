import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { fetchTrandMovie } from "../../service/API/API";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrandMovie()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.warn(error));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                {movie.title} {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default HomePage;
