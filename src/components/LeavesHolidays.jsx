import React, {useState} from 'react';
import Header from './header';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import Dashboard from './Dashboard';
function LeavesHolidays(){
    const [maintainanceDate, setMaintainanceDate] = useState('');
    const [formData, setFormData] = useState({
    input1: '',
    input2: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleDateChange = (e) => {
    setMaintainanceDate(e.target.value);  // Update the date value
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
        <div>
              <h5 className="title">Leaves/Holidays</h5>
            </div>
       <div>
       <form className='me-3'>
       <div className="row mb-3">
       <div className="form-group col-md-3">
          <label htmlFor="input2">Driver's Name</label>
          <input
            type="text"
            className="form-control"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
            placeholder="john"
            style={{backgroundColor:"#f2f5ff", color:"grey"}}
          />
        </div>

        <div className="form-group col-md-3">
        <label htmlFor="input1">To</label>
        <input
        type="date"
        className="form-control"
        id="registrationDate"
        value={maintainanceDate}
        onChange={handleDateChange}
        placeholder="Select registration date"
        required
        style={{backgroundColor:"#f2f5ff", color:"grey"}}
      />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="input3">From</label>
          <input
        type="date"
        className="form-control"
        id="registrationDate"
        value={maintainanceDate}
        onChange={handleDateChange}
        placeholder="Select registration date"
        required
        style={{backgroundColor:"#f2f5ff", color:"grey"}}
      />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="input2">Reason</label>
          <input
            type="text"
            className="form-control"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
            placeholder="Mention reason here"
            style={{backgroundColor:"#f2f5ff", color:"grey"}}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="form-group col-md-3">
          <label htmlFor="input3">Approved By</label>
          <input
            type="text"
            className="form-control"
            id="input3"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
            placeholder="name"
            style={{backgroundColor:"#f2f5ff", color:"grey"}}
          />
        </div>        
      </div>
      <br/>
      <div class="col-md-3 d-flex align-items-end">
      <button class="assign-loc-btn ms-3">Save</button>
      </div>
      <br/>
      </form>
      </div>
      </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default LeavesHolidays;