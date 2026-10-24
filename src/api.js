const API_KEY = "e25c2599be55bacf96c1e6998bb4f36d";
const GENERAL_LINK = "https://api.themoviedb.org/3";

export async function getMostPopular() {
    const response = await fetch(
      `${GENERAL_LINK}/trending/movie/day?api_key=${API_KEY}`,
    );
    if (!response.ok) {
        throw new Error("most popular error")
    }

    const data = await response.json()

    return data.results
}

export async function searchMovieByKeyword(keyword) {
    
    const response = await fetch(`${GENERAL_LINK}/search/movie?api_key=${API_KEY}&query=${keyword}`,);
    if (!response.ok) {
        throw new Error("Error searching movies")
    }

    const data = await response.json()
    
    return data.results
}

export async function getMovieById(movieId) {
    const response = await fetch(`${GENERAL_LINK}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json()

    if (!response.ok) {
        throw new Error("error get movir by id")
    }

    return data
}

export async function getMovieCredits(movieId) {
    const response = await fetch(`${GENERAL_LINK}/movie/${movieId}/credits?api_key=${API_KEY}`);
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.status_message || "Error getting movie cast")
    }

    return data.cast
}