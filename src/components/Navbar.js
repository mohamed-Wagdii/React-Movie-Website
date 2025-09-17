import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(search); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Movies App
        </Link>

        <form className="d-flex me-auto" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ borderRadius: "20px" }}
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-4">
              <Link
                className="nav-link d-flex align-items-center justify-content-center"
                to="/favorites"
                style={{
                  fontSize: "24px",
                  padding: "5px 12px",
                  border: "1px solid #fff",
                  borderRadius: "8px",
                  backgroundColor: "#111",
                  transition: "0.3s",
                }}
              >
                🛒
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
