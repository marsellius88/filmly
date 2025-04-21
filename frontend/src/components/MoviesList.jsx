import { Link } from "react-router-dom";

import classes from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <div className={classes.movies}>
      <h1>Reviews</h1>
      <ul className={classes.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={classes.item}>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.image} alt={movie.title} />
              <div className={classes.content}>
                <h2>{movie.title}</h2>
                <p>
                  <b>Description:</b> {movie.description.slice(0, 50) + "..."}
                </p>
                <p>
                  <b>Review:</b> {movie.review.slice(0, 50) + "..."}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
