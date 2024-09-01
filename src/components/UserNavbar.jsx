import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const UserNavbar = () => {
  return (
    <nav className="user-navbar">
      <ul>
        <li><Link to="/user-dashboard">Home</Link></li>
        <li><Link to="/user-dashboard/hospitals">Hospitals</Link></li>
        <li><Link to="/user-dashboard/ambulance">Book Ambulance</Link></li>
        <li><Link to="/user-dashboard/appointments">Book Appointment</Link></li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
