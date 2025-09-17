import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home({ searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    const url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=266fa35430a1a599464e4bee16690be8&query=${searchQuery}&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=266fa35430a1a599464e4bee16690be8&page=${page}`;

      

    axios
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [page, searchQuery]);

  const toggleFavorite = (movie, e) => {
    e.stopPropagation();
    let updatedFavorites;
    if (favorites.find((fav) => fav.id === movie.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container py-4">
      <div className="row">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col-md-2 mb-4 position-relative"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <div
              className="card h-100"
              style={{
                backgroundColor: "#111",
                color: "#fff",
                border: "none",
                height: "420px",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "80%", objectFit: "cover" }}
              />
             
{/* Favorite Button */}
<button
  onClick={(e) => toggleFavorite(movie, e)}
  style={{
    position: "absolute",
    top: "5px",
    right: "5px",
    background: "none",
    border: "none",
    color: favorites.find((fav) => fav.id === movie.id) ? "red" : "white",
    fontSize: "18px",
    cursor: "pointer",
  }}
>
  {favorites.find((fav) => fav.id === movie.id) ? "❤️" : "🤍"} 
</button>



              <div className="card-body p-2 text-center">
                <h6 className="card-title" style={{ fontSize: "14px" }}>
                  {movie.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center gap-2 my-3">
        <button
          className="btn btn-dark"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="btn btn-secondary disabled">{page}</span>
        <button
          className="btn btn-dark"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
