import React, { useState } from "react";
import "./Dashboard.css";
import Dashboard from "./Dashboard";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

function CheckLists() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [ingredients, setIngredients] = useState([]);

  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };
  return (
    <div className="tab-pane fade active show" id="price-plan" role="tabpanel">
      <div className="tab-content" style={{marginLeft:"20px"}}>
        <div className="tab-pane fade active show">
          <div className="projectContainer">
            <div className="projectForm bg-light">
              <div>
                <h5 className="title">Ride Lists</h5>
              </div>

              <div className="row mb-2">
                <div className="form-group col-md-2  d-flex align-items-center">
                  <RadioButton
                    inputId="before"
                    name="befre"
                    value="before"
                    onChange={handleOptionChange}
                    checked={selectedOption === "before"}
                  />
                  <label
                    htmlFor="before"
                    style={{ marginLeft: "4px" }}
                  >
                    Before Ride
                  </label>
                </div>
                <div className="form-group col-md-2 d-flex align-items-center">
                  <RadioButton
                    inputId="after"
                    name="after"
                    value="after"
                    onChange={handleOptionChange}
                    checked={selectedOption === "after"}
                  />
                  <label
                    htmlFor="after"

                    style={{ marginLeft: "4px" }}
                  >
                    After Ride
                  </label>
                </div>
              </div>

              <form className="me-3">
                <div className="row mb-3">
                  <div className="col-md-3">
                    <InputText
                      type="text"
                      className="form-control"
                      id="input1"
                      name="input1"
                      value={formData.input1}
                      onChange={handleChange}
                      placeholder="Vehicle Id"
                      style={{backgroundColor:"#f2f5ff"}}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="form-group col-md-3">
                    <label htmlFor="input1">Odo Meter Readings (inKms) </label>
                    <InputText
                      type="text"
                      className="form-control"
                      id="input2"
                      name="input2"
                      value={formData.input2}
                      onChange={handleChange}
                      placeholder="Meter Reading"
                      style={{backgroundColor:"#f2f5ff"}}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input2">Fuel Level</label>
                    <InputText
                      type="text"
                      className="form-control"
                      id="input3"
                      name="input3"
                      value={formData.input3}
                      onChange={handleChange}
                      placeholder="Fuel Level"
                      style={{backgroundColor:"#f2f5ff"}}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input3">Type Pressure</label>
                    <InputText
                      type="text"
                      className="form-control"
                      id="input4"
                      name="input4"
                      value={formData.input4}
                      onChange={handleChange}
                      placeholder="Type Pressure"
                      style={{backgroundColor:"#f2f5ff"}}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="FormSelect">Date of Readings</label>
                    <InputText
                      type="date"
                      className="form-control"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleChange}
                      placeholder="dd-mm-yyyy"
                      style={{backgroundColor:"#f2f5ff", color:"grey"}}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <h className="form-group col-md-1 pt-2" style={{ color: "skyblue" }}>
                    Car Tools:
                  </h>
                  <div className="form-group col-md-1 d-flex align-items-center">
                    <Checkbox
                      inputId="jack"
                      name="jack"
                      value="jack"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("jack")}
                      style={{ transform: "scale(0.8)"}}
                    />
                    <label htmlFor="jack" style={{marginLeft:"5px"}}>
                      Jack
                    </label>
                  </div>
                  <div className="form-group col-md-2 d-flex align-items-center">
                    <Checkbox
                      inputId="spare"
                      name="spare"
                      value="spare"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("spare")}
                      style={{ transform: "scale(0.8)" }}
                    />
                    <label htmlFor="spare" style={{marginLeft:"5px"}}>
                      Spare Time
                    </label>
                  </div>
                  <div className="form-group col-md-1 d-flex align-items-center">
                    <Checkbox
                      inputId="others1"
                      name="others1"
                      value="others1"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("others1")}
                      style={{ transform: "scale(0.8)" }}
                    />
                    <label htmlFor="others1"style={{marginLeft:"5px"}}>
                      Others
                    </label>
                  </div>
                  <div className="form-group col-md-2">
                    <InputText
                      type="text"
                      className="form-control"
                      id="input5"
                      name="input5"
                      value={formData.input5}
                      onChange={handleChange}
                      placeholder="Type here"
                      style={{backgroundColor:"#f2f5ff"}}

                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <h className="col-md-1 pt-2" style={{ color: "skyblue" }}>
                    Car Tools:
                  </h>
                  <div className="form-group col-md-1 d-flex align-items-center">
                    <Checkbox
                      inputId="aid"
                      name="aid"
                      value="aid"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("aid")}
                      style={{ transform: "scale(0.8)" }}
                    />
                    <label htmlFor="aid" style={{marginLeft:"5px"}}>
                      First Aid
                    </label>
                  </div>
                  <div className="form-group col-md-2 d-flex align-items-center">
                    <Checkbox
                      inputId="fire"
                      name="fire"
                      value="fire"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("fire")}
                      style={{ transform: "scale(0.8)" }} 
                    />
                    <label htmlFor="fire" style={{marginLeft:"5px"}}>
                      Fire Extinguisher
                    </label>
                  </div>
                  <div className="form-group col-md-1 d-flex align-items-center">
                    <Checkbox
                      inputId="others2"
                      name="others2"
                      value="others2"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("others2")}
                      style={{ transform: "scale(0.8)" }}
                    />
                    <label htmlFor="others2" style={{marginLeft:"5px"}}>
                      Others
                    </label>
                  </div>
                  <div className="col-md-2">
                    <InputText
                      type="text"
                      className="form-control"
                      id="input6"
                      name="input6"
                      value={formData.input6}
                      onChange={handleChange}
                      placeholder="Type here"
                      style={{backgroundColor:"#f2f5ff"}}

                    />
                  </div>
                </div>
                <br />
                <div class="col-md-3 d-flex align-items-end">
                  <button class="assign-loc-btn ms-3">Save</button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckLists;
