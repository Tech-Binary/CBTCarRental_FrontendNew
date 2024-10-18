import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <div className="date-input-wrapper">
    <input
      className="date-input"
      value={value}
      onClick={onClick}
      readOnly
      ref={ref}
      placeholder="From"
    />
    <Calendar className="date-icon" onClick={onClick} />
  </div>
));

const DateInput = () => {
  const [fromDate, setFromDate] = useState(null);

  return (
    <div>
      <label htmlFor="fromDate" className="input-label">
        Date
      </label>
      <DatePicker
        selected={fromDate}
        onChange={(date) => setFromDate(date)}
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default DateInput;