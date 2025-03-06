import React from 'react'

function MovieList(props) {
    const FavouriteComponent = props.favouriteComponent;
  return (
    <div className="d-flex flex-wrap">
        {props.movies.map((movie, index) => (
            <div className='col-lg-4 col-md-6 image-container d-flex align-items-center justify-content-center mb-4' key={index}>
                <img src={movie.Poster} alt="movie" />
                <div 
                    onClick={() => props.handleFavouriteClick(movie)}
                    className='overlay d-flex align-items-center justify-content-center'      
                >
                    <FavouriteComponent/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MovieList