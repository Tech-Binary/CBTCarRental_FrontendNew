import React, {useState}from 'react';
import Header from './header';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { MdOutlineFileUpload } from "react-icons/md";
import Dashboard from './Dashboard';

function AddVehicle(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [vehiclename, setName] = useState('');
    const [selectedYear, setSelectedYear] = useState(null);
    const [registrationDate, setRegistrationDate] = useState('');
    const [registrationExpDate, setRegistrationExpDate] = useState('');
    const [selectedFuel, setSelectedFuel] = useState(null);
    const [serviceDate, setServiceDate] = useState('');
    

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      console.log(file); // Do something with the file
    };
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(currentYear - 1899), (val, index) => ({
    value: 1900 + index,
    label: 1900 + index,
    }));
    const fuels = [
        { value: 'petrol', label: 'Petrol' },
        { value: 'diesel', label: 'Diesel' },
        { value: 'electric', label: 'Electric' },
        { value: 'hybrid', label: 'Hybrid' },
      ];
    const handleNameChange = (e) => setName(e.target.value);
    const handleDateChange = (e) => {
    setRegistrationDate(e.target.value);  // Update the date value
    };
     const handleExpDateChange = (e) => {
    setRegistrationExpDate(e.target.value);  // Update registration expiry date
  };

  const handleServicedateChange = (e) => {
    setServiceDate(e.target.value); // Update the service date state
  };
  // onChange handler to update the selected year
  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);  // Update the selected year
    console.log('Selected Manufacturing Year:', selectedOption);
  };

  const handleFuelChange = (selectedOption) => {
    setSelectedFuel(selectedOption);  // Update the selected year
    console.log('Selected Fuel:', selectedOption);
  };
    return(
      <div
      className="tab-pane fade active show"
      id="price-plan"
      role="tabpanel"
      
    >
  
      <div className="tab-content" style={{marginLeft:"20px"}}>
      <div className="tab-pane fade active show"> 
        <div className=" projectContainer">
        <div class="projectForm bg-light">
        <div className="projectformHeading">
              <h5 className="title">Add Vehicle</h5>
            </div>
       <div className='addvehicleform'>
       <form>
        <div class="row g-3">
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Vehicle Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>
     
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Vehicle Number</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
      <label htmlFor="registrationDate">Registration Date</label>
      <input
        type="date"
        className="form-control"
        id="registrationDate"
        value={registrationDate}
        onChange={handleDateChange}
        placeholder="Select registration date"
        required
        style={{backgroundColor:"#f2f5ff", color:"grey"}}
      />
    </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
  <label htmlFor="registrationExpDate">Registration Exp Date</label>
  <input
    type="date"  // Change input type to "date"
    className="form-control"
    id="registrationExpDate"
    value={registrationExpDate}  // Bind the selected date to state
    onChange={handleExpDateChange}  // Handle date change event
    placeholder="Select registration expiry date"
    required
    style={{backgroundColor:"#f2f5ff", color:"grey"}}
  />
</div>
        </div>

        
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Vehicle Type</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Chasis Number</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Company</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Model</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>

       
        <div class="col-md-3">
        <div className="form-group">
      <label htmlFor="manufacturingYear"> Manufacturing Year
      </label>
      <Select
        id="manufacturingYear"
        value={selectedYear}  // Bind the selected value to state
        onChange={handleYearChange}  // Handle the change event
        options={years}  // Options from 1900 to the current year
        placeholder="Select Year"
        isClearable  // Enable clearable option
        isSearchable  // Enable searchable option
        className="mt-0 mb-3"
        style={{backgroundColor:"#f2f5ff"}}
      />

      {selectedYear && (
        <div className="alert alert-info mt-3">
          Selected Manufacturing Year: {selectedYear.label}
        </div>
      )}
    </div>

        </div>
        <div class="col-md-3">
        <div className="form-group">
      <label htmlFor="fuel">Fuel</label>
      <select
        className="form-control"
        id="fuel"
        value={selectedFuel} // Bind the selected value
        onChange={handleFuelChange} // Handle change event
        required
        style={{backgroundColor:"#f2f5ff"}}
      >
        <option value="" disabled>Select Fuel</option>
        {fuels.map((fuel) => (
          <option key={fuel.value} value={fuel.value}>
            {fuel.label}
          </option>
        ))}
      </select>
    </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">VIN No.</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Insurance No.</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Enter name"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>

        
        <div class="col-md-3">
        <div className="form-group">
      <label htmlFor="serviceDate">Last Service Date</label>
      <input
        type="date" // Ensures a calendar date picker is displayed
        className="form-control"
        id="serviceDate"
        value={serviceDate}
        onChange={handleServicedateChange}
        required
        style={{backgroundColor:"#f2f5ff",color: 'grey',}}
      />
    </div>
        </div>
        <div class="col-md-3" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div className="form-group">
        <label htmlFor="name">Image</label>
        <input
        type="text"
        className="form-control"
        id="input1"
        name="input1"
        value={vehiclename}
          onChange={handleNameChange}
        placeholder="Select image"
        style={{ paddingRight: '80px',backgroundColor:"#f2f5ff" }} // Add padding to the right for the icon
      />
      {/* File input (hidden) */}
      <input
        type="file"
        id="fileUpload"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      {/* Icon inside the input field */}
      <span
        onClick={() => document.getElementById('fileUpload').click()} // Trigger file input click
        style={{
          position: 'absolute',
          right: '33px',
          top: '49%',
          transform: 'translateY(-10%)',
          cursor: 'pointer',
          backgroundColor: '#5896b8', // Background color behind the icon
          padding: '6px', // Add some padding for the icon background
          borderRadius: '6px' // Optional: Make the background rounded
        }}
      >
        <MdOutlineFileUpload size={24} color="white"/>
      </span>
      </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">Features</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={vehiclename}
          onChange={handleNameChange}
          placeholder="Features"
          required
          style={{backgroundColor:"#f2f5ff"}}
        />
      </div>
        </div>
        
      </div>
<br/>
      <div class="col-md-3  d-flex align-items-end">
      <button class="assign-loc-btn">Save</button>
      </div>
      </form>
      </div>
      </div>
      </div>
        </div>
        </div>
        </div>
    );

}
export default AddVehicle;

