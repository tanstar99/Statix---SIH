import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const UserNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <nav className="user-navbar">
        <ul>
          <li><Link to="/user-dashboard">Home</Link></li>
          <li><Link to="/user-dashboard">Services</Link></li>
          <li><Link to="/user-dashboard/ambulance">Book Ambulance</Link></li>
          <li><Link to="/user-dashboard/appointments">Book Appointment</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;
