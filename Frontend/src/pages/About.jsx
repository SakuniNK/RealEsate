import React from "react";
import Agents from "../components/Agents/Agents";
import aboutImage from '../components/Includes/img/about.jpg';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <Navbar/>
      <div id="page-wrapper">
        <div className="row">
          {/* Header start */}
          {/* Include the header content here */}
          {/* Header end */}

          {/* Banner */}
          {/* 
                <div className="banner-full-row page-banner" style={{ backgroundImage: "url('images/breadcromb.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="page-name float-left text-white text-uppercase mt-1 mb-0"><b>About US</b></h2>
                            </div>
                            <div className="col-md-6">
                                <nav aria-label="breadcrumb" className="float-left float-md-right">
                                    <ol className="breadcrumb bg-transparent m-0 p-0">
                                        <li className="breadcrumb-item text-white"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                */}
          {/* Banner */}

          {/* FOR MORE PROJECTS visit: codeastro.com */}

          {/* About Our Company */}
          <div className="full-row">
            <div className="container">
              <div key="" className="row">
                <div className="col-md-12 col-lg-12">
                  <h3 className="double-down-line-left text-secondary position-relative pb-4 mb-4">
                    About Us
                  </h3>
                </div>
              </div>
              <div className="row about-company" style={{ padding: "5px" }}>
                <div className="col-md-12 col-lg-7"  style={{ padding: "80px" }}>
                  <div className="about-content">Welcome to RealMetrix, where we redefine the real estate experience. 
                  Committed to turning your property aspirations into reality, 
                  we pride ourselves on a client-centric approach that combines industry expertise with a personalized touch.
                   Our seasoned team of real estate professionals is dedicated to navigating you through the intricacies of buying, selling, or investing,
                    ensuring a seamless and rewarding journey. At RealMetrix, we don't just facilitate transactions; 
                    we build relationships and create lasting impressions. Your dream home is not just a destination; 
                  it's a reflection of you, and we're here to guide you every step of the way.</div>
                </div>
                <div className="col-md-12 col-lg-5 mt-5"  style={{ padding: "-500px" }}>
                  <div className="about-img">
                  <img
                    src={aboutImage}
                    className="w-100 backimg"
                    style={{ width: "750px", height: "auto", objectFit: "cover" }}
                    alt="About"
                 />

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Our Company */}

          {/* Why Choose Us */}
          <div
            className="full-row living bg-one overlay-secondary-half"
            style={{
              backgroundImage: "url('assets/images/01.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="living-list pr-4">
                    <h3 className="pb-4 mb-3 text-white">Why Choose Us</h3>
                    <ul>
                      <li className="mb-4 text-white d-flex">
                        <i
                          className="flaticon-reward flat-medium float-left d-table mr-4 text-success"
                          aria-hidden="true"
                        ></i>
                        <div className="pl-2">
                          <h5 className="mb-3">Top Rated</h5>
                          <p>
                          Choose excellence and reliability with our top-rated services. 
                          Our commitment to quality and customer satisfaction has earned us a reputation that speaks for itself. 
                          Join a community of satisfied clients who have experienced the best.
                          </p>
                        </div>
                      </li>
                      <li className="mb-4 text-white d-flex">
                        <i
                          className="flaticon-real-estate flat-medium float-left d-table mr-4 text-success"
                          aria-hidden="true"
                        ></i>
                        <div className="pl-2">
                          <h5 className="mb-3">Experience Quality</h5>
                          <p>
                          Elevate your expectations and experience unparalleled quality with our services. 
                          We take pride in delivering top-notch solutions that not only meet but exceed your expectations.
                          Discover a level of excellence that sets us apart from the rest.
                          </p>
                        </div>
                      </li>
                      <li className="mb-4 text-white d-flex">
                        <i
                          className="flaticon-seller flat-medium float-left d-table mr-4 text-success"
                          aria-hidden="true"
                        ></i>
                        <div className="pl-2">
                          <h5 className="mb-3">Experienced Agents</h5>
                          <p>
                          Rely on the expertise of our seasoned professionals.
                           Our experienced agents bring a wealth of knowledge and skills to the table, 
                           ensuring that you receive the guidance and support you need.
                           Trust in a team that understands the intricacies of your needs.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Why Choose Us */}

          {/* Header One */}
          {/* Header start */}
          {/* Include the header content here */}
          {/* Header end */}

          {/* Banner */}
          {/*
                <div className="banner-full-row page-banner" style={{ backgroundImage: "url('images/breadcromb.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="page-name float-left text-white text-uppercase mt-1 mb-0"><b>Agent</b></h2>
                            </div>
                            <div className="col-md-6">
                                <nav aria-label="breadcrumb" className="float-left float-md-right">
                                    <ol className="breadcrumb bg-transparent m-0 p-0">
                                        <li className="breadcrumb-item text-white"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Agent</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                */}
          {/* Banner */}

          <Agents/>

          <div className="full-row">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-secondary double-down-line text-center mb-5">
                    How It Work
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="icon-thumb-one text-center mb-5">
                    <div className="bg-success text-white rounded-circle position-absolute z-index-9">
                      1
                    </div>
                    <div className="left-arrow">
                      <i
                        className="flaticon-investor flat-medium icon-success"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h5 className="text-secondary mt-5 mb-4">Discussion</h5>
                    <p>
                    Engage in meaningful discussions that foster collaboration and ideation. 
                    Our platform provides a space for open dialogues, allowing you to share insights, exchange ideas, 
                    and connect with like-minded individuals. 
                    Join the conversation and be a part of a community that values diverse perspectives.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-thumb-one text-center mb-5">
                    <div className="bg-success text-white rounded-circle position-absolute z-index-9">
                      2
                    </div>
                    <div className="left-arrow">
                      <i
                        className="flaticon-search flat-medium icon-success"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h5 className="text-secondary mt-5 mb-4">Files Review</h5>
                    <p>
                    Seamlessly manage and review your files with our intuitive platform. 
                    Whether it's documents, images, or multimedia, our streamlined system ensures efficient organization and easy accessibility. 
                    Take control of your data and experience a hassle-free approach to file review and collaboration.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-thumb-one text-center mb-5">
                    <div className="bg-success text-white rounded-circle position-absolute z-index-9">
                      3
                    </div>
                    <div>
                      <i
                        className="flaticon-handshake flat-medium icon-success"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h5 className="text-secondary mt-5 mb-4">Acquire</h5>
                    <p>
                    Acquire the tools and resources you need to excel. 
                    Our platform offers a diverse range of solutions tailored to meet your specific requirements.
                    From innovative technologies to strategic partnerships, we empower you to acquire the assets necessary for success. 
                    Elevate your capabilities and seize opportunities with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer start */}
          {/* Include the footer content here */}
          {/* Footer start */}

          {/* Scroll to top */}
          <a
            href="#"
            className="bg-secondary text-white hover-text-secondary"
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

export default About;
