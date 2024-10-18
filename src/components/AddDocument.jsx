import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { MdOutlineFileUpload } from "react-icons/md";

function AddDocument() {
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
    <div className="tab-pane fade active show"
    id="price-plan"
    role="tabpanel">
      <div className="tab-content">
        <div className="tab-pane fade active show">
          <div className="container pb-0 projectContainer">
            <div className="projectForm bg-light">
              <div className="projectformHeading"></div>
              <h5 className="title">Driver's Document</h5>
              <div>
                <form>
                  <br />
                  <div className="row mb-3">
                    <div className="col-md-3 ms-3">
                      <input
                        type="text"
                        className="form-control"
                        id="input1"
                        name="input1"
                        value={formData.input1}
                        onChange={handleChange}
                        placeholder="Vehicle Id"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 ms-2">
                    <div
                      class="col-md-3"
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="name">National Id</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input2"
                          name="input2"
                          value={formData.input2}
                          onChange={handleChange}
                          placeholder="No Choosen file"
                          style={{ paddingRight: "80px" }} // Add padding to the right for the icon
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
                            right: "27px",
                            top: "49%",
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
                    <div className="col-md-2">
                      <label htmlFor="FormSelect">Exp. Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="expDate"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleChange}
                        placeholder="dd-mm-yyyy"
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
                        <label htmlFor="name">Driver's License</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input3"
                          name="input3"
                          value={formData.input3}
                          onChange={handleChange}
                          placeholder="No Choosen file"
                          style={{ paddingRight: "80px" }} // Add padding to the right for the icon
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
                            right: "27px",
                            top: "49%",
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
                    <div className="col-md-2">
                      <label htmlFor="FormSelect">Exp. Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="expDate"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleChange}
                        placeholder="dd-mm-yyyy"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 ms-2">
                    <div
                      class="col-md-3"
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="name">Other Documents</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input4"
                          name="input4"
                          value={formData.input4}
                          onChange={handleChange}
                          placeholder="No Choosen file"
                          style={{ paddingRight: "80px" }} // Add padding to the right for the icon
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
                            right: "27px",
                            top: "49%",
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
                    <div className="col-md-2">
                      <label htmlFor="FormSelect">Exp.Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="expDate"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleChange}
                        placeholder="dd-mm-yyyy"
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
                        <label htmlFor="name">Upload photo</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input5"
                          name="input5"
                          value={formData.input5}
                          onChange={handleChange}
                          placeholder="No Choosen image"
                          style={{ paddingRight: "80px" }} // Add padding to the right for the icon
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
                            right: "27px",
                            top: "49%",
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
export default AddDocument;
