import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul>
        <li><Link to="/admin-dashboard/bed-availability">Bed Availability</Link></li>
        <li><Link to="/admin-dashboard/appointments">Appointments Status</Link></li>
        <li><Link to="/admin-dashboard/patient-info">Patient Information</Link></li>
        <li><Link to="/admin-dashboard/medicine-inventory">Medicine Inventory</Link></li>
        <li><Link to="/admin-dashboard/opd-details">OPD Section Details</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;

