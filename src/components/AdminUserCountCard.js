import React from 'react';
import '../assets/Admin.css'; 

const UserCountCard = ({ count }) => {
  return (
    
    <div className="user-count-card">
      <div className="card-content">
        <h3>Total Users</h3>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default UserCountCard;
