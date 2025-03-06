import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import AddFavourite from "./Components/AddFavourites";
import RemoveFavourites from "./Components/RemoveFavourites";
import HomePage from './Components/HomePage';
import Profile from './Components/Profile';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
		const url = searchValue? `http://www.omdbapi.com/?s=${searchValue}&apikey=8352313c`: `http://www.omdbapi.com/?s=tech&apikey=8352313c`;
    
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    if(movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocaleStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocaleStorage(newFavouriteList);
  };


  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocaleStorage(newFavouriteList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-block align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieList 
          movies={movies} 
          handleFavouriteClick={addFavoriteMovie}
          favouriteComponent={AddFavourite}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Favourites'/>     
      </div>
      <div>
        <MovieList
          movies={favourites}
          handleFavouriteClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
      
    </div>
  );
}

export default App;
