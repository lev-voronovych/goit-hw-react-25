import { useEffect } from "react";
import { getMovieById } from "../../api";
import { Link, Outlet, useParams } from "react-router";
import { useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setMovie(null);
    setError("");
    getMovieById(id)
      .then(setMovie)
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <></>;

  return (
    <>
      <Link to="/">Go back</Link>

      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="150"
        />

        <div>
          <h2>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h2>

          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>

      <hr />

      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default Movie;