import React, { useState, forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Card from "react-bootstrap/Card";
import api from "./api";
import axios from "axios";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function WithDriver() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [branchId, setBranchId] = useState(""); // State for selected branch ID
  const [branches, setBranches] = useState([]); // State for branch list
  const [vehicles, setVehicles] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          'api/Vehicle',
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
  
  const handleBranchChange = (e) => {
    setBranchId(e.target.value);
    console.log("Selected Branch ID:", e.target.value);
  };

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (newState) {
      navigate("/dashboard/without-driver");
    }
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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

  const handleBookDriver = () => {
    navigate("/dashboard/driveravailability-page");
  };

  // Filter vehicles where branchId is 0 and the vehicle name includes the search term
  console.log("vehicles", vehicles);

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.branchId === 0 &&
      vehicle.vehicleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("filteredVehicles", filteredVehicles);


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
                      <div className="select-wrapper">
                        <select
                          className="select-location"
                          id="branchId"
                          value={branchId}
                          onChange={handleBranchChange}
                          required
                        >
                          <option value="" disabled>
                            Select Location
                          </option>
                          {branches.map((branch) => (
                            <option
                              key={branch.branchId}
                              value={branch.branchId}
                            >
                              {branch.branchId}
                            </option>
                          ))}
                        </select>
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
                  placeholder="Search by vehicle name"
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
                {filteredVehicles.length > 0 ? (
                  filteredVehicles.map((vehicle) => (
                    <div className="col-md-4" key={vehicle.vehicleId}>
                      <Card className="car-dash h-100">
                        {" "}
                       
                        <div className="d-flex flex-row align-items-between">
                          <div className="col-md-5 justify-content-start p-0">
                            {/* <Card.Img
                variant="left"
                src={vehicle.mainPhoto || "/assets/images/icons/car.png"}
                style={{ width: "100%", marginBottom: "0" }}
               /> */}
                            <Card.Img
                              variant="left"
                              src="/assets/images/icons/car.png"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="col-md-7 d-flex flex-column justify-content-start ms-1 p-0">
                            <Card.Body className="pb-0">
                              <Card.Title className="mb-3 d-flex align-items-center text-start">
                                <img
                                  src="/assets/images/icons/bmw.png"
                                  className="me-2"
                                  alt="BMW logo"
                                />
                                <strong>
                                  {vehicle.vehicleName || "Vehicle Name"}
                                </strong>
                              </Card.Title>
                              <p className="mb-2 text-start">
                                <strong>
                                  {vehicle.model || "Model Information"}
                                </strong>
                              </p>
                              <div className="d-flex align-items-start mb-2">
                                <span>Live Status:</span>
                                <span className="rnd-scs d-flex align-items-center">
                                  <img
                                    src="/assets/images/icons/avlbl.svg"
                                    alt="Available"
                                    className="me-2"
                                  />
                                  <span className="text-success">
                                    {vehicle.liveStatus || "Available"}
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
                                  alt="Download Icon"
                                  className="me-2"
                                  style={{ width: "20px", height: "20px" }}
                                />
                                <span>Download Details</span>
                              </a>
                              <p className="text-lg font-bold mt-3 text-start d-flex align-items-start">
                                <img
                                  src="/assets/images/icons/currency_rupee_circle.svg"
                                  alt="Rupee"
                                  className="me-2 pt-1"
                                  style={{ width: "20px", height: "20px" }}
                                />
                                <span style={{ color: "#13204DCC" }}>
                                  <strong>INR 300/hr</strong>
                                </span>
                              </p>
                            </Card.Body>
                          </div>
                        </div>
                        <button
                          className="driver-btn mt-0"
                          onClick={handleBookDriver}
                          type="button"
                        >
                          Select Driver
                        </button>
                        <Card.Footer className="w-100 d-flex justify-content-between mt-3 p-1 text-muted">
                          <small>
                            Insurance Exp. {vehicle.insuranceNo || "N/A"}
                          </small>
                          <small>
                            Registration Exp.{" "}
                            {vehicle.registrationExpire || "N/A"}
                          </small>
                        </Card.Footer>
                      </Card>
                    </div>
                  ))
                ) : (
                  <div>No vehicles found.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithDriver;
