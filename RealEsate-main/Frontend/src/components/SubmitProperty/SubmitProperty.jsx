import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

//import "../SubmitProperty/Submit.css"

function SubmitProperty() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [hall, setHall] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const AddPropertyInfo = async () => {
    let formField = new FormData();

    formField.append("title", title);
    formField.append("content", content);
    formField.append("price", price);
    formField.append("location", location);
    formField.append("bedroom", bedroom);
    formField.append("bathroom", bathroom);
    formField.append("hall", hall);
    formField.append("kitchen", kitchen);
    formField.append("type", type);
    formField.append("category", category);
    if (image !== null) {
      formField.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/property/create/",
        formField
      );
      console.log(formField);
      console.log(response.data);
      setMessage("Property submitted successfully!"); // Set success message
      // Optionally, you can clear the form fields after successful submission
      setTitle("");
      setContent("");
      setPrice("");
      setLocation("");
      setBedroom("");
      setBathroom("");
      setHall("");
      setKitchen("");
      setType("");
      setCategory("");
      setImage(null);
    } catch (error) {
      console.error("Error submitting property:", error);
      setMessage("Error submitting property. Please try again."); // Set error message
    }
  };

  return (
    <div id="page-wrapper">
      <Navbar />
      <div className="row">
        <div className="full-row">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-secondary double-down-line text-center">
                  Submit Property
                </h2>
              </div>
            </div>
            <div className="row p-5 bg-white">
              <form
                encType="multipart/form-data"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="description">
                  {/* <h5 className="text-secondary">Basic Information</h5>
                                    <hr /> */}
                  {message && (
                    <div className="mt-3 text-success">
                      <h5>{message}</h5>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Title</label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder="Enter Title"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-form-label">
                          Content
                        </label>
                        <div className="col-lg-9">
                          <textarea
                            className="tinymce form-control"
                            name="content"
                            rows="10"
                            cols="30"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Property Type
                        </label>
                        <div className="col-lg-9">
                          <select
                            className="form-control"
                            required
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
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
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Selling Type
                        </label>
                        <div className="col-lg-9">
                          <select
                            className="form-control"
                            required
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                          >
                            <option value="">Select Status</option>
                            <option value="rent">Rent</option>
                            <option value="sale">Sale</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Bedroom
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="bedroom"
                            value={bedroom}
                            onChange={(e) => setBedroom(e.target.value)}
                            required
                            placeholder="Enter Bathroom (only no 1 to 10)"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Bathroom
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="bathroom"
                            value={bathroom}
                            onChange={(e) => setBathroom(e.target.value)}
                            required
                            placeholder="Enter Bathroom (only no 1 to 10)"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Kitchen
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="kitchen"
                            value={kitchen}
                            onChange={(e) => setKitchen(e.target.value)}
                            required
                            placeholder="Enter Bathroom (only no 1 to 10)"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">Hall</label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="hall"
                            value={hall}
                            onChange={(e) => setHall(e.target.value)}
                            required
                            placeholder="Enter Bathroom (only no 1 to 10)"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">Price</label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            placeholder="Enter Price"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Location
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            placeholder="Enter City"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">Image</label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            name="image"
                            type="file"
                            src={image}
                            onChange={(e) => setImage(e.target.files[0])}
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Submit Property"
                    className="btn btn-info"
                    onClick={AddPropertyInfo}
                    style={{ marginLeft: "200px" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SubmitProperty;
