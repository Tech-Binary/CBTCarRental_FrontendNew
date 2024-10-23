import React, {useState} from 'react';
import Dashboard from './Dashboard';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { BorderAllRounded } from '@mui/icons-material';
function DriverReport(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProducts, setSelectedProducts] = useState(null);
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

    return(
      <div
      className="tab-pane fade active show"
     
    >
  
  <div className="tab-content" style={{marginLeft:"10px"}}>
      <div className="tab-pane fade active show">    
        <div className="projectContainer">
  <div className="bg-light">
    <div className="projectTableHeading d-flex justify-content-between align-items-center">
      <h5 className="title" style={{padding:"20px"}}>Driver Report</h5>
      {/* <div className="icons-div d-flex ms-auto">
        <div className="create-btn">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/add.png`}
            alt="add"
            className="add-png"
          />
          <p>Create New</p>
        </div>
      </div> */}
      
    </div>
    <div className="search-container1">
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
            
            <div className="tableFixHeaddd">
            <table className="table table-striped">
            <thead>
            <tr className="table-header">
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">SNo.</th>
            <th scope="col">Driver's ID</th>
            <th scope="col">Total Trips Covered</th>
            <th scope="col">Total kms Covereed</th>
            <th scope="col">Manufacturing Year</th>
            <th scope="col">Experience</th>
           
            
          </tr>
        </thead>
        <tbody className="table-striped">
          {drivers.map((driver, index) => (
            <tr className="table-row" key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{driver.id}</td>
              <td>{driver.driverid}</td>
              <td>{driver.trips}</td>
              <td>{driver.kms}</td>
              <td>{driver.manufacturing}</td>
              <td>{driver.experience}</td>
              
              
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
export default DriverReport;