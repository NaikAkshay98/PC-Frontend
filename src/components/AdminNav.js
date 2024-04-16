import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/App.css'; 

const AdminNavbar = () => {
  return (
    <div className="admin-container">
    <nav className="admin-navbar">
      <ul className="admin-nav-menu">
        <li className="admin-nav-item">
          <Link to="/AdminManageUsers" className="admin-nav-link">Users</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/AdminReviews" className="admin-nav-link">Reviews</Link>
        </li>
        <li className="admin-nav-item">
        <Link to="/AdminVerifyCT" className="admin-nav-link">Verify CT</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/AdminEventDetails" className="admin-nav-link">Event Details</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/AdminEmailSupport" className="admin-nav-link">Email Support</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/AdminProfile" className="admin-nav-link">Admin</Link> 
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default AdminNavbar;