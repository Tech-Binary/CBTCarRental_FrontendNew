import React, { useState, forwardRef, useEffect } from "react";
import "primeicons/primeicons.css";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import Card from "react-bootstrap/Card";
import api from "./api";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button components

function DriverAvailability() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          'api/Driver',
          {
            params: {
              branchId: 0,
              currentPageNumber: 1,
              pageSize: 50,
              orderByColNum: 1,
            },
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log("Vehicle API Response:", response.data);
        if (response.data && Array.isArray(response.data.items)) {
          setDrivers(response.data.items);
        } else {
          setDrivers([]);
        }
        if (response.data && Array.isArray(response.data.items)) {
          setVehicles(response.data.items);
        } else {
          setVehicles([]);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  console.log("drivers", drivers);
  const filteredDrivers = drivers.filter((driver) =>
    driver.driverName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("filteredDrivers", filteredDrivers);

  console.log("vehicles", vehicles);

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.branchId === 0 &&
      vehicle.vehicleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("filteredVehicles", filteredVehicles);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (newState) {
      // Navigate to the "Without Driver" page
      navigate("/dashboard/without-driver");
    }
  };

  const handleBookNow = () => {
    navigate("/dashboard/new-booking");
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Custom input for DatePicker
  const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <div className="date-input-wrapper">
      <input
        className="date-input"
        value={value || ""}
        onClick={onClick}
        readOnly
        ref={ref}
        placeholder={placeholder}
      />
      <Calendar className="date-icon" onClick={onClick} />
    </div>
  ));
  drivers.map((driver) => (
    <Card
      key={driver.driverId}
      onClick={() => handleShowModal(driver, null)}
    ></Card>
  ));

  {
    vehicles.map((vehicle) => (
      <Card
        key={vehicle.vehicleId}
        onClick={() => handleShowModal(null, vehicle)}
      ></Card>
    ));
  }

  const handleShowModal = (driver, vehicle) => {
    setSelectedDriver(driver); // Set the selected driver
    setSelectedVehicle(vehicle); // Set the selected vehicle
    setShowModal(true); // Open the modal
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{ marginLeft: "20px" }}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div className="projectForm bg-light">
              <div className="projectTableHeading d-flex justify-content-between align-items-center">
                <div className="fixed-filter pt-0">
                  <div className="date-filter-container">
                    <div className="date-input-group">
                      <label htmlFor="fromDate" className="input-label">
                        Date
                      </label>
                      <div className="date-input-wrapper">
                        <DatePicker
                          selected={fromDate}
                          onChange={(date) => setFromDate(date)}
                          selectsStart
                          startDate={fromDate}
                          endDate={toDate}
                          minDate={today}
                          placeholderText="From"
                          customInput={<CustomInput />}
                        />
                      </div>

                      <div className="date-input-wrapper">
                        <DatePicker
                          selected={toDate}
                          onChange={(date) => setToDate(date)}
                          selectsEnd
                          startDate={fromDate}
                          endDate={toDate}
                          minDate={fromDate || today}
                          placeholderText="To"
                          customInput={<CustomInput placeholder="To" />}
                        />
                      </div>

                      <button className="availability-btn me-1">
                        Show Availability
                      </button>
                    </div>

                    <div
                      className="switch-container ms-3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <span
                        style={{
                          marginRight: "10px",
                          color: isChecked ? "#999" : "#000",
                          fontWeight: isChecked ? "normal" : "bold",
                        }}
                      >
                        With Driver
                      </span>
                      <label
                        className="switch"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: "60px",
                          height: "34px",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleToggle}
                          style={{ opacity: 0, width: 0, height: 0 }}
                        />
                        <span className="slider">
                          <span
                            className="knob"
                            style={{
                              transform: isChecked
                                ? "translateX(26px)"
                                : "translateX(0px)",
                            }}
                          />
                        </span>
                      </label>
                      <span
                        style={{
                          marginLeft: "10px",
                          color: isChecked ? "#000" : "#999",
                          fontWeight: isChecked ? "bold" : "normal",
                        }}
                      >
                        Without Driver
                      </span>
                    </div>
                  </div>

                  <button className="filter-btn">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/filter.png`}
                      alt="Filter"
                    />
                  </button>
                </div>
              </div>

              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                  src="/assets/images/icons/Find.png"
                  alt="Search Icon"
                  className="search_icon"
                />
              </div>

              <div className="row g-2">
                {filteredDrivers.length > 0 ? (
                  filteredDrivers.map((driver) => (
                    <div className="col-md-4 ">
                      <Card
                        className="car-driver"
                        style={{ border: "1.15px solid #8DD3FF4D" }}
                      >
                        <div className="d-flex flex-row  align-items-between">
                          {/* Image Section */}
                          <div
                            className="col-md-4 driverimg"
                            style={{
                              background:
                                "linear-gradient(180.08deg, #BAE5F8 -30.35%, rgba(186, 229, 248, 0) 118.53%)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {/* Assuming you will insert an image here */}
                            <Card.Img
                              variant="left"
                              src="/assets/images/avlbldriver.png"
                              style={{ width: "85%" }}
                              alt="Driver Image"
                            />
                          </div>

                          {/* Text Content Section */}
                          <div
                            className="col-md-8 d-flex flex-column justify-content-start "
                            style={{ background: "#FBFEFF" }}
                          >
                            <Card.Body>
                              <p className="mb-2 text-start">
                                Driver's Name:{" "}
                                <strong>{driver.driverName}</strong>
                              </p>
                              <p className="mb-2 text-start">
                                Total Trips Covered:{" "}
                                <strong>{driver.tripsCovered}</strong>
                              </p>
                              <p className="mb-2 text-start">
                                Total Experience:{" "}
                                <strong>{driver.experience}</strong>
                              </p>
                              <div className="d-flex align-items-start mb-2">
                                <span>Live Status:</span>
                                <span className="rnd-nscs d-flex align-items-center">
                                  <img
                                    src="/assets/images/notavailable.png"
                                    alt="Available"
                                    className="me-1"
                                  />
                                  <span className="text-danger">
                                    {driver.liveStatus || "Available"}
                                  </span>
                                </span>
                              </div>
                              <a
                                href="#"
                                className="d-flex align-items-center mt-3"
                                style={{ textDecoration: "none" }}
                              >
                                <img
                                  src="/assets/images/icons/download(.).png"
                                  alt="Download"
                                  className="me-3"
                                />
                                <span>Download Details</span>
                              </a>
                            </Card.Body>
                          </div>
                        </div>

                        {/* Footer for Contact and Book Now button */}
                        <Card.Footer
                          className="d-flex justify-content-center"
                          style={{ background: "#FBFEFF" }}
                        >
                          <button
                            className="driver-btn mt-0"
                            type="button"
                            onClick={() => handleShowModal(driver, vehicles)} // Show the modal when button is clicked
                          >
                            Select Driver
                          </button>
                        </Card.Footer>
                      </Card>
                    </div>
                  ))
                ) : (
                  <p>No drivers available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Booking */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Driver and Vehicle Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {/* First row for the vehicle */}
            {selectedVehicle ? (
              <div className="row mb-3">
                {/* Vehicle Image Section */}
                <div className="col-4">
                  <div
                    className="image-container"
                    style={{
                      width: "130px",
                      height: "110px",
                      background:
                        "linear-gradient(180.13deg, #BDE9FB -50.39%, #FEFFFF 105.85%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      border: "1.15px solid #8DD3FF4D",
                    }}
                  >
                    <img
                      src="/assets/images/popupcar.png" // Update with the correct car image path
                      alt="Car"
                      className="img-fluid"
                      style={{ maxWidth: "90%", maxHeight: "90%" }}
                    />
                  </div>
                </div>

                {/* Vehicle Details Section */}
                <div className="col-8 d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between align-items-center">
                    <p style={{ marginBottom: "0" }}>
                      <img
                        src="/assets/images/icons/bmw.png"
                        className="me-2"
                        alt="BMW logo"
                      />
                      <strong>{selectedVehicle.vehicleName}</strong>
                    </p>
                    <p className="text-lg font-bold d-flex align-items-center ">
                      <img
                        src="/assets/images/icons/currency_rupee_circle.svg"
                        alt="Rupee"
                        className="me-2"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <span style={{ color: "#13204DCC" }}>
                        <strong>INR 300/hr</strong>
                      </span>
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: "0" }}>
                      <strong>{selectedVehicle.model}</strong>
                    </p>
                    <p className="text-muted" style={{ marginBottom: "0" }}>
                      Insurance Exp.{selectedVehicle.insuranceNo || "N/A"}
                    </p>
                    <p className="text-muted">
                      Registration Exp.
                      {selectedVehicle.registrationExpire || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p>No vehicle selected</p>
            )}

            <hr style={{ width: "100%", borderTop: "1px solid black" }} />

            {/* Second row for the driver */}
            {selectedDriver ? (
              <div className="row">
                <div className="col-4">
                  <div
                    className="image-container"
                    style={{
                      width: "130px",
                      height: "110px",
                      background:
                        "linear-gradient(180.13deg, #BDE9FB -50.39%, #FEFFFF 105.85%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      border: "1.15px solid #8DD3FF4D",
                    }}
                  >
                    <img
                      src="/assets/images/avlbldriver.png" // Update with the correct driver image path
                      alt="Driver"
                      className="img-fluid"
                      style={{ maxWidth: "90%", maxHeight: "90%" }}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <h5 style={{ marginBottom: "1" }}>Driver Details</h5>
                  <p style={{ marginBottom: "0" }}>
                    Name: <strong>{selectedDriver.driverName}</strong>
                  </p>
                  <p>
                    Experience: <strong>{selectedDriver.experience}</strong>
                  </p>
                </div>
              </div>
            ) : (
              <p>No driver selected</p>
            )}
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <button
            className="cancel-btn mt-0"
            type="button"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            className="booknow-btn mt-0"
            type="button"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DriverAvailability;
