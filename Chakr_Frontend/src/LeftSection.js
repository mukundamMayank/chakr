import React, { useEffect } from 'react';
import './LeftSection.css';
import SearchBar from './SearchBar.js';


function LeftSection() {
  return (
    <div className="left-section">

      <div className="upper-half">
        <h2>Orangefarm</h2>
        {/* Search Bar */}
        <div className="search-bar">
          <SearchBar placeholder="Search..."  />

        </div>

        {/* Dashboard */}
        <div className="menu-item">
          <i className="fas fa-tachometer-alt"></i><span className="menu-text">Dashboard</span>
        </div>

        <div className="menu-item">
          
          <i className="fas fa-users"></i><span className="menu-text">Customers</span>
          <i className="fas fa-caret-down dropdown"></i>
        </div>

        <div className="menu-item">
          <i className="fas fa-chart-bar"></i><span className="menu-text">All Reports</span>
        </div>
        
      </div>

      <div className="bottom">
        <div className="profile">
          <img src="profile-photo.jpg" />
          <div className="text">
            <p className="username">User Name</p>
            <p className="designation">Designation</p>
          </div>
        </div>
        <div className="actions">
        <div>
          <i className="fas fa-cogs"></i> Settings
        </div>
        <div>
          <i className="fas fa-sign-out-alt"></i> Logout
        </div>
      </div>
      </div>



      
      
    </div>
  );
}

export default LeftSection;
