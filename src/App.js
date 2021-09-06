import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container/Container";
import Navigation from "./Components/Navigation/Nav";
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./views/MouviePage/MouviPage"));
const MovieDetailsPage = lazy(() => import("./views/DetailsPage/Details"));
const NotFoundView = lazy(() => import("./views/noFound"));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>

          <Route>
            <Redirect to={"/"} />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
