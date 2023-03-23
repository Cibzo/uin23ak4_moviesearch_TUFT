import { useParams } from "react-router-dom";

export default function MoviePage({movies}){
    const {slug} = useParams()
    const movie = movies.find((mov) => mov.movie?.Title.replace(/\s/g, '-').toLowerCase() === slug)
    return(
        <section>
            <h1>{movie?.movie?.Title}</h1>
        </section>
    )
}