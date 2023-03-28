import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage(){

    const [movie, setMovie] = useState('')
    const {slug} = useParams()
    
    const getMovie = async() =>{
        const response = await fetch(`http://www.omdbapi.com/?i=${slug}&type=movie&apikey=71425793`)
        const data = await response.json()
        console.log(data)
        setMovie(data)
    }

    useEffect(() => {
        getMovie()
    }, [slug])

    console.log(slug)
    return(
        <section>
            <h1>{movie?.Title}</h1>
            <img src={movie?.Poster === "N/A" ? `./images/oops.jpg` : movie?.Poster} alt={movie?.Title}/>
            <h4>{movie?.Plot}</h4>
            <p>Imdb Rating: {movie?.imdbRating}</p>
            <p>Languages: {movie?.Language}</p>
            <p>Genre: {movie?.Genre}</p>
            <p>Released: {movie?.Released}</p>
            <p>Country: {movie?.Country}</p>
            <p>Actors: {movie?.Actors}</p>
            <p>Director: {movie?.Director}</p>
            <p>Awards: {movie?.Awards}</p>
        </section>
    )
}