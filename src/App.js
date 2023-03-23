import './css/layout.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import MoviePage from './components/MoviePage';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('james bond')

  const getMovies = async(search) =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=71425793`)
    const data = await response.json()
    console.log(data.Search)
    setMovies(data.Search)
  }

  console.log("sjekk", movies)

  useEffect(() =>{
    getMovies(search)
  }, [search])

  if(search.length < 2){
     console.log("under 3 chars")
  }

  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies}/>}/>
        <Route path=':slug' element={<MoviePage movies={movies} />} />
      </Route>
    </Routes>
  );
}

export default App;
