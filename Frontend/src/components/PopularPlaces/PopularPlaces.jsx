import React from 'react'

function PopularPlaces() {
  return (
    <div className="full-row bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-secondary double-down-line text-center mb-5">
                    Popular Places
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 col-lg-3 pb-1">
                    <div className="overflow-hidden position-relative overlay-secondary hover-zoomer mx-n13 z-index-9">
                      <img src="assets/images/thumbnail4/1.jpg" alt="" />
                      <div className="text-white xy-center z-index-9 position-absolute text-center w-100">
                        <h4 className="hover-text-success text-capitalize">
                          <a href="stateproperty.php?id=1">Olisphis</a>
                        </h4>
                        <span>0 Properties Listed</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 pb-1">
                    <div className="overflow-hidden position-relative overlay-secondary hover-zoomer mx-n13 z-index-9">
                      <img src="assets/images/thumbnail4/2.jpg" alt="" />
                      <div className="text-white xy-center z-index-9 position-absolute text-center w-100">
                        <h4 className="hover-text-success text-capitalize">
                          <a href="stateproperty.php?id=2">Awrerton</a>
                        </h4>
                        <span>0 Properties Listed</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 pb-1">
                    <div className="overflow-hidden position-relative overlay-secondary hover-zoomer mx-n13 z-index-9">
                      <img src="assets/images/thumbnail4/3.jpg" alt="" />
                      <div className="text-white xy-center z-index-9 position-absolute text-center w-100">
                        <h4 className="hover-text-success text-capitalize">
                          <a href="stateproperty.php?id=3">Floson</a>
                        </h4>
                        <span>0 Properties Listed</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 pb-1">
                    <div className="overflow-hidden position-relative overlay-secondary hover-zoomer mx-n13 z-index-9">
                      <img src="assets/images/thumbnail4/4.jpg" alt="" />
                      <div className="text-white xy-center z-index-9 position-absolute text-center w-100">
                        <h4 className="hover-text-success text-capitalize">
                          <a href="stateproperty.php?id=4">Ulmore</a>
                        </h4>
                        <span>0 Properties Listed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PopularPlaces
