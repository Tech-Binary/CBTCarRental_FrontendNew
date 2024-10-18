import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Select from 'react-select';
import { FaHistory } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioButton } from 'primereact/radiobutton';


function RenewableDocument(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    
    const handleSearch = () => {
        console.log("Searching for:", searchTerm);
        // Add your search functionality here
      };
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const drivers = [
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },
        { number: 'RJ14CQ2065', insurance: '07-09-2024', expiry:'07-09-2024' },

        
           
    ];
    

    return(
        <div className="tab-pane fade active show"
        id="price-plan"
        role="tabpanel">           
        <div className="tab-content" style={{marginLeft:'20px'}}>
        <div className="tab-pane fade active show">
        <div className="projectContainer">
        <div className=" bg-light">
        <div className="projectTableHeading d-flex justify-content-between align-items-center">
        <div className="row1 mb-4">
        <div className="col-md-6 d-flex align-items-center">
        <h className="title">Renewable Documents</h>
        </div>
          <div className="col-md-2 d-flex align-items-center">
        <RadioButton inputId="before" name="befre" value="before" onChange={handleOptionChange} checked={selectedOption === 'before'} />
        <label htmlFor="before"  style={{marginLeft:"4px"}}>Vehicle</label>
        </div>
        <div className="col-md-4 d-flex align-items-center">
        <RadioButton inputId="after" name="after" value="after" onChange={handleOptionChange} checked={selectedOption === 'after'} />
        <label htmlFor="after"  style={{marginLeft:"4px"}}>Driver</label>
        </div>
        </div>
        <div className="icons-div d-flex">
                  <div className="create-btn">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/Images/add.png`}
                      alt="add"
                      className="add-png"
                    ></img>
                    <p>Create booking</p>
                  </div>
                </div>
        </div>
          <div className="row ">
          <div className="search-container2 col-md-3 d-flex align-items-center">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
             <div className="col-md-3 d-flex align-items-center">
            <button className="search-btn " onClick={handleSearch}>
             Search
           </button>
           </div> 
            </div>
            
          </div>
            <div className="tableFixHeaddd p-0">
            <table className="table table-striped">
            <thead>
            <tr className="table-header">
            <th scope="col">Vehicle Number</th>
            <th scope="col">Insurance Expiry Date</th>
            <th scope="col">Registration Expiry date</th>
          </tr>
        </thead>
        <tbody className="table-striped">
  {drivers.map((driver, index) => (
    <tr className="table-row" key={index}>
      <td className="left-align">{driver.number}</td>
      <td className="center-align">{driver.insurance}</td>
      <td className="right-align">{driver.expiry}</td>
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
export default RenewableDocument;