import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Select from 'react-select';
import { FaHistory } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';


function ClientInformation(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const drivers = [
        { id: 1, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },
        { id: 2, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },
        { id: 3, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },
        { id: 4, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },
        { id: 5, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },
        { id: 6, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },
        { id: 7, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },
        { id: 8, driverid: 'S0001', trips:'22',  kms: '0 km', manufacturing:'2020', experience:'12' },   
    ];
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ];
      const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption); // Set the selected option
      };

    return(
      <div
      className="tab-pane fade active show"
      id="price-plan"
      role="tabpanel"
      
    >
  
      <div className="tab-content" style={{marginLeft:"20px"}}>
      <div className="tab-pane fade active show"> 
        <div className="projectContainer">
        <div className="projectTable bg-light">
        <div className="d-flex justify-content-between align-items-center">
        <div className="new-button-container ms-2 mb-3 p-2 d-flex align-items-center">
      <button className="new-btn" >New</button>
       </div>
      <div className='p-2' style={{marginRight:"6px"}}>
      <button className="filter-btn" >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/filter.png`}
                    />
                  </button>
      </div>
            </div>
            <div class="row g-3" 
            style={{marginRight:"5px"}}
            
            >
            <div class="col-md-3">
            <div className="form-group">
            <div className="search-container1">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src="/assets/Images/icons/Find.png"
                alt="Search Icon"
                className="search_icon"
              />
            </div>
      </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
        <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="Status"
        isClearable // Enable clearable option
        isSearchable // Enable searchable option
        
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
      <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="Branches"
        isClearable // Enable clearable option
        isSearchable // Enable searchable option
        style={{marginRight:"20px"}}

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
      <Select
        id="options"
        value={selectedOption} // Bind the selected value to state
        onChange={handleOptionChange} // Handle the change event
        options={options} // Options array for Option 1, 2, 3
        placeholder="Raised By"
        isClearable // Enable clearable option
        isSearchable // Enable searchable option
        style={{marginRight:"20px"}}
      />

      {selectedOption && (
        <div className="alert alert-info mt-3">
          Selected Option: {selectedOption.label}
        </div>
      )}
    </div>
        </div>
            </div>
            <div className="tableFixHeaddd">
            <table className="table table-striped">
            <thead>
            <tr className="table-header">
            <th scope="col">
              <input type="checkbox" style={{ transform: "scale(1.5)" }}/>
            </th>
            <th scope="col">SNo.</th>
            <th scope="col">Unique ID</th>
            <th scope="col">Client Name</th>
            <th scope="col">Company/Branch</th>
            <th scope="col">Tag</th>
            <th scope="col">Business raised</th>
            <th scope="col">History</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {drivers.map((driver, index) => (
            <tr className="table-row" key={index}>
              <td>
                <input type="checkbox" style={{ transform: "scale(1.5)" }}/>
              </td>
              <td>{driver.id}</td>
              <td>{driver.driverid}</td>
              <td>{driver.trips}</td>
              <td>{driver.kms}</td>
              <td><button className="tag-btn">Corporate</button></td>
              <td>{driver.experience}</td>
              <td>
              <button className="history-btn">
                <FaHistory /> {/* Boom! The history icon is here! */}
              </button>
            </td>
            </tr>
          ))}
        </tbody>
            </table>
           </div>

           
         </div>
         </div>
         </div>
         </div>
        </div>
        
        
    );
}
export default ClientInformation;