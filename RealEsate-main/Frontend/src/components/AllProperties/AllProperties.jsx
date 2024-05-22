import axios from "axios";
import React, { useState, useEffect } from "react";

function AllProperties() {
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const response = await axios.get("http://localhost:8000/property/");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div>
      <div className="full-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-secondary double-down-line text-center mb-4">
                All Properties
              </h2>
            </div>
            <div className="col-md-12">
              <div className="tab-content mt-4" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home"
                >
                  <div className="row">
                    {properties.map((property, index) => (
                      <div key={property.id} className="col-md-6 col-lg-4">
                        <div className="featured-thumb hover-zoomer mb-4">
                          <div className="overlay-black overflow-hidden position-relative">
                            <img
                              src={property.image}
                              alt="pimage"
                              height={260}
                            />
                            <div className="featured bg-success text-white">
                              New
                            </div>
                            <div className="sale bg-success text-white text-capitalize">
                              For {property.category}
                            </div>
                            <div className="price text-primary">
                              <b>Rs.{property.price} </b>
                              <span className="text-white">
                                {property.type}
                              </span>
                            </div>
                          </div>
                          <div className="featured-thumb-data shadow-one">
                            <div className="p-3">
                              <h5 className="text-secondary hover-text-success mb-2 text-capitalize">
                                <a href="../components/PropertyDetails/PropertyDetails">
                                  {property.title}
                                </a>
                              </h5>
                              <span className="location text-capitalize">
                                <i className="fas fa-map-marker-alt text-success"></i>{" "}
                                {property.location}
                              </span>
                            </div>
                            <div className="bg-gray quantity px-4 pt-4">
                              <ul>
                                \
                                <li>
                                  <span>{property.bedroom}</span> Beds
                                </li>
                                <li>
                                  <span>{property.bathroom}</span> Baths
                                </li>
                                <li>
                                  <span>{property.kitchen}</span> Kitchen
                                </li>
                                <li>
                                  <span>{property.hall}</span> Hall
                                </li>
                              </ul>
                            </div>
                            <div className="p-4 d-inline-block w-100">
                              <div className="float-right"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="row">
                    
                      <div key="" className="col-md-6 col-lg-4">
                        <div className="featured-thumb hover-zoomer mb-4">
                          <div className="overlay-black overflow-hidden position-relative">
                            <img
                              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
                              alt="pimage"
                              height={260}
                            />
                            <div className="featured bg-success text-white">
                              New
                            </div>
                            <div className="sale bg-success text-white text-capitalize">
                              For Sale
                            </div>
                            <div className="price text-primary">
                              <b>Rs. 100,000,000</b>
                              <span className="text-white">
                               House
                              </span>
                            </div>
                          </div>
                          <div className="featured-thumb-data shadow-one">
                            <div className="p-3">
                              <h5 className="text-secondary hover-text-success mb-2 text-capitalize">
                                <a href="">
                                  Sweet Home
                                </a>
                              </h5>
                              <span className="location text-capitalize">
                                <i className="fas fa-map-marker-alt text-success"></i>{" "}
                                Matara
                              </span>
                            </div>
                            <div className="bg-gray quantity px-4 pt-4">
                              <ul>
                        
                                <li>
                                  <span>3</span> Beds
                                </li>
                                <li>
                                  <span>3</span> Baths
                                </li>
                                <li>
                                  <span>1</span> Kitchen
                                </li>
                                <li>
                                  <span>1</span> Hall
                                </li>
                              </ul>
                            </div>
                            <div className="p-4 d-inline-block w-100">
                              
                              <div className="float-right">
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProperties;
