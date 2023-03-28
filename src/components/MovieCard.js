export default function MovieCard({title, poster, year, genre, director, actors, awards}){
    return(
        <article className="movie-card">
            <img src={poster === "N/A" ? `./images/oops.jpg` : poster} alt={title}/>
            <h3>{title}</h3>
            <p>Published: {year}</p>
            <p>Genre: {genre}</p>
            <p>Director: {director}</p>
            <p>Actors: {actors}</p>
            <p>Awards: {awards}</p>
            <button>More info...</button>
        </article>
    )
}