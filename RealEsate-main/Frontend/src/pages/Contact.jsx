import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomModal from "../components/Modal";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios
      .post("http://localhost:8000/contact/contact/", formData)
      .then((response) => {
        setModalMessage("Message sent successfully");
        setIsModalOpen(true);
      })
      .catch((error) => {
        setModalMessage("Failed to send message");
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div>
      <Navbar />
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
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <textarea
                                    name="msg"
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
            <CustomModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              message={modalMessage}
            />
          </div>
          {/* Contact Information */}

          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7925.505577950238!2d79.95756132007994!3d6.92707956276576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597e0ff3092f%3A0xdf87e378ea445d1!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2snp!4v1658568764228!5m2!1sen!2snp
            "
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
      <Footer />
    </div>
  );
}

export default Contact;
