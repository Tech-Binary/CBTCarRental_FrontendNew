import React, { useState } from "react";
import "./Dashboard.css";
import Dashboard from "./Dashboard";
import { RadioButton } from "primereact/radiobutton";
import { MdOutlineFileUpload } from "react-icons/md";
import { InputText } from "primereact/inputtext";

function DriverInformation({ isSidebarOpen }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
      <div className="tab-content" style={{marginLeft:"25px"}}>
        <div className="tab-pane fade active show">
          <div className=" projectContainer">
            <div className="projectForm bg-light">
              <div>
                <h5 className="title">Driver's Information</h5>
              </div>

              <form className="me-3">
                <div className="row mb-3">
                  <div className="form-group col-md-3">
                    <label htmlFor="input1" >Driver Name</label>
                    <InputText
                      style={{ backgroundColor:"#F8F9FF", }}
                      type="text"
                      className="form-control"
                      id="input1"
                      name="input1"
                      value={formData.input1}
                      onChange={handleChange}
                      placeholder="license plate"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input2">Contact Number</label>
                    <InputText
                      style={{ backgroundColor:"#F8F9FF"}}
                      type="text"
                      className="form-control"
                      id="input2"
                      name="input2"
                      value={formData.input2}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                    />
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
                  <div className="form-group col-md-2">
                    <label htmlFor="FormSelect"style={{marginLeft:"-16px"}}>Exp. Date</label>
                    <InputText
                      style={{
                        color: 'grey',
                        width: "75%",
                        marginLeft: "-17px",
                        borderRadius: "6px",
                        backgroundColor:"#F8F9FF",
                      }}
                      type="date"
                      className="form-control"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleChange}
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>
                <div className="row mb-3">
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
                  <div className="form-group col-md-3">
                    <label htmlFor="input2" style={{marginLeft:"15px"}}>National Id</label>
                    <InputText
                      type="text"
                      className="form-control"
                      id="input5"
                      name="input5"
                      value={formData.input5}
                      onChange={handleChange}
                      placeholder="National id"
                      style={{backgroundColor:"#F8F9FF", marginLeft:"-2px" }}
                    />
                  </div>
                  <div className="form-group col-md-3" >
                    <label htmlFor="input3"style={{marginLeft:"15px"}}>salary</label>
                    <InputText
                      type="text"
                      className="form-control"
                      id="input6"
                      name="input6"
                      value={formData.input6}
                      onChange={handleChange}
                      placeholder="National id"
                      style={{ width: "102%", backgroundColor:"#F8F9FF", marginLeft:"15px", marginLeft:"-2px" }}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="form-group col-md-3">
                    <label htmlFor="input1">Emergency Number</label>
                    <InputText
                      type="text"
                      className="form-control"
                      id="input7"
                      name="input7"
                      value={formData.input7}
                      onChange={handleChange}
                      placeholder="Emergency contact"
                      style={{  backgroundColor:"#F8F9FF"}}
                    />
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

                  <div className="form-group col-md-4">
                    <label className="form-label" style={{marginLeft:"15px"}}>Verifiction:</label>{" "}
                    {/* Label on top */}
                    <div className="row" style={{marginLeft:"1px"}}>
                      <div className="col-md-2 d-flex align-items-center">
                        <RadioButton
                          inputId="yes"
                          name="yes"
                          value="yes"
                          onChange={handleOptionChange}
                          checked={selectedOption === "yes"}
                        />
                        <label htmlFor="yes" className="ml-2" style={{marginLeft:"4px"}}>
                          Yes
                        </label>
                      </div>
                      <div className="col-md-2 d-flex align-items-center">
                        <RadioButton
                          inputId="no"
                          name="no"
                          value="no"
                          onChange={handleOptionChange}
                          checked={selectedOption === "no"}
                        />
                        <label htmlFor="no" className="ml-2" style={{marginLeft:"4px"}}>
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                {/* Driver's Documents */}
                <div>
                  <h5 className="title">Driver's Documents</h5>

                  {/* First Row */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "20px", // Space between first and second row
                    }}
                  >
                    <div>
                      
                      <InputText
                        type="text"
                        placeholder="National ID"
                        style={{ width: "27%", borderRadius:"6px", backgroundColor:"#F8F9FF"}}
                      />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      rowGap: "20px",
                      
                    }}
                  >
                    {/* Document Fields */}
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

                    <div className="form-group col-md-2">
                    <label htmlFor="FormSelect"style={{marginLeft:"10px"}}>Exp. Date</label>
                    <InputText
                      style={{
                        color: 'grey',
                        width: "75%",
                        marginLeft: "10px",
                        borderRadius: "6px",
                        backgroundColor:"#F8F9FF",
                      }}
                      type="date"
                      className="form-control"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleChange}
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                  <div className="col-md-3" style={{marginLeft:"-20px"}}>
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

                    <div className="form-group col-md-2">
                    <label htmlFor="FormSelect"style={{marginLeft:"10px"}}>Exp. Date</label>
                    <InputText
                      style={{
                        color: 'grey',
                        width: "75%",
                        marginLeft: "10px",
                        borderRadius: "6px",
                        backgroundColor:"#F8F9FF",
                      }}
                      type="date"
                      className="form-control"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleChange}
                      placeholder="dd-mm-yyyy"
                    />
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
                    <div className="form-group col-md-2">
                    <label htmlFor="FormSelect"style={{marginLeft:"10px"}}>Exp. Date</label>
                    <InputText
                      style={{
                        color: 'grey',
                        width: "75%",
                        marginLeft: "10px",
                        borderRadius: "6px",
                        backgroundColor:"#F8F9FF",
                      }}
                      type="date"
                      className="form-control"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleChange}
                      placeholder="dd-mm-yyyy"
                    />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",

                      rowGap: "20px",
                      marginTop: "20px",
                    }}
                  >
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
                  </div>
                </div>

                <br />
                <div class="col-md-3 d-flex align-items-end">
                  <button class="assign-loc-btn">Save</button>
                </div>
                <br />
              </form>
              <style>
    {`
      input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
      
      input[type="date"]::-ms-clear {
        display: none;
      }
      
      input[type="date"]::-moz-clear {
        display: none;
      }
    `}
  </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DriverInformation;