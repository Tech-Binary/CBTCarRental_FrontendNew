import React, { useState } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function VehicleInternalreport() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleVehiclereport = () => {
    navigate("/dashboard/vehicleinternal-report");
  };

  const handleAddVehicle = () => {
    navigate("/dashboard/add-vehicle");
  };
  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content"style={{marginLeft:"20px"}}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div class="scroll-container">
              <div className="projectForm bg-light">
                <div className=" d-flex justify-content-between align-items-center">
                  <h5 className="title">Vehicle Report</h5>
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
                      Download All Vehicle Details
                    </button>
                    <button className="addVehicle-btn"
                    onClick={handleAddVehicle}
                    > + Add Vehicle</button>
                  </div>
                </div>
<br/>
                <div className="row">
                  <div className="col-md-4 ">
                    <Card className="red-car" >
                      <Card.Body>
                        {/* Milage and Price Badge Row */}
                        <Row className="mb-2">
                          <Col>
                            <span>Milage: 23.5 kms</span>
                          </Col>
                          <Col className="text-end">
                            <span className="price-badge">$65/kms</span>
                          </Col>
                        </Row>

                        {/* Car Image */}
                        <div className="text-center">
                          <Image
                            src="/assets/images/redcar.png"
                            className="car-image mt-3"
                            alt="Car"
                            fluid
                          />
                        </div>

                        {/* Car Title */}
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title mt-5">
                            <strong>X5 xDrive 30d Sport</strong>
                          </h5>

                          <img
                            src="/assets/images/icons/bmw.png"
                            className="mt-4 pt-3"
                            alt="BMW logo"
                          />
                        </div>

                        {/* Icons and Badges */}
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="icon-group">
                            <img
                              src="/assets/images/leaf.png"
                              className="icon-img "
                              style={{
                                backgroundColor: "white",
                                marginRight: "4px",
                                borderRadius: "2px",
                                paddingLeft: "4px",
                                height: "20px",
                                paddingTop: "2px",
                              }}
                            />
                            <img
                              src="/assets/images/locationr.png"
                              className="icon-img"
                              style={{
                                backgroundColor: "white",
                                marginRight: "4px",
                                borderRadius: "2px",
                                paddingLeft: "4px",
                                height: "20px",
                                paddingTop: "2px",
                              }}
                            />
                            <img
                              src="/assets/images/bluetth.png"
                              className="icon-img"
                              style={{
                                backgroundColor: "white",
                                marginRight: "4px",
                                borderRadius: "2px",
                                paddingLeft: "4px",
                                height: "20px",
                                paddingTop: "2px",
                              }}
                            />
                            <span
                              className="badge "
                              style={{
                                backgroundColor: "white",
                                color: "#13204D",
                                marginRight: "5px",
                                borderRadius:"3px",
                              }}
                            >
                              Hatchback
                            </span>
                            <img
                              src="/assets/images/icons/editp.svg"
                              className="icon-btn"
                              style={{
                                border: "1px solid #3486A8", // Blue border
                                borderRadius: "4px", // Optional: Adds rounded corners to the border
                                padding: "2px",
                                marginRight: "5px", // Adds some padding between the border and icon
                              }}
                            />
                            <img
                              src="/assets/images/icons/bin.svg"
                              className="icon-btn"
                              style={{
                                border: "1px solid #FF2942", // Blue border
                                borderRadius: "4px", // Optional: Adds rounded corners to the border
                                padding: "3px", 
                                height:"20px",
                                width:"19px"
                              }}
                            />
                          </div>
                        </div>

                        {/* Additional Info */}
                        <p className="small  mt-2 mb-2 custom-color">
                          <strong>BMW X5 xDrive 30d Sport (Hatchback)</strong>
                        </p>
                        <hr />
                        <Row className="d-flex justify-content-between mb-3">
                          <Col>
                            <span className="small custom-color">
                              Vehicle ID: 2
                            </span>
                          </Col>
                          <Col className="text-end">
                            <span className="small custom-color">
                              RJ14CQ2016
                            </span>
                          </Col>
                        </Row>

                        {/* Download Button */}
                        <button className="driver-btn w-100"
                        type="button"
                        onClick={handleVehiclereport}
                        >
                          Download Reports
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Repeat similar blocks for other columns */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VehicleInternalreport;
