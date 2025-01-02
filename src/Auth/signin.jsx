import React, { useState } from "react";
import "./SignInPage.css";
import { Link } from "react-router-dom";
import hospitalImage from "../assets/c0a9d3ce8c41bf587cf6c62388f4461e.png"; // Import the image
import { FaEyeSlash } from "react-icons/fa";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add Sign-In logic here
    console.log("Sign-In Data:", formData);
  };

  return (
    <>
    <div className="signin-page-container">
    <div className="image-container up-down">
    <img src={hospitalImage} alt="Hospital" />

    </div>
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignIn}>
      <div className="Title"> SignUp</div>

    <div className="text">
    <label htmlFor="text"> Username
    </label>
      
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        </div>
        <div className="text"> 
        <label htmlFor="text">  Phone Number </label>


        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        </div>
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
        <div className="text">  <label htmlFor="password"> Password</label>
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
            

        />
                 
        </div>
        <div className="text">  <label htmlFor="password">    Re-Enter Password
        </label>
        <input
          type="password"
          name="rePassword"
          placeholder="Re-Enter Password"
          value={formData.rePassword}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit" className="signin-button">
          Sign In
        </button>

        <div className="  text-center mt-3 ">
          <p style={{ fontSize: "1.2rem", color: "black", marginLeft: "150px"}}>
          
            Do you have an account?{" "}
            <Link to="/login" className="text-decoration-none text-light font-weight-bold">
            Login
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
    </>

  );
};

export default SignInPage;
