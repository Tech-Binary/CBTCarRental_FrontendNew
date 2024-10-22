import React, { useState, forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function WithoutDriver() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(true);
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
        const vehicleResponse = await axios.get("/api/Vehicle");
        console.log("Vehicle API Response:", vehicleResponse.data);
        
        // Check if the response contains an 'items' array
        if (vehicleResponse.data && Array.isArray(vehicleResponse.data.items)) {
          setVehicles(vehicleResponse.data.items); // Set vehicles to the 'items' array
        } else {
          setVehicles([]); // In case 'items' is not an array, set an empty array
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
    // Directly navigate to the "With Driver" page on toggle
    navigate("/dashboard/with-driver");
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
  const handleBookNowForItem = () => {
    navigate("/dashboard/new-booking");
  };
  console.log("vehicles", vehicles);
  
  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.branchId === 0 &&
      vehicle.vehicleName.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  console.log("filteredVehicles",filteredVehicles);

  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{ marginLeft: "20px" }}>
        <div className="tab-pane fade active show">
          <div className=" projectContainer">
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
                          <option value="0" disabled>
                            Select Location
                          </option>
                          {branches.map((branch) => (
                            <option key={branch.branchId} value={branch.branchId}>
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
                {" "}
                {/* Use g-3 or adjust the number for gap size */}
                {filteredVehicles.length > 0 ? (
                  filteredVehicles.map((vehicle) => (
                    <div className="col-md-4" key={vehicle.vehicleId}>
                      <Card className="car-dash h-100">
                        {" "}
                        {/* Ensure full height cards for equal layout */}
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
                          className="book-btn mt-0"
                          onClick={handleBookNowForItem}
                          type="button"
                        >
                          Book Now
                        </button>
                        <Card.Footer className="w-100 d-flex justify-content-between mt-3 p-1 text-muted">
                          <small>Insurance Exp. {vehicle.insuranceExpiryDate || "N/A"}</small>
                          <small>Registration Exp. {vehicle.registrationExpiryDate || "N/A"}</small>
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

export default WithoutDriver;
