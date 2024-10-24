import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineFileUpload } from "react-icons/md";

function AddVehicle() {
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [selectedYear, setSelectedYear] = useState(null);
  const [registrationDate, setRegistrationDate] = useState("");
  const [registrationExpire, setRegistrationExpDate] = useState("");
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [chasisNumber, setChasisNumber] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [vinNo, setVinNo] = useState("");
  const [insuranceNo, setInsuranceNo] = useState("");
  const [lastServiceDate, setLastServiceDate] = useState("");
  const [image, setImage] = useState("");
  const [features, setFeatures] = useState("");
  const [fuels, setFuels] = useState([]);

 
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(currentYear - 1899), (val, index) => ({
    value: 1900 + index,
    label: 1900 + index,
  }));

  // Input change handlers
  const handleNameChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleDateChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    console.log("Selected Manufacturing Year:", selectedOption);
  };

  const handleFuelChange = (selectedOption) => {
    setSelectedFuel(selectedOption);
    console.log("Selected Fuel:", selectedOption);
  };

  const handleVehicleTypeChange = (selectedOption) => {
    setSelectedVehicleType(selectedOption);
    console.log("Selected Vehicle Type:", selectedOption);
  };

  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{ marginLeft: "20px" }}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div className="projectForm bg-light">
              <div className="projectformHeading">
                <h5 className="title">Add Vehicle</h5>
              </div>
              <div className="addvehicleform">
                <form>
                  <div className="row g-3">
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="vehicleName">Vehicle Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="vehicleName"
                          value={vehicleName}
                          onChange={handleNameChange(setVehicleName)}
                          placeholder="Enter name"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="vehicleNumber">Vehicle Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="vehicleNumber"
                          value={vehicleNumber}
                          onChange={handleNameChange(setVehicleNumber)}
                          placeholder="Enter vehicle number"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="registrationDate">
                          Registration Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="registrationDate"
                          value={registrationDate}
                          onChange={handleDateChange(setRegistrationDate)}
                          placeholder="Select registration date"
                          required
                          style={{ backgroundColor: "#f2f5ff", color: "grey" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="registrationExpire">
                          Registration Exp Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="registrationExpire"
                          value={registrationExpire}
                          onChange={handleDateChange(setRegistrationExpDate)}
                          placeholder="Select registration expiry date"
                          required
                          style={{ backgroundColor: "#f2f5ff", color: "grey" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="vehicleType">Vehicle Type</label>
                        <Select
                          id="vehicleType"
                          value={selectedVehicleType}
                          onChange={handleVehicleTypeChange}
                          options={vehicleTypes.map((type) => ({
                            value: type.value,
                            label: type.label,
                          }))}
                          placeholder="Select Vehicle Type"
                          isClearable
                          isSearchable
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="chasisNumber">Chasis Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="chasisNumber"
                          value={chasisNumber}
                          onChange={handleNameChange(setChasisNumber)}
                          placeholder="Enter chasis number"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          value={company}
                          onChange={handleNameChange(setCompany)}
                          placeholder="Enter company name"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input
                          type="text"
                          className="form-control"
                          id="model"
                          value={model}
                          onChange={handleNameChange(setModel)}
                          placeholder="Enter model"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="manufacturingYear">
                          Manufacturing Year
                        </label>
                        <Select
                          id="manufacturingYear"
                          value={selectedYear}
                          onChange={handleYearChange}
                          options={years}
                          placeholder="Select Year"
                          isClearable
                          isSearchable
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="fuel">Fuel</label>
                        <Select
                          id="fuel"
                          value={selectedFuel}
                          onChange={handleFuelChange}
                          options={fuels.map((fuel) => ({
                            value: fuel.value,
                            label: fuel.label,
                          }))}
                          placeholder="Select Fuel"
                          isClearable
                          isSearchable
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="vinNo">VIN No.</label>
                        <input
                          type="text"
                          className="form-control"
                          id="vinNo"
                          value={vinNo}
                          onChange={handleNameChange(setVinNo)}
                          placeholder="Enter VIN number"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="insuranceNo">Insurance No.</label>
                        <input
                          type="text"
                          className="form-control"
                          id="insuranceNo"
                          value={insuranceNo}
                          onChange={handleNameChange(setInsuranceNo)}
                          placeholder="Enter insurance number"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="lastServiceDate">
                          Last Service Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="lastServiceDate"
                          value={lastServiceDate}
                          onChange={handleDateChange(setLastServiceDate)}
                          required
                          style={{ backgroundColor: "#f2f5ff", color: "grey" }}

                        />
                      </div>
                    </div>

                   

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

                    <div class="col-md-3">
                      <div className="form-group">
                        <label htmlFor="name">Features</label>
                        <input
                          type="text"
                          className="form-control"
                          id="features"
                          value={features}
                          onChange={handleNameChange}
                          placeholder="Features"
                          required
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="col-md-3  d-flex align-items-end">
                    <button class="assign-loc-btn">Save</button>
                  </div>
                </form>
                {/* <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="image">Upload Image</label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          onChange={handleFileUpload}
                          style={{ backgroundColor: "#f2f5ff" }}
                        />
                        <MdOutlineFileUpload className="upload-icon" />
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVehicle;
