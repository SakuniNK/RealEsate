import React from 'react'


function PropertySearch() {
  return (
    <div
            className="overlay-black w-100 slider-banner1 position-relative"
            style={{
              backgroundImage: "url('assets/images/banner/rshmpg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-12">
                  <div className="text-white">
                    <h1 className="mb-4">
                      <span className="text-success">Let us</span>
                      <br />
                      Guide you Home
                    </h1>
                    <form method="post" action="propertygrid.php">
                      <div className="row">
                        <div className="col-md-6 col-lg-2">
                          <div className="form-group">
                            <select className="form-control" name="type">
                              <option value="">Select Type</option>
                              <option value="apartment">Apartment</option>
                              <option value="flat">Flat</option>
                              <option value="building">Building</option>
                              <option value="house">House</option>
                              <option value="villa">Villa</option>
                              <option value="office">Office</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                          <div className="form-group">
                            <select className="form-control" name="stype">
                              <option value="">Select Status</option>
                              <option value="rent">Rent</option>
                              <option value="sale">Sale</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-8 col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="city"
                              placeholder="Enter City"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                          <div className="form-group">
                            <button
                              type="submit"
                              name="filter"
                              className="btn btn-success w-100"
                            >
                              Search Property
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
  )
}

export default PropertySearch
