import {useParams} from "react-router";
import {useEffect, useState} from "react";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  console.log(id);
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    console.log(json);
    setMovie(json.data.movie);
  }
  useEffect(() => {
    getMovie();
  }, [])

  return (
    <h1>Detail</h1>
  );
}
export default Detail;