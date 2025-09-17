import React, { useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (movieId) => {
    const updated = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="container py-4">
      <h3 className="text-white mb-4">⭐ My Favorite Movies</h3>
      <div className="row">
        {favorites.length === 0 ? (
          <p className="text-white">No favorites added yet.</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.id} className="col-md-2 mb-4 position-relative">
              <div
                className="card h-100"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  border: "none",
                  height: "380px",
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ height: "80%", objectFit: "cover" }}
                />
                
                {/* Remove Button */}
                <button
                  onClick={() => removeFavorite(movie.id)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    background: "red",
                    border: "none",
                    color: "white",
                    fontSize: "14px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>

                <div className="card-body p-2 text-center">
                  <h6 className="card-title" style={{ fontSize: "14px" }}>
                    {movie.title}
                  </h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
