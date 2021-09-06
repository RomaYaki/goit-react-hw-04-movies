import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchActors } from "../../service/API/API";
import noFoundImg from "../../images/noFoundImg.png";
import styles from "./Casts.module.css";

export default function Cast() {
  let { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchActors(movieId)
      .then((data) => {
        setActors(data.cast);
      })
      .catch((error) => console.warn(error));
  }, [movieId]);

  return (
    <div>
      {actors && (
        <ul className={styles.AcrotsList}>
          {actors.map((actor) => (
            <li className={styles.ActorsItem} key={actor.id}>
              <img
                src={`${
                  actor.profile_path
                    ? "http://image.tmdb.org/t/p/original" + actor.profile_path
                    : noFoundImg
                }`}
                alt={actor.name}
              />
              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}