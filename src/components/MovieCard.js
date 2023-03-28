import { Link } from "react-router-dom";

export default function MovieCard({title, poster, year, id}){
    return(
        <article className="movie-card">
            <img src={poster === "N/A" ? `./images/oops.jpg` : poster} alt={title}/>
            <h3>{title}</h3>
            <p>Published: {year}</p>
                <Link  to={id}>
                    <button>More info...</button>
                </Link>
        </article>
    )
}