import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SubmitProperty from './components/SubmitProperty/SubmitProperty'
import Login from './components/LoginForm/Login'
import Register from './components/Register/Register'
// import AllProperties from './components/AllProperties/AllProperties'


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/submitProperty' element={<SubmitProperty />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/properties' element={<Properties />}/>
        {/* <Route path='/allProperties' element={<AllProperties />}/> */}
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}


export default App
