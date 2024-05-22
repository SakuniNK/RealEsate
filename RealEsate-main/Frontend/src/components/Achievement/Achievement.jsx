import React from 'react'

function Achievement() {
  return (
    <div
            className="full-row overlay-secondary"
            style={{
              backgroundImage: "url('images/breadcromb.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="fact-counter">
                <div className="row">
                  <div className="col-md-3">
                    <div
                      className="count wow text-center mb-sm-50"
                      data-wow-duration="300ms"
                    >
                      <i
                        className="flaticon-house flat-large text-white"
                        aria-hidden="true"
                      ></i>
                      {/* <div className="count-num text-success my-4" data-speed="3000" data-stop={propertyCount}>{propertyCount}</div> */}
                      <div className="text-white h5">Property Available</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="count wow text-center mb-sm-50"
                      data-wow-duration="300ms"
                    >
                      <i
                        className="flaticon-house flat-large text-white"
                        aria-hidden="true"
                      ></i>
                      {/* <div className="count-num text-success my-4" data-speed="3000" data-stop={salePropertyCount}>{salePropertyCount}</div> */}
                      <div className="text-white h5">
                        Sale Property Available
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="count wow text-center mb-sm-50"
                      data-wow-duration="300ms"
                    >
                      <i
                        className="flaticon-house flat-large text-white"
                        aria-hidden="true"
                      ></i>
                      {/* <div className="count-num text-success my-4" data-speed="3000" data-stop={rentPropertyCount}>{rentPropertyCount}</div> */}
                      <div className="text-white h5">
                        Rent Property Available
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="count wow text-center mb-sm-50"
                      data-wow-duration="300ms"
                    >
                      <i
                        className="flaticon-man flat-large text-white"
                        aria-hidden="true"
                      ></i>
                      {/* <div className="count-num text-success my-4" data-speed="3000" data-stop={userCount}>{userCount}</div> */}
                      <div className="text-white h5">Registered Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Achievement
