import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Regex
  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  const usernameRegex = /^\S+$/; // بدون مسافات
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validate = () => {
    let newErrors = {};

    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.username || !usernameRegex.test(form.username)) {
      newErrors.username = "Username is required (no spaces allowed)";
    }

    if (!form.password || !passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be at least 8 characters, contain upper, lower, digit, and special char";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
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
      alert("✅ Register Successful!");
      console.log(form);
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
        <h3 className="text-center mb-3">Register</h3>
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

          {/* Name */}
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>

          {/* Username */}
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && (
              <small className="text-danger">{errors.username}</small>
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

          {/* Confirm Password */}
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <small className="text-danger">{errors.confirmPassword}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
