import React, {useState} from 'react';
function VehicleReport(){
    const [searchTerm, setSearchTerm] = useState("");
   
    const products = [
        { id: 1, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        { id: 2, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        { id: 3, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        { id: 4, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        { id: 5, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        { id: 6, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        { id: 7, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        { id: 8, vehicleid: 'P001', vinno: '10234', trips:'22',  kms: '0 km', manufacturing:'2020', maintainance: '01-08-2020', registration:'01-08-2020' },
        
    ];

    return(
      <div
      className="tab-pane fade active show"
      
    >
  
      <div className="tab-content">
      <div className="tab-pane fade active show">    
        <div className=" projectContainer ">
  <div className="bg-light">
    <div className="projectTableHeading d-flex justify-content-between align-items-center">
      <h5 className="title" style={{padding:"20px"}}>Vehicle Report</h5>
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
                src="/assets/Images/icons/Find.png"
                alt="Search Icon"
                className="search_icon"
              />
            </div>
            
            <div className="tableFixHeaddd">
            <table className="table table-striped">
            <thead>
            <tr className="table-header">
            <th scope="col">
              <input type="checkbox" style={{ transform: "scale(1.5)" }}/>
            </th>
            <th scope="col">SNo.</th>
            <th scope="col">Vehicle ID</th>
            <th scope="col">VIN No.</th>
            <th scope="col">Total Trips Covered</th>
            <th scope="col">Total kms Covereed</th>
            <th scope="col">Manufacturing Year</th>
            <th scope="col">Last Maintainance</th>
            <th scope="col">Registration Date</th>
            
          </tr>
        </thead>
        <tbody className="table-striped">
          {products.map((product, index) => (
            <tr className="table-row" key={index}>
              <td>
                <input type="checkbox" style={{ transform: "scale(1.5)" }}/>
              </td>
              <td>{product.id}</td>
              <td>{product.vehicleid}</td>
              <td>{product.vinno}</td>
              <td>{product.trips}</td>
              <td>{product.kms}</td>
              <td>{product.manufacturing}</td>
              <td>{product.maintainance}</td>
              <td>{product.registration}</td>
              
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
export default VehicleReport;