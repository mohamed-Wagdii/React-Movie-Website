import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 
  // Regex
  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

  const validate = () => {
    let newErrors = {};

    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password || form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);

      navigate("/");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#111" }}
    >
      <div
        className="card p-4"
        style={{ width: "400px", backgroundColor: "#222", color: "#fff" }}
      >
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
