import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=266fa35430a1a599464e4bee16690be8`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie) return <p className="text-center text-light">Loading...</p>;

  return (
    <div className="container py-4 text-light">
      <div className="row">
        {/* صورة الفيلم */}
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>

        {/* تفاصيل الفيلم */}
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Runtime:</strong> {movie.runtime} min</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
