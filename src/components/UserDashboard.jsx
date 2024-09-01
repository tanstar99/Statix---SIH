import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from './UserNavbar';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <UserNavbar />
      <div className="user-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
