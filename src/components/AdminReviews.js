import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../assets/Admin.css'; 

const AdminReviews = () => {
  const [caretakers] = useState([
    { id: '558833', name: 'CT A' },
    { id: '558834', name: 'CT B' },
  ]);
  const history = useHistory();

  const handleOpenReviews = (caretakerId) => {
    history.push(`/adminopenreviews/${caretakerId}`);
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
        <div className="search-container">
          <input type="text" placeholder="Search CareTaker Name or ID" />
          <button>Search</button>
        </div>
        <ul className="certificates-list"> 
          {caretakers.map((caretaker) => (
            <li key={caretaker.id} className="certificate"> 
              <span className="certificate-id">CT id {caretaker.id}</span>
              <button
                onClick={() => handleOpenReviews(caretaker.id)}
                className="admin-button"
              >
                Open Reviews
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default AdminReviews;
