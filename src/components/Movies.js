import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

function Movie({ movie }) {
  const { addToFavs } = useContext(MoviesContext);

  return (
    <div className="card">
      <img alt={movie.Title} src={movie.Poster} className="card-img-top" />

      <div className="card-body">
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <p>
          <button className="btn btn-success" onClick={() => addToFavs(movie)}>
            Add to favs
          </button>
        </p>
      </div>
    </div>
  );
}

function Movies({ movies }) {
  return (
    <>
      {movies.map((movie, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <Movie movie={movie} />
        </div>
      ))}
    </>
  );
}

export default Movies;
