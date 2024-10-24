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
                      <label htmlFor="name">Registrations Papers</label>
                      <input
                        type="text"
                        className="form-control"
                        id="registratingPapers"
                        name="registratingPapers"
                        value={formData.registratingPapers}
                        onChange={handleChange}
                        placeholder="Vehicle Id"
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
                      <label htmlFor="FormSelect">Exp. Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="registratingPapersExp"
                        name="registratingPapersExp"
                        value={formData.registratingPapersExp}
                        onChange={handleChange}
                        placeholder="dd-mm-yyyy"
                        style={{ backgroundColor: "#f2f5ff", color: "grey", marginLeft:"-1px" }}
                      />
                    </div>
                  </div>

                  <br />
                  <div class="col-md-3 flex align-items-end">
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
