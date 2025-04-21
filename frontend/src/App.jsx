import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home, { loader as moviesLoader } from "./pages/Home";
import MovieDetail, { loader as movieDetailLoader } from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: moviesLoader,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetail />,
        loader: movieDetailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
