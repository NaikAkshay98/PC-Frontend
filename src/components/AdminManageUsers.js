import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Admin.css'; 

const AdminManageUsers = () => {
  const [users, setUsers] = useState([
    { id: '558833', name: 'User A', status: 'Active' },
    { id: '558834', name: 'User B', status: 'Inactive' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
  };

  const handleModifyUser = (userId) => {
    console.log(`Modify user with ID: ${userId}`);
  };

  const handleToggleUserStatus = (userId) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? {...user, status: user.status === 'Active' ? 'Inactive' : 'Active'} : user
    );
    setUsers(updatedUsers);
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
          <input
            type="text"
            placeholder="Search User by ID"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="admin-button" onClick={handleSearch}>Search</button>
        </div>
        <div className="user-list">
          {users.map(user => (
            <div key={user.id} className="user-management">
              <span>User ID: {user.id} - Name: {user.name} - Status: {user.status}</span>
              <div className="user-actions">
                <button className="admin-button modify" onClick={() => handleModifyUser(user.id)}>Modify</button>
                <button 
                  className={`admin-button ${user.status === 'Active' ? 'deactivate' : 'activate'}`}
                  onClick={() => handleToggleUserStatus(user.id)}
                >
                  {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminManageUsers;
