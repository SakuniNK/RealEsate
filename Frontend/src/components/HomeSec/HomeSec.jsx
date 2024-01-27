
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
                <h1 className="highest_text">GO WHERE YOU FEEL MOST ALIVE.</h1>
                <p className="lorem_text">
                  Welcome to "Guide Me," your ultimate tour guide to Sri
                  Lanka.Our website is dedicated to helping you create
                  extraordinary and personalized travel experiences that
                  resonate with your soul. From the sun-kissed beaches of the
                  southern coast to the misty mountains of the central
                  highlands, and the ancient ruins steeped in history to the
                  vibrant cultural festivals, Sri Lanka has something to offer
                  every traveler's unique passions and interests.
                </p>
                <div className="read_bt">
                  <a href="/gig">PLAN YOUR TRIP</a>
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
                <h1 className="care_text">PLAN YOUR OWN TRIP</h1>
                <p className="ipsum_text">
                  We believe that every traveler is unique, and their journey
                  should reflect their individual tastes and preferences. With
                  our user-friendly tools and comprehensive resources, we put
                  the power in your hands to design a personalized itinerary
                  that suits your interests and schedule. Browse through our
                  curated travel guides, insider tips, and suggested itineraries
                  to get inspired, and then mix and match to create a
                  one-of-a-kind adventure. Whether you crave the thrill of
                  wildlife safaris, the serenity of ancient temples, or the
                  bliss of sandy beaches, "Guide Me" will assist you in crafting
                  the perfect trip.
                </p>
                <div className="read_bt">
                  <a href="#">PLAN YOUR TRIP</a>
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
