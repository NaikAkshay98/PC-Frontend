import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Admin.css'; 

const CareTakerReviews = () => {
  const initialReviews = [
    { id: '1', owner: 'Dog Owner A', message: 'Hello, world! This is a toast message.' },
    { id: '2', owner: 'Dog Owner B', message: 'Another toast message.' }
  ];

  const [reviews, setReviews] = useState(initialReviews);

  const handleDelete = (reviewId) => {
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(updatedReviews);
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
        {reviews.map(review => (
          <div key={review.id} className="review">
            <h3>{review.owner}</h3>
            <p>{review.message}</p>
            <button onClick={() => handleDelete(review.id)} className="admin-button">
              Delete
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CareTakerReviews;
