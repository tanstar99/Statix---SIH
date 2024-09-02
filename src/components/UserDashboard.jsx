import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import Card from './Cards';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <UserNavbar />
      <div>
        <h4>Homepage</h4>
        <Card images = {images} /> 
      </div>
      <div className="user-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
