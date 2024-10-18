import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Select from 'react-select';
import { MdOutlineFileUpload } from "react-icons/md";



function NewBooking(){
   
    const [selectedOption, setSelectedOption] = useState(null);
    const [vehiclename, setName] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [formData, setFormData] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
       
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
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const options = [
        { value: "CAR", label: "SUV" },
        { value: "CAR", label: "BMW" },
        { value: "CAR", label: "JEEP COMPASS" },
      ];
      const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption); // Set the selected option
      };
      const handleNameChange = (e) => setName(e.target.value);
    return(
      <div
      className="tab-pane fade active show"
      id="price-plan"
      role="tabpanel"
      
    >
  
      <div className="tab-content" style={{marginLeft:"20px"}}>
      <div className="tab-pane fade active show">          
      <div className="projectContainer">
        <div className="projectForm bg-light">
        <div className="d-flex justify-content-between align-items-center">
        <h5 className="title">New Booking</h5>
        </div>
        <br/>
        <div  className='addvehicleform'>
        <form>
            <div class="row g-2">
            <div className="form-group col-md-3 ">
            <label htmlFor="fuel">Vehicle Id</label>
          <input
            type="text"
            className="form-control"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
            placeholder="Vehicle Id"
            style={{backgroundColor:"#f2f5ff", color:"grey"}}
          />
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="fuel">Vehicle Type</label>
        <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="select car"
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
        <label htmlFor="fuel">Driver Assign</label>
      <Select
        id="options"
        value={selectedOption} 
        onChange={handleOptionChange} 
        options={options} 
        placeholder="Arjun"
        style={{backgroundColor:"#f2f5ff", color:"grey"}}
        isDisabled={true}
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
        <label htmlFor="fuel">Client Name</label>
      <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="0km"
        className="mt-0 mb-3"
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
           
        <div class="row g-2 ">  
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="fuel">Client's Number</label>
        <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="city"
        className="mt-0 mb-3"
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
        <label htmlFor="fuel">Booking Date & Time</label>
      <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="city"
        className="mt-0 mb-3"
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
        <label htmlFor="name">To</label>
        <input
          type="text"
          className="form-control "
          id="input2"
          value={formData.input2}
            onChange={handleChange}
          placeholder="Select city"
          required
          style={{backgroundColor:"#f2f5ff", color:"grey"}}
        />
        </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="name">From</label>
        <input
          type="text"
          className="form-control "
          id="input3"
          value={formData.input3}
          onChange={handleChange}
          placeholder="Select City"
          required
          style={{backgroundColor:"#f2f5ff", color:"grey"}}
        />
        </div>
        </div>
        </div>
        <div class="row g-2">  
        <div class="col-md-3">
        <div className="form-group">
        <label htmlFor="fuel">Payment Options</label>
        <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="select payment method"
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
        <label htmlFor="fuel">Amount(if cash is selected)</label>
      <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="city"
        className="mt-0 mb-3"
        style={{backgroundColor:"#f2f5ff", color:"grey"}}
      />

      {selectedOption && (
        <div className="alert alert-info mt-3">
          Selected Option: {selectedOption.label}
        </div>
      )}
    </div>
        </div>
        
        <div class="col-md-3" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div className="form-group">
        <label htmlFor="name">Invoice</label>
        <input
        type="text"
        className="form-control"
        id="input4"
        name="input4"
        value={formData.input4}
        onChange={handleChange}
        placeholder="No Choosen image"
        style={{backgroundColor:"#f2f5ff", color:"grey", paddingRight:"80px"}} // Add padding to the right for the icon
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
          right: '24px',
          top: '49%',
          transform: 'translateY(-10%)',
          cursor: 'pointer',
          backgroundColor: '#5896b8', // Background color behind the icon
          padding: '6px', // Add some padding for the icon background
          borderRadius: '6px' // Optional: Make the background rounded
        }}
      >
        <MdOutlineFileUpload size={24} />
      </span>
      </div>
      </div>
        </div>
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
export default NewBooking;