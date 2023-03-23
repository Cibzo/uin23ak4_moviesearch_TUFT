import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import Search from "./Search";

export default function Main({movies, setSearch, getMovies}){
    console.log(movies)
    return(
        <>
        <Search setSearch={setSearch} getMovies={getMovies}/>
        <section className="movie-view">
            <h2>Movies</h2>
            {movies?.map((movie, index) => (
                <Link key={index} to={movie?.Title.replace(/\s/g, "-").toLowerCase()}>
                    <MovieCard title={movie?.Title} poster={movie?.Poster} type={movie?.Type}/>
                </Link>
            ))}
        </section>
        </>
    )
}