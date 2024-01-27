import React, {useState} from 'react';
import "../Register/Register.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdContactPhone, MdEmail } from "react-icons/md";
import Navbar from "../Register/Navbar";
import Footer from "../Register/Footer";

function Register() {
  return (
    <div>
      <Navbar/>
      <div className='body-registr'>
        <div className='card-container'>
          <div className='card-registr'>
            <div className='background-image'></div>
            <div className='wrapper-registr'>
      <form action="">
        <h1>Register</h1>
         <div className="input-box-registr">
            <input type="text" placeholder='Username' required/>
            <FaUserAlt className='icon'/>
        </div>
        <div className="input-box-registr">
            <input type="email" placeholder='Email' required/>
            <MdEmail className= 'icon'/>
        </div>
        <div className="input-box-registr">
            <input type="text" placeholder='Password' required/>
            <FaLock className='icon' />
        </div>
        <div className="input-box-registr">
            <input type="password" placeholder='Confirm Password' required/>
            <FaLock className='icon' />
        </div>
        
        <button type="submit">Register</button>
        <div className="register-link-registr">
            <p>Do you already have an account? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Register
