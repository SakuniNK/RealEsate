import React, { useState } from 'react'
import "../HomeMain/HomeMain.css";
import homeImage from '../Includes/img/home.jpg';

function HomeMain() {
  return (
    <div className="main-con">
      <img src={homeImage} className="w-100 backimg" style={{ height: "100vh" }} />
      <div className='backrectangle'>
      </div>
      <div className="text-div hometext">
        <div>
          <h1 className="main-topic-main">Unlock Extraordinary,</h1>
          <h5 className="sub-topic">Property with Exceptional</h5>
          <h5 className="sub-topic">Service</h5>
        </div>
        <div className="btn-div">
          <a className="salebtnhome" href="/submitProperty">
            Sale Your Property
          </a>
          <a className="salebtnhome" href="/properties">
            Buy Best Property
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeMain
