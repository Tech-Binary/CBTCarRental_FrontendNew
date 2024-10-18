import React, { useState, forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Card from "react-bootstrap/Card";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function WithoutDriver() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const navigate = useNavigate();
  

 
  const handleToggle = () => {
    // Directly navigate to the "With Driver" page on toggle
    navigate('/dashboard/with-driver');
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
  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{marginLeft:"20px"}}>
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
                        <select className="select-location">
                          <option value="">Select Location</option>
                          <option value="location1">Location 1</option>
                          <option value="location2">Location 2</option>
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

              <div className="row">
                <div className="col-md-4 ">
                  <Card className="car-dash">
                    <div className="d-flex flex-row p-2 align-items-between">
                      
                      <div className="col-md-5 justify-content-start pt-5"
                      
                      >
                        <Card.Img
                          variant="left"
                          src="/assets/images/icons/car.png"
                          style={{width:"105%"}}
                        />
                      </div>
                      <div className="col-md-7 d-flex flex-column justify-content-start ms-1">
                        <Card.Body>
                          <Card.Title className="mb-3 d-flex align-items-center text-start">
                            <img
                              src="/assets/images/icons/bmw.png"
                              className="me-2"
                              alt="BMW logo"
                            />
                            <strong>BMW X5</strong>
                          </Card.Title>
                          <p className="mb-2 text-start">
                            <strong>xDrive 30d Sport</strong>
                          </p>
                          <div className="d-flex align-items-start mb-2">
                            <span>Live Status:</span>
                            <span className="rnd-scs d-flex align-items-center">
                              <img
                                src="/assets/images/icons/avlbl.svg"
                                alt="Available"
                                className="me-2"
                              />
                              <span className="text-success">Available</span>
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
                          <p className="text-lg font-bold mt-3 text-start d-flex align-items-start">
                            <img
                              src="/assets/images/icons/currency_rupee_circle.svg"
                              alt="Rupee"
                              className="me-2 pt-1"
                              style={{ width: "20px", height: "20px" }} // Adjust the size as needed
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
                      <small>Insurance Exp. 01-01-2024</small>
                      <small>Registration Exp. 01-01-2024</small>
                    </Card.Footer>
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

export default WithoutDriver;
