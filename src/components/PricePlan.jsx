import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Select from "react-select";
import { Dropdown } from "primereact/dropdown";

function PricePlan() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [vehiclename, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption); // Set the selected option
  };
  const handleNameChange = (e) => setName(e.target.value);
  return (
    
      
      <div
        className="tab-pane fade active show"
        id="price-plan"
        role="tabpanel"
        
      >
    
        <div className="tab-content" style={{marginLeft:"20px"}}>
        <div className="tab-pane fade active show">       
        <div className="projectcontainer">
          <div className="projectForm bg-light">
            <div className=" d-flex justify-content-between align-items-center">
              <h5 className="title">Price Plan</h5>
            </div>
            <form>
              <div class="row mb-3">
                <div class="col-md-3">
                  <div className="form-group">
                    <label htmlFor="name">Vehicle ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={vehiclename}
                      onChange={handleNameChange}
                      placeholder="Vehicle Id"
                      required
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div className="form-group">
                    <label htmlFor="fuel">Within City</label>
                    <Select
                      id="options"
                      value={selectedOption} // Bind the selected value to state
                      onChange={handleOptionChange} // Handle the change event
                      options={options} // Options array for Option 1, 2, 3
                      placeholder="city"
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />

                    {selectedOption && (
                      <div className="alert alert-info mt-3">
                        Selected Option: {selectedOption.label}
                      </div>
                    )}
                  </div>
                </div>
                <div class="col-md-3">
                  <div className="form-group">
                    <label htmlFor="fuel">Outside City</label>
                    <Select
                      id="options"
                      value={selectedOption} // Bind the selected value to state
                      onChange={handleOptionChange} // Handle the change event
                      options={options} // Options array for Option 1, 2, 3
                      placeholder="city"
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />

                    {selectedOption && (
                      <div className="alert alert-info mt-3">
                        Selected Option: {selectedOption.label}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="fuel">Per Kms</label>
                    <Select
                      id="options"
                      value={selectedOption} // Bind the selected value to state
                      onChange={handleOptionChange} // Handle the change event
                      options={options} // Options array for Option 1, 2, 3
                      placeholder="0km"
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />

                    {selectedOption && (
                      <div className="alert alert-info mt-3">
                        Selected Option: {selectedOption.label}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div class="row ">
                <div class="col-md-3">
                  <div className="form-group">
                    <label htmlFor="fuel">Airport Transfer</label>
                    <Select
                      id="options"
                      value={selectedOption} // Bind the selected value to state
                      onChange={handleOptionChange} // Handle the change event
                      options={options} // Options array for Option 1, 2, 3
                      placeholder="city"
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />

                    {selectedOption && (
                      <div className="alert alert-info mt-3">
                        Selected Option: {selectedOption.label}
                      </div>
                    )}
                  </div>
                </div>
                <div class="col-md-3">
                  <div className="form-group">
                    <label htmlFor="fuel">
                      One Way(For short distance) or Return
                    </label>
                    <Select
                      id="options"
                      value={selectedOption} // Bind the selected value to state
                      onChange={handleOptionChange} // Handle the change event
                      options={options} // Options array for Option 1, 2, 3
                      placeholder="city"
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />

                    {selectedOption && (
                      <div className="alert alert-info mt-3">
                        Selected Option: {selectedOption.label}
                      </div>
                    )}
                  </div>
                </div>
                <div class="col-md-3">
                  <div className="form-group">
                    <label htmlFor="name">
                      Corporate Discount(in percentage)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={vehiclename}
                      onChange={handleNameChange}
                      placeholder="Vehicle Id"
                      required
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />
                  </div>
                </div>
              </div>
              <br/>
              <div class="col-md-3 d-flex align-items-end">
                <button class="assign-loc-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    
  );
}
export default PricePlan;
