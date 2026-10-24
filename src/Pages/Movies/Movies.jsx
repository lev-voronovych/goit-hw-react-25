import { useState } from "react";
import { Box } from "../../Box";
import { searchMovieByKeyword } from "../../api";

function Movies() {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = keyword.trim();

    if (!searchTerm) {
      setMovies([]);
      setError("");
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const results = await searchMovieByKeyword(searchTerm);
      setMovies(results);
    } catch (error) {
      setError(error.message);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
            setHasSearched(false);
            setError("");
          }}
          name="search"
          type="text"
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {isLoading && <p>Loading movies...</p>}
      {error && <p >{error}</p>}
      {!isLoading && !error && hasSearched && movies.length === 0 && (
        <p>No movies found.</p>
      )}
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>{original_title}</li>
        ))}
      </ul>
    </Box>
  );
}

export default Movies;