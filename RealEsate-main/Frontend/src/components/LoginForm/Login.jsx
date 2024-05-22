import React, { useState } from "react";
import "../LoginForm/Login.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdContactPhone, MdEmail } from "react-icons/md";
import Navbar from "../LoginForm/Navbar";
import Footer from "../LoginForm/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [token, setToken] = useCookies(["token"]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username: formData.email,
        password: formData.password,
      });
      setToken("token", response);
      console.log(response.data); // Handle successful login

      // Redirect to home page upon successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response.data); // Handle login error

      // Set the error message in state
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="card">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <div className="input-box">
              <input
                type="text"
                name="email"
                placeholder="Username"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="/Register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
