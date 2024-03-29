//7777import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchResults from "./SearchResults";

export default function Main({ movies, setSearch, getMovies }) {
  console.log(movies);
  return (
    <>
      <SearchResults setSearch={setSearch} getMovies={getMovies} />
      <section className="movie-view">
        <h2>Movie list:</h2>
        {movies?.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie?.Title}
            poster={movie?.Poster}
            year={movie?.Year}
            id={movie?.imdbID}
          />
        ))}
      </section>
    </>
  );
}
