import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import AllProperties from "./components/AllProperties/AllProperties";

function RecentProperty() {

  // const [property, setProperty] = useState([]);

  // const navigate = useNavigate();

  // const getLatestProperty = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/api/property");
  //     // Get the last 3 properties from the response
  //     const latestProperty = response.data.slice(-3);
  //     setProperty(latestProperty);
  //   } catch (error) {
  //     console.error("Error fetching property:", error);
  //   }
  // };

  // useEffect(() => {
  //   getLatestProperty();
  // }, []);

  // const handleSeeMoreClick = () => {
  //   // Use navigate to go to the AllProperties page
  //   navigate("/allProperties");
  // };

  return (
    <div className="full-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-secondary double-down-line text-center mb-4">
              Recent Property
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
                  
                {/* {property.map((property, index) => ( */}
                      <div key="" className="col-md-6 col-lg-4">
                        <div className="featured-thumb hover-zoomer mb-4">
                          <div className="overlay-black overflow-hidden position-relative">
                            <img
                              src=""
                              alt="pimage"
                              height={260}
                            />
                            <div className="featured bg-success text-white">
                              New
                            </div>
                            <div className="sale bg-success text-white text-capitalize">
                              For 
                            </div>
                            <div className="price text-primary">
                              <b>Rs. </b>
                              <span className="text-white">
                                {/* {property.category} */}
                              </span>
                            </div>
                          </div>
                          <div className="featured-thumb-data shadow-one">
                            <div className="p-3">
                              <h5 className="text-secondary hover-text-success mb-2 text-capitalize">
                                <a href="">
                                  {/* {property.title} */}
                                </a>
                              </h5>
                              <span className="location text-capitalize">
                                <i className="fas fa-map-marker-alt text-success"></i>{" "}
                                {/* {property.location} */}
                              </span>
                            </div>
                            <div className="bg-gray quantity px-4 pt-4">
                              <ul>
                                {/* <li>
                  <span>size</span> Sqft
                </li> */}
                                <li>
                                  <span></span> Beds
                                </li>
                                <li>
                                  <span></span> Baths
                                </li>
                                <li>
                                  <span></span> Kitchen
                                </li>
                                <li>
                                  <span></span> Hall
                                </li>
                              </ul>
                            </div>
                            <div className="p-4 d-inline-block w-100">
                              <div className="float-left text-capitalize">
                                <i className="fas fa-user text-success mr-1"></i>
                                By
                                {/* : {property.owner} */}
                              </div>
                              <div className="float-right">
                                {/* <i className="far fa-calendar-alt text-success mr-1"></i>{" "} */}
                                {/* {new Date(property.date).toLocaleDateString()} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/* ))} */}

                </div>
                <center>
                  <button className="btn btn-outline-primary load-more mt-4"  >
                    See more
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProperty;