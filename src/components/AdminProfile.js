import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/Admin.css';

const AdminProfile = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <nav>
          <ul className="admin-menu">
            <li><Link to="/AdminHomePage">Home Page</Link></li>
            <li><Link to="/AdminVerifyCT">Verify Caretaker</Link></li>
            <li><Link to="/AdminReviews">Reviews</Link></li>
            <li><Link to="/AdminManageUsers">Manage Users</Link></li>
            <li><Link to="/AdminEventDetails">Event Details</Link></li>
            <li><Link to="/AdminEmailSupport">Email Support</Link></li>
            <li><Link to="/AdminProfile">LogOut</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="admin-main-content">
        <h1>Admin Profile</h1>
        <button onClick={handleLogout} className="admin-button logout-button">Logout</button>
      </main>
    </div>
  );
};

export default AdminProfile;
