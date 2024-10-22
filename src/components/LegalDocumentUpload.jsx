import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { MdOutlineFileUpload } from "react-icons/md";

function LegalDocumentUpload() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file); // Do something with the file
  };

  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{ marginLeft: "20px" }}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div className="projectForm bg-light">
              <div className="d-flex justify-content-between align-items-center">
  <h5 className="title">Legal Document-Upload</h5>
  <button className="upload-btn">+ Add Document</button>
</div>
              <div>
                <form>
                  <br />
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        id="input1"
                        name="input1"
                        value={formData.input1}
                        onChange={handleChange}
                        placeholder="Vehicle Id"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3 ">
                    <div className="form-group col-md-3 ">
                      <label htmlFor="name">Registrations Papers</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1"
                        name="input1"
                        value={formData.input1}
                        onChange={handleChange}
                        placeholder="Vehicle Id"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>
                    {/* Fifth input with file upload */}
                    <div
                      class="col-md-3"
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="name">Registrations Papers</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input1"
                          name="input1"
                          value={formData.input5}
                          onChange={handleChange}
                          placeholder="No Choosen file"
                          style={{
                            paddingRight: "80px",
                            backgroundColor: "#f2f5ff",
                          }} // Add padding to the right for the icon
                        />
                        {/* File input (hidden) */}
                        <input
                          type="file"
                          id="fileUpload"
                          style={{ display: "none" }}
                          onChange={handleFileUpload}
                        />
                        {/* Icon inside the input field */}
                        <span
                          onClick={() =>
                            document.getElementById("fileUpload").click()
                          } // Trigger file input click
                          style={{
                            position: "absolute",
                            right: "36px",
                            top: "48%",
                            transform: "translateY(-10%)",
                            cursor: "pointer",
                            backgroundColor: "#5896b8", // Background color behind the icon
                            padding: "6px", // Add some padding for the icon background
                            borderRadius: "6px", // Optional: Make the background rounded
                          }}
                        >
                          <MdOutlineFileUpload size={24} />
                        </span>
                      </div>
                    </div>

                    {/* Sixth input for Expiration Date */}
                    <div className="form-group col-md-2">
                      <label htmlFor="FormSelect">Exp. Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="expDate"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleChange}
                        placeholder="dd-mm-yyyy"
                        style={{ backgroundColor: "#f2f5ff", color: "grey", marginLeft:"-35px" }}
                      />
                    </div>
                  </div>

                  <br />
                  <div class="col-md-3 ms-2 d-flex align-items-end">
                    <button class="assign-loc-btn">Save</button>
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
