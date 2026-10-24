import { useState } from "react";
import { useEffect } from "react";
import { getMostPopular } from "../../api";
import { Link } from "react-router";
function Home() {
const [movie , setMovies] = useState([])


    useEffect(() => {
      getMostPopular().then((data) =>setMovies(data) )
    }, []);
  return (
    <div>
      <ul>
        {movie.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home