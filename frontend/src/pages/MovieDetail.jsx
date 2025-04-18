// import { useParams } from "react-router-dom";
import MovieItem from "../components/MovieItem";

const movie = {
  image:
    "https://plus.unsplash.com/premium_photo-1664910125402-7972b1e12b79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V0JTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
  title: "Jack the Ripper",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia inventore at praesentium maxime corporis laboriosam ex minus corrupti recusandae perferendis illo maiores cumque optio rem modi, aliquid architecto!",
  review:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia inventore at praesentium maxime corporis laboriosam ex minus corrupti recusandae perferendis illo maiores cumque optio rem modi, aliquid architecto dignissimos quasi quia exercitationem non, eaque voluptatem. Obcaecati deleniti itaque quo!",
};

export default function MovieDetail() {
  // const params = useParams();

  return <MovieItem movie={movie} />;
}
