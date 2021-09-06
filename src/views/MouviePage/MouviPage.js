import React, { useEffect, useState, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { fetchQuery } from "../../service/API/API";
const Search = lazy(() => import("../../Components/Search/Search"));

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
    
  let { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (location.search === "") return;

    const query = new URLSearchParams(location.search).get("query");
    const fetchQueryMovies = async () => {
      return fetchQuery(query)
        .then((data) => setMovies(data.results))
        .catch((error) => console.warn(error));
    };
    fetchQueryMovies();
  }, [location.search]);

  const handleSearchbarSubmit = (search) => {
    history.push({ ...location, search: `query=${search}` });
  };

  return (
    <>
      <Search onSubmit={handleSearchbarSubmit} />
      <ToastContainer autoClose={3000} />
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title} {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
