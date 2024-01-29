import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://your-django-backend/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Message sent successfully");
      } else {
        // Handle error, e.g., show an error message
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div id="page-wrapper">
        <div className="row">
          {/* Header start */}
          {/* Include the header content here */}
          {/* Header end */}

          {/* Contact Information */}
          <div className="full-row">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 mb-5 bg-secondary">
                  <div className="contact-info">
                    <h3 className="mb-4 mt-4 text-white">Contacts</h3>
                    <ul>
                      <li className="d-flex mb-4">
                        {" "}
                        <i className="fas fa-map-marker-alt text-white mr-2 font-13 mt-1"></i>
                        <div className="contact-address">
                          <h5 className="text-white">Address</h5>
                          <span className="text-white">
                           No.18, Passara Road, Badulla.
                          </span>{" "}

                        </div>
                      </li>
                      <li className="d-flex mb-4">
                        {" "}
                        <i className="fas fa-phone-alt text-white mr-2 font-13 mt-1"></i>
                        <div className="contact-address">
                          <h5 className="text-white">Call Us</h5>
                          <span className="d-table text-white">
                          +94 054 6578
                          </span>
                        </div>
                      </li>
                      <li className="d-flex mb-4">
                        {" "}
                        <i className="fas fa-envelope text-white mr-2 font-13 mt-1"></i>
                        <div className="contact-address">
                          <h5 className="text-white">Email Address</h5>
                          <span className="d-table text-white">
                          realmetrix@gmail.com
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-md-12 col-lg-7">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2 className="text-secondary double-down-line text-center mb-5">
                          Get In Touch
                        </h2>
                        {/* $msg and $error variables are used in PHP; replace with your React state if needed */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <form className="w-100" onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="row mb-4">
                              <div className="form-group col-lg-6">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Your Name*"
                                />
                              </div>
                              <div className="form-group col-lg-6">
                                <input
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  placeholder="Email Address*"
                                />
                              </div>
                              <div className="form-group col-lg-6">
                                <input
                                  type="text"
                                  name="phone"
                                  className="form-control"
                                  placeholder="Phone"
                                  maxLength="10"
                                />
                              </div>
                              <div className="form-group col-lg-6">
                                <input
                                  type="text"
                                  name="subject"
                                  className="form-control"
                                  placeholder="Subject"
                                />
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <textarea
                                    name="message"
                                    className="form-control"
                                    rows="5"
                                    placeholder="Type Comments..."
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              value="send message"
                              name="send"
                              className="salebtnhome"
                            >
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Information */}

          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5644.408542716626!2d-117.1523848363907!3d32.73426737275872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95495497f80c9%3A0x5df0f4372635e247!2sSan%20Diego%20Zoo!5e0!3m2!1sen!2snp!4v1658568764228!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Map */}

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

export default Contact;
