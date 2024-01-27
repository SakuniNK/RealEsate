import React, {useState} from 'react';
import "../LoginForm/Login.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Navbar from "../LoginForm/Navbar";
import Footer from "../LoginForm/Footer";

function Login() {
  return (
    <div>
       <Navbar/>
    <div className='card'> 
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder='Username' required/>
            <FaUserAlt className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot Password</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
            <p>Don't have an account? <a href="/Register">Register</a></p>
        </div>
      </form>
    </div>
    </div>
    <Footer/>
    </div>

  )
}

export default Login
