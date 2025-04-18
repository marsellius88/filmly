import classes from "./MoviesList.module.css";

export default function MoviesList({movies}) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {movies.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/movies/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
