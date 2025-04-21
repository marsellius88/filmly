import { Await, useLoaderData } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import { Suspense } from "react";

export default function MovieDetail() {
  const { movie } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={movie}>
        {(loadedMovie) => <MovieItem movie={loadedMovie} />}
      </Await>
    </Suspense>
  );
}

async function loadMovie(id) {
  const response = await fetch("http://localhost:8080/movies/" + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Couldn't fetch movie." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.movie;
  }
}

export function loader({ params }) {
  const movieId = params.movieId;
  return {
    movie: loadMovie(movieId),
  };
}
