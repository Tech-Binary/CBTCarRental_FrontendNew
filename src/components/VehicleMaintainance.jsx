import React, { useState } from "react";
import axios from "axios"; // Import axios for making API requests
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

function VehicleMaintainance() {
  const [formData, setFormData] = useState({
    vehicleMaintenanceId: 0,
    branchId: 0, // This can be dynamic if needed
    startDate: "",
    cost: "",
    nextDate: "",
    returnDate: "",
    reason: "",
    description: "",
    garageName: "",
    vehicleId: 0, // Adjust as necessary
    statusFlag: true, // Adjust based on form logic
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/api/VehicleMaintainance", formData, {
        headers: {
          "Content-Type": "application/json", // API expects JSON
        },
      });

      console.log("Data submitted successfully:", response.data);
      
      // Optionally reset the form
      setFormData({
        vehicleMaintenanceId: 0,
        branchId: 0,
        startDate: "",
        cost: "",
        nextDate: "",
        returnDate: "",
        reason: "",
        description: "",
        garageName: "",
        vehicleId: 0,
        statusFlag: true,
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{ marginLeft: "20px" }}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div className="projectForm bg-light">
              <div>
                <h5 className="title">Vehicle Maintainance</h5>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
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

                  <div className="row mb-3">
                    <div className="form-group col-md-3">
                      <label htmlFor="startDate">Date of Maintainance</label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        style={{ backgroundColor: "#f2f5ff", color: "grey" }}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="cost">Cost of Maintainance</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cost"
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                        placeholder="Enter cost"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="nextDate">Next Scheduled Maintainance</label>
                      <input
                        type="date"
                        className="form-control"
                        id="nextDate"
                        name="nextDate"
                        value={formData.nextDate}
                        onChange={handleChange}
                        style={{ backgroundColor: "#f2f5ff", color: "grey" }}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="returnDate">Expected Return Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="returnDate"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        style={{ backgroundColor: "#f2f5ff", color: "grey" }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="form-group col-md-3">
                      <label htmlFor="reason">Reason for Maintainance</label>
                      <input
                        type="text"
                        className="form-control"
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Reason for maintainance"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="description">Description of Work Done</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="garageName">Garage Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="garageName"
                        name="garageName"
                        value={formData.garageName}
                        onChange={handleChange}
                        placeholder="Garage Name"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="input6">Kms In</label>
                      <input
                        type="text"
                        className="form-control"
                        id="kmsIn"
                        name="kmsIn"
                        value={formData.kmsIn}
                        onChange={handleChange}
                        placeholder="0km"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="form-group col-md-3">
                      <label htmlFor="kmsOut">Kms Out</label>
                      <input
                        type="text"
                        className="form-control"
                        id="kmsOut"
                        name="kmsOut"
                        value={formData.kmsOut}
                        onChange={handleChange}
                        placeholder="0km"
                        style={{ backgroundColor: "#f2f5ff" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-3 d-flex align-items-end">
                    <button type="submit" className="assign-loc-btn">Save</button>
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
