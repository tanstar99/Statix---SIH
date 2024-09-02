// Services.js
import React, { useState } from 'react';
import './Services.css'; // Create a CSS file for styling

const Services = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <li className="navbar-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      Services
      {dropdownOpen && (
        <div className="dropdown-menu">
          <a href="/ambulance-booking" className="dropdown-item">Ambulance Booking</a>
          <a href="/appointment-booking" className="dropdown-item">Appointment Booking</a>
          <a href="/search-hospitals" className="dropdown-item">Search Hospitals</a>
        </div>
      )}
    </li>
  );
};

export default Services;
