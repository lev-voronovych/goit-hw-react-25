import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieCredits } from "../../api";

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(id).then(setCast);
  }, [id]);

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              width="100"
            />
          )}
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
