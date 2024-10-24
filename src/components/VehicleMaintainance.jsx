import React, { useState } from "react";
import Header from "./header";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Dashboard from "./Dashboard";
function VehicleMaintainance() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [maintainanceDate, setMaintainanceDate] = useState("");
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
  const handleDateChange = (e) => {
    setMaintainanceDate(e.target.value); // Update the date value
  };
  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{marginLeft:"20px"}}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div class="projectForm bg-light">
              <div>
                <h5 className="title">Vehicle Maintainance</h5>
              </div>
              <div>
                <form>
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
                        style={{backgroundColor:"#f2f5ff"}}
                      />
                    </div>
                  </div>
                  <div className="row mb-3 ">
                    <div className="form-group col-md-3">
                      <label htmlFor="input1">Date of Maintainance</label>
                      <input
                        type="date"
                        className="form-control"
                        id="registrationDate"
                        value={maintainanceDate}
                        onChange={handleDateChange}
                        placeholder="Select registration date"
                        required
                        style={{backgroundColor:"#f2f5ff", color:"grey"}}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="input2">Cost of Maintainance</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2"
                        name="input2"
                        value={formData.input2}
                        onChange={handleChange}
                        placeholder="Enter Input 2"
                        style={{backgroundColor:"#f2f5ff"}}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="input3">Next Schedule Maintainance</label>
                      <input
                        type="date"
                        className="form-control"
                        id="registrationDate"
                        value={maintainanceDate}
                        onChange={handleDateChange}
                        placeholder="Select registration date"
                        required
                        style={{backgroundColor:"#f2f5ff", color:"grey"}}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="input4">Expected Return</label>
                      <input
                        type="date"
                        className="form-control"
                        id="registrationDate"
                        value={maintainanceDate}
                        onChange={handleDateChange}
                        placeholder="Select registration date"
                        required
                        style={{backgroundColor:"#f2f5ff", color:"grey"}}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="form-group col-md-3">
                      <label htmlFor="input3">Reason of Maintainance</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input3"
                        name="input3"
                        value={formData.input3}
                        onChange={handleChange}
                        placeholder="Mention reason here"
                        style={{backgroundColor:"#f2f5ff"}}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="input6">Description Of Work Done</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input4"
                        name="input4"
                        value={formData.input4}
                        onChange={handleChange}
                        placeholder="Description"
                        style={{backgroundColor:"#f2f5ff"}}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="input7">Garage name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input5"
                        name="input5"
                        value={formData.input5}
                        onChange={handleChange}
                        placeholder="Garage Name"
                        style={{backgroundColor:"#f2f5ff"}}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="input8">Kms In</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input6"
                        name="input6"
                        value={formData.input6}
                        onChange={handleChange}
                        placeholder="0km"
                        style={{backgroundColor:"#f2f5ff"}}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="form-group col-md-3">
                      <label htmlFor="input1">Kms Out</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input7"
                        name="input7"
                        value={formData.input7}
                        onChange={handleChange}
                        placeholder="0km"
                        style={{backgroundColor:"#f2f5ff"}}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="col-md-3 d-flex align-items-end">
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
export default VehicleMaintainance;
