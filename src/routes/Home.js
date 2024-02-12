import Movie from "../components/Movie";
import {useEffect, useState} from "react";

function Home() {
  const URL = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json)
  }
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div>
      {
        loading ?
          ( <h1>Loading...</h1> ) :
          ( <div>{movies.map((movie, index) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                genres={movie.genres}
                summary={movie.summary}
                title={movie.title}
              />
            )
          })}
          </div> )
      }
    </div>
  );
}
export default Home;