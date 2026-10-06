import { useState } from "react";
import { useEffect } from "react";
import { getMostPopular } from "../../api";

function Home() {
const [movie , setMovies] = useState([])


    useEffect(() => {
      console.log(getMostPopular().then((data) =>setMovies(data) ));
    }, []);
  return (
    <div>
      <ul>
        {movie.map(({ id, original_title }) => (
            <li key={id}>{ original_title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home