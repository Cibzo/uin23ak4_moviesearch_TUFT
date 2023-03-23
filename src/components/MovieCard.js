export default function MovieCard({title, poster, type}){
    return(
        <article className="movie-card">
            <h3>{title}</h3>
            <img src={poster} alt={title}/>
            <p>{type}</p>
        </article>
    )
}