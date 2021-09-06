import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Button from '@material-ui/core/Button';
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        variant="contained"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
         <Button variant="contained">
          Home
        </Button>
      </NavLink>
      <NavLink
        to="/movies"
        variant="contained"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        <Button variant="contained">
          Movies
        </Button>
      </NavLink>
    </nav>
  );
};

export default Navigation;