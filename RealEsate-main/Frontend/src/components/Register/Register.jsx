import React, { useState } from "react";
import "../Register/Register.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdContactPhone, MdEmail } from "react-icons/md";
import Navbar from "../Register/Navbar";
import Footer from "../Register/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null); // State variable for error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/users/", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });

      console.log(response.data); // Handle successful registration

      // Redirect to home page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response.data); // Handle registration error

      // Set the error message in state
      setErrorMessage(
        "Registration failed. Please check your information and try again."
      );
    }
  };
  return (
    <div>
      <Navbar />
      <div className="register-body">
        <div className="register-card">
          <div className="register-wrapper">
            <form action="">
              <h1>Register</h1>
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <div className="register-input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
                {/* <FaUserAlt className='register-icon' /> */}
              </div>
              <div className="register-input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                {/* <MdEmail className= 'icon'/> */}
              </div>
              <div className="register-input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                {/* <FaLock className='icon'/> */}
              </div>
              <div className="register-input-box">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {/* <FaLock className='icon'/> */}
              </div>

              <button type="submit" onClick={handleSubmit}>
                Register
              </button>
              <div className="register-link">
                <p>
                  Do you already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
