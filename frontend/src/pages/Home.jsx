import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

import MoviesList from "../components/MoviesList";
import Content from "../components/Content";

export default function Home() {
  const { movies } = useLoaderData();

  return (
    <>
      <Content title="Home">
        <p>Browse our collection of movie reviews!</p>
      </Content>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={movies}>
          {(loadedMovies) => <MoviesList movies={loadedMovies} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadMovies() {
  const response = await fetch("http://localhost:8080/movies");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Couldn't fetch movies." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.movies;
  }
}

export function loader() {
  return {
    movies: loadMovies(),
  };
}
