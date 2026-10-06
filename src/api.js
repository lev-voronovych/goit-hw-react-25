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