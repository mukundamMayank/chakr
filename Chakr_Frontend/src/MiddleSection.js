

import React, { useState, useEffect } from 'react';
import './MiddleSection.css';
import Graph from './Graph'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const customersData = [
  { id: 1, name: 'John Doe', designation: 'Software Engineer', profilePic: 'john.jpg' },
  { id: 2, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 3, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 4, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 5, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 6, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 7, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 8, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 9, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 10, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 11, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 12, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  { id: 13, name: 'Jane Smith', designation: 'Product Manager', profilePic: 'jane.jpg' },
  
];



function CustomerCard({ customer }) {

  return (
    <div className="customer-card">
      <div className="customer-info-container">
        <img src={customer.profilePic} className="profile-pic" />
        <div className="customer-info">
          <div className="customer-name">{customer.name}</div>
          <div className="customer-designation">{customer.designation}</div>
        </div>
      </div>
      <div className="icons-container">
        <span className="icon star-icon">&#9734;</span>
        <span className="icon chat-icon">💬</span>
        <span className="icon more-icon">&#8942;</span>
      </div>
    </div>
  );
}


function SecondCard() {

  const [chartType, setChartType] = useState('whole');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="card second-card">
      <div className="growth-section">
        {/* Static Growth Graph */}
        <label>Select Chart Type:</label>
        <select value={chartType} onChange={handleChartTypeChange}>
          <option value="whole">Whole</option>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>

        {chartType === 'yearly' && (
          <>
            <label>Select Year:</label>
            <input type="text" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} />
          </>
        )}

        {chartType === 'monthly' && (
          <>
            <label>Select Year:</label>
            <input type="text" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} />
            <label>Select Month:</label>
            <input type="text" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} />
          </>
        )}

        {chartType === 'period' && (
          <>
            <label>Start Date:</label>
            <DatePicker selected={startDate} onChange={handleStartDateChange} />
            <label>End Date:</label>
            <DatePicker selected={endDate} onChange={handleEndDateChange} />
          </>
        )}
        <Graph
        chartType={chartType}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        startDate={startDate}
        endDate={endDate}
      />
      </div>
      <div className="mini-cards-section">
        {/* Mini Cards */}
        <div className="mini-card">
          <h3 className="mini-card-title">Top Month</h3>
          <span className="mini-card-text">January</span>
          <span>2023</span>
        </div>
        <div className="mini-card">
          <h3 className="mini-card-title">Top year</h3>
          <span className="mini-card-text">2024</span>
          <span>96k sales done</span>
        </div>
        <div className="mini-card">
          <h3 className="mini-card-title">Top Buyer</h3>
          <img src={customersData[0].profilePic} className="profile-pic" />
        <div className="customer-info">
          <div className="customer-name">{customersData[0].name}</div>
          <div className="customer-designation">{customersData[0].designation}</div>
        </div>
          </div>
      </div>
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="middle-section">
      <div className="card">
      <div className="customer-list-card">
        {customersData.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
      </div>
      <SecondCard />
    </div>
  );
}

export default MiddleSection;
