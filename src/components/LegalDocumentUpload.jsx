import React, { useState } from "react";
import axios from "axios";

function LegalDocumentUpload() {
  const [formData, setFormData] = useState({
    vehicleId: "",
    registratingPapers: "",
    registratingPapersExp: "",
    image: null, // To hold the uploaded file
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file, // Set the file in state
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a new FormData object
    const data = new FormData();

    // Append all form fields to FormData
    data.append("vehicleId", formData.vehicleId);
    data.append("registratingPapers", formData.registratingPapers);
    data.append("registratingPapersExp", formData.registratingPapersExp);
    
    // Append the image if it exists
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      // Send the form data using axios POST request
      const response = await axios.post("/api/VehicleDocument", formData, {
        params: {
          vehicleId: 0,
          currentPageNumber: 1,
          pageSize: 50,
        },
        headers: {
          'Content-Type': 'multipart/form-data', // Use multipart/form-data for file uploads
        },
      });
      // Log the success response
      console.log("Legal document data successfully submitted:", response.data);
  
      // Optionally, clear the form or reset state after successful submission
      setFormData({
        vehicleId: "",
        registratingPapers: "",
        registratingPapersExp: "",
        image: null,
      });
    } catch (error) {
      // Log and handle any errors from the submission
      console.error("Error submitting legal document data:", error);
    }
  };

  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{ marginLeft: "20px" }}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div className="projectForm bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="title">Legal Document Upload</h5>
                <button className="upload-btn">+ Add Document</button>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <br />
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        id="vehicleId"
                        name="vehicleId"
                        value={formData.vehicleId}
                        onChange={handleChange}
                        placeholder="Vehicle Id"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3 ">
                    <div className="form-group col-md-3 ">
                      <label htmlFor="registratingPapers">Registrations Papers</label>
                      <input
                        type="text"
                        className="form-control"
                        id="registratingPapers"
                        name="registratingPapers"
                        value={formData.registratingPapers}
                        onChange={handleChange}
                        placeholder="Registrating Papers"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>
                    {/* Fifth input with file upload */}
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="image">Upload Image</label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          onChange={handleFileUpload}
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    {/* Sixth input for Expiration Date */}
                    <div className="form-group col-md-3">
                      <label htmlFor="registratingPapersExp">Exp. Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="registratingPapersExp"
                        name="registratingPapersExp"
                        value={formData.registratingPapersExp}
                        onChange={handleChange}
                        style={{ backgroundColor: "#f2f5ff", color: "grey", marginLeft: "-1px" }}
                      />
                    </div>
                  </div>

                  <br />
                  <div className="col-md-3 flex align-items-end">
                    <button className="assign-loc-btn" type="submit">Save</button>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalDocumentUpload;
