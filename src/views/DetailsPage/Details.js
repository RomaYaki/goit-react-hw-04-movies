import { useState, useEffect, useRef, Suspense, lazy } from "react";
import {
  useParams,
  Route,
  useHistory,
  useRouteMatch,
  Switch,
  useLocation,
} from "react-router-dom";
import { fetchDetailsMovie } from "../../service/API/API";
const CardMovie = lazy(() => import("../../Components/CardComponent/Card"));
const SubNavigation = lazy(() => import("../../Components/subNavigation/subNav"));
const Cast = lazy(() => import("../Casts/Casts"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const location = useLocation();
  const { current } = useRef(location.state);
  const history = useHistory();

  useEffect(() => {
    fetchDetailsMovie(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        history.push("/");
        console.warn(error);
      });
  }, [movieId, history]);

  return (
    <div>
      <button onClick={() => history.push(current ? current.from : "/")}>
        &#8592; Go back
      </button>
      {movie && (
        <>
          <Suspense fallback={<h2>Loading...</h2>}>
            <CardMovie movie={movie} />
            <hr />
            <p>Additional information</p>
            <SubNavigation movieId={movieId} />
          </Suspense>
          <hr />
          <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
