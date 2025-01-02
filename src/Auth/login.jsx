import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import hospitalImage from "../assets/012c867b6bb99816f7d1e6e4fc46c1.png"; // Import the image

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add Login logic here
    console.log("Login Data:", formData);
  };

  return (
    <>
      <div className="login-page-container">
        <div className="image-container up-down">
          <img src={hospitalImage} alt="Hospital" />
        </div>
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="Title">Login</div>

            <div className="text">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-button">
                
              Log In
            </button>
            <div className="text-center mt-3">
              <p style={{ fontSize: "1.2rem", color: "black", marginLeft: "100px" }}>
                Don't have an account?{" "}
                <Link to="/" className="text-decoration-none text-light font-weight-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
