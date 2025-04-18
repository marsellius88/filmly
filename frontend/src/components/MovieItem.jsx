import classes from "./MovieItem.module.css";

export default function MovieItem({ movie }) {
  return (
    <article className={classes.movie}>
      <img src={movie.image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.review}</p>
    </article>
  );
}
