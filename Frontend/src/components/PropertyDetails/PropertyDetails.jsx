import React, { useState } from "react";

function PropertyDetails() {
  return (
    
    <div className="full-row">
      <div className="container">
        <div className="row">
          {/* Property Details */}

          <div className="col-lg-8">

            <div className="row">
              <div className="col-md-12">
                <div
                  id="single-property"
                  style={{
                    width: "500px",
                    height: "700px",
                    margin: "30px auto 50px",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="aa"
                  />
                  {/* Slides */}

                  {/* Property Information */}
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="bg-success d-table px-3 py-2 rounded text-white text-capitalize">
                        For {/* Property Type */}
                      </div>
                      <h5 className="mt-2 text-secondary text-capitalize">
                        {/* Property Title */}
                      </h5>
                      <span className="mb-sm-20 d-block text-capitalize">
                        <i className="fas fa-map-marker-alt text-success font-12"></i>{" "}
                        &nbsp;{/* Property Location */}
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="text-success text-left h5 my-2 text-md-right">
                        ${/* Property Price */}
                      </div>
                      <div className="text-left text-md-right">Price</div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="property-details">
                    <div className="bg-gray property-quantity px-4 pt-4 w-100">
                      <ul>
                        <li>
                          <span className="text-secondary">
                            {/* Property Area */}
                          </span>{" "}
                          Bedroom
                        </li>
                        <li>
                          <span className="text-secondary">
                            {/* Property Area */}
                          </span>{" "}
                          Bathroom
                        </li>
                        <li>
                          <span className="text-secondary">
                            {/* Property Area */}
                          </span>{" "}
                          Kitchen
                        </li>
                        <li>
                          <span className="text-secondary">
                            {/* Property Area */}
                          </span>{" "}
                          Hall
                        </li>
                      </ul>
                    </div>
                    <h4 className="text-secondary my-4">Description</h4>
                    <p>{/* Property Description */}</p>

                    <h5 className="mt-5 mb-4 text-secondary">
                      Property Summary
                    </h5>
                    <div className="table-striped font-14 pb-2">
                      <table className="w-100">
                        <tbody>
                          <tr>
                            <td>Property Type :</td>
                            <td className="text-capitalize">
                              {/* BHK Value */}
                            </td>
                            <td>Category :</td>
                            <td className="text-capitalize">
                              {/* BHK Value */}
                            </td>
                          </tr>
                          <tr>
                            <td>Location :</td>
                            <td className="text-capitalize">
                              {/* BHK Value */}
                            </td>
                            <td>Price :</td>
                            <td className="text-capitalize">
                              {/* BHK Value */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}

          <div className="col-lg-4">
        {/* Instalment Calculator */}
        <h4 className="double-down-line-left text-secondary position-relative pb-4 my-4">
          Instalment Calculator
        </h4>
        <form className="d-inline-block w-100" >
          <label className="sr-only">Property Amount</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input
              type="text"
              className="form-control"
              name="amount"
              placeholder="Property Price"
              value=""
              onChange=""
            />
          </div>

          <label className="sr-only">Month</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="far fa-calendar-alt"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              name="month"
              placeholder="Duration Year"
            />
          </div>

          <label className="sr-only">Interest Rate</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">%</div>
            </div>
            <input
              type="text"
              className="form-control"
              name="interest"
              placeholder="Interest Rate"
            />
          </div>

          <button type="submit" className="btn btn-danger mt-4">
            Calculate Instalment
          </button>
        </form>

       
      </div>

        </div>
      </div>
    </div>
    
  );
}

export default PropertyDetails;
