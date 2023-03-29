export default function SearchResults({ setSearch, getMovies }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search.." onChange={handleSearch} />
      <button className="search-btn" type="submit">
        search
      </button>
    </form>
  );
}
