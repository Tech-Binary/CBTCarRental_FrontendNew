import React, { useState } from "react";
import "primeicons/primeicons.css";
import { Card, Row, Col, Image } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function AllDriverReport() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [fromDate, setFromDate] = useState(null); // State for From date
  const [toDate, setToDate] = useState(null); // State for To date
  
  // Toggle handler for the switch
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

 

  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content"style={{marginLeft:"20px"}}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div className="projectForm bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="title">Driver</h5>
                <div className="d-flex float-start">
                  <button className="dwnld-btn">
                    <img
                      src="/assets/images/icons/upplod.svg"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    Download All Driver Details
                  </button>
                  <button className="addVehicle-btn"> + Add Driver</button>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-4 ">
                  <Card className="red-car">
                    <img
                      src="/assets/images/avlbldriver.png" // Use an actual image link or placeholder for the driver's photo
                      alt="Driver"
                      className=" center-img"
                    />

                    <div className="driver-info">
                      <div className="driver-row">
                        <p>Driver's Name:</p>
                        <p className="driver-value">Daniel Hayes</p>
                      </div>

                      <div className="driver-row">
                        <span>Live Status:</span>
                        <span className="rnd-nscs d-flex align-items-center">
                          <img
                            src="/assets/images/notavailable.png"
                            alt="Not Available"
                            className="me-1"
                          />
                          <span className="text-danger">Not Available</span>
                        </span>
                      </div>

                      <hr />

                      <div className="detail-row">
                        <span className="custom-color"><strong>See Details</strong></span>
                        <img
                          src="/assets/images/icons/exportt.svg" // Use the correct path to your export vector/icon
                          alt="Export Icon"
                          className="export-icon"
                        />
                      </div>

                      <div className="driver-row d-flex justify-content-between align-items-end">
                        <div className="driver-info">
                          <div className="trip-row">
                            <p className="driver-label">Total Trips Covered:</p>
                            <p className="driver-value">75 Trips</p>
                          </div>

                          <div className="trip-row">
                            <p className="driver-label">Total Experience:</p>
                            <p className="driver-value">14 Years</p>
                          </div>

                          <div className="trip-row">
                            <p className="driver-label">Est. Return Date:</p>
                            <p className="driver-value">01-01-2024</p>
                          </div>
                        </div>
                      </div>

                      <button className="driver-btn"
                      type="button"
                      
                      >
                        <strong>Download Reports</strong>
                      </button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllDriverReport;
