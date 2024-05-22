import React, { useState } from 'react'
import HomeMain from '../components/HomeMain/HomeMain';
import HomeSec from '../components/HomeSec/HomeSec';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <Navbar/>
      <HomeMain/>
      <div className="full-row bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-secondary double-down-line text-center mb-5">
                    What We Do
                  </h2>
                </div>
              </div>
              <div className="text-box-one">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-rent text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Selling Service</a>
                      </h5>
                      <p>
                      Effortless property selling with RealMetrix. Our expert team ensures a smooth process from marketing to negotiations. 
                      Trust us for an efficient and effective selling experience.
                      </p>
                    </div>
                  </div>
    
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-list text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Property Listing</a>
                      </h5>
                      <p>
                      Discover your dream home with RealMetrix. 
                      Explore our curated property listings, featuring a range of homes tailored to your preferences. 
                      Your ideal space is just a click away.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-diagram text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Legal Investment</a>
                      </h5>
                      <p>
                      Invest confidently with RealMetrix – legal investment solutions for a secure financial future.
                       Explore compliant opportunities with transparency and peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-diagram text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Legal Investment</a>
                      </h5>
                      <p>
                      Invest confidently with RealMetrix – legal investment solutions for a secure financial future.
                       Explore compliant opportunities with transparency and peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <HomeSec/>
          

    {/* Testimonial */}
    <div className="full-row">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content-sidebar p-4">
                    <div className="mb-3 col-lg-12">
                      {/* <h4 className="double-down-line-left text-secondary position-relative pb-4 mb-4">
                        Feedback
                      </h4> */}
                      <div className="recent-review owl-carousel owl-dots-gray owl-dots-hover-success">
                        <div className="item">
                          <div className="p-4 bg-success down-angle-white position-relative">
                            <p className="text-white">
                              <i className="fas fa-quote-left mr-2 text-white"></i>
                              quote fffffffff.{" "}
                              <i className="fas fa-quote-right mr-2 text-white"></i>
                            </p>
                          </div>
                          <div className="p-2 mt-4">
                            <span className="text-success d-table text-capitalize">
                              user
                            </span>{" "}
                            <span className="text-capitalize">user type</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="p-4 bg-success down-angle-white position-relative">
                            <p className="text-white">
                              <i className="fas fa-quote-left mr-2 text-white"></i>
                              quote fffffffff.{" "}
                              <i className="fas fa-quote-right mr-2 text-white"></i>
                            </p>
                          </div>
                          <div className="p-2 mt-4">
                            <span className="text-success d-table text-capitalize">
                              user
                            </span>{" "}
                            <span className="text-capitalize">user type</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial */}
          <Footer/>
    </div>
  )
}

export default Home
