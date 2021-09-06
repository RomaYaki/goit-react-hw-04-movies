import { Link } from "react-router-dom";
import PropTypes from "prop-types";

SubNavigation.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default function SubNavigation({ movieId }) {
  return (
    <ul>
      <li>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </li>
    </ul>
  );
}