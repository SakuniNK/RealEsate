
import React, {useEffect} from "react";
import "../HomeSec/homeSec.css";

function HomeSec() {
  return (
    <div>
      <div className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital">
                <h1 className="highest_text">Residential Property Review</h1>
                <p className="lorem_text">
                 Discover urban tranquility in this hidden gem located at the heart of the city.
                 Boasting a modern design flooded with natural light, 
                 this residential property offers spacious interiors, 
                 a dream kitchen, and a master bedroom with panoramic city views. 
                 The open-concept living space extends to a private garden and patio. 
                 Residents enjoy community amenities such as a fitness center and 24/7 security, 
                creating a perfect blend of convenience and serenity for a balanced lifestyle.
                </p>
                <div className="read_bt">
                  <a href="/gig">Buy Your Dream Home Now!</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_2" href="#">
                <img
                  src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600"
                  style={{
                    height: "300px",
                    width: "500px",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="image_3" href="#">
                <img
                  src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600"
                  style={{ height: "300px",
                  width: "500px",
                  borderRadius: "15px", }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="care_taital">
                <h1 className="care_text">Commercial Property Review</h1>
                <p className="ipsum_text">
                Nestled in the bustling business district, 
                this commercial property redefines corporate spaces with its sleek design and functionality. 
                The flexible office layouts, high-tech conference rooms, 
                and well-connected location make it a prime choice for modern businesses. 
                Embracing sustainability, the property incorporates green initiatives, 
                promoting a healthy work environment. 
                With accessibility and a commitment to excellence, 
                this commercial space stands as a symbol of corporate sophistication and 
                responsibility in the heart of the city.
                </p>
                <div className="read_bt">
                  <a href="#">Buy Your Dream Home Now!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSec;
