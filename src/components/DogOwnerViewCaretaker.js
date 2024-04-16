import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/DogOwner.css'; 

function ViewCaretakers() {
  const [caretakers, setCaretakers] = useState([]);

  useEffect(() => {
    const fetchCaretakers = async () => {
      try {
        const response = await axios.get('http://localhost:6070/api/caretakers/all');
        setCaretakers(response.data);
      } catch (error) {
        console.error('Error fetching caretakers:', error);
        // Handle the error (e.g., set an error state, display a notification, etc.)
      }
    };

    fetchCaretakers();
  }, []);

  return (
    <div className="caretaker-page">
      {caretakers.map((caretaker) => (
        <div key={caretaker.id} className="caretaker-card">
          <img src={caretaker.photo} alt={caretaker.firstname} className="caretaker-image" />
          <h3>{`${caretaker.firstName} ${caretaker.lastName}`}</h3>
          <div className="caretaker-rating">{`⭐ ${caretaker.caretakerRating} (${caretaker.reviews} reviews)`}</div>
          <p className="caretaker-bio">{caretaker.bio}</p>
          <div className="aretaker-rate">{caretaker.hourlyRate}/hr</div>
          <Link to={`view-caretakers-details/${caretaker.id}`} className="read-more-button">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ViewCaretakers;
