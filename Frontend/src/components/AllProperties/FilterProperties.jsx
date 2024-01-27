import React, { useState, useEffect } from 'react';

function FilterProperties(props) {
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    // Check if filtered properties are available in props.location.state
    if (props && props.location && props.location.state && props.location.state.filteredProperties) {
      setFilteredProperties(props.location.state.filteredProperties);
    }
  }, [props]);
  

  return (
    <div>
      <div className="full-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-secondary double-down-line text-center mb-4">
                Filtered Properties
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
                    {filteredProperties.map((property, index) => (
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
                              For {property.type}
                            </div>
                            <div className="price text-primary">
                              <b>Rs.{property.price} </b>
                              <span className="text-white">
                                {property.category}
                              </span>
                            </div>
                          </div>
                          <div className="featured-thumb-data shadow-one">
                            <div className="p-3">
                              <h5 className="text-secondary hover-text-success mb-2 text-capitalize">
                                <a href={`/propertydetails/${property.id}`}>
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
                                {/* <li>
                                  <span>size</span> Sqft
                                </li> */}
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterProperties;
