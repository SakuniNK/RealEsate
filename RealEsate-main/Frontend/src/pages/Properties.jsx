import React from "react";

import PropertySearch from '../components/PropertySearch/PropertySearch'
import RecentProperty from "../components/PropertySearch/RecentProperty";
import Achievement from "../components/Achievement/Achievement";
import PopularPlaces from "../components/PopularPlaces/PopularPlaces";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Properties() {
  return (
    <div>
      <Navbar/>
      <div id="page-wrapper">
        <div className="row">
          {/* <Navbar/> */}
          <PropertySearch/>
          <RecentProperty/>
          <Achievement/>
          <PopularPlaces/>
          {/* Scroll to top */}
          <a
            href="#"
            className="bg-success text-white hover-text-secondary"
            id="scroll"
          >
            <i className="fas fa-angle-up"></i>
          </a>
          {/* End Scroll To top */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Properties;
