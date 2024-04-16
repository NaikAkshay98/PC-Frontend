// EventDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/Guest.css';

const EventDetail = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6070/api/events/${eventId}`)
      .then(response => response.json())
      .then(data => setEventDetails(data))
      .catch(error => console.error("Failed to fetch event details:", error));
  }, [eventId]);

  if (!eventDetails) return <div>Loading...</div>;

  // Adjust your image path if necessary
  const imageUrl = eventDetails.image.startsWith('http') 
    ? eventDetails.image 
    : `http://localhost:6070${eventDetails.image}`;

  return (
    <div className="event-details-container">
        <h2 className="event-title">{eventDetails.title}</h2>
        <img src={imageUrl} alt={eventDetails.title} className="event-image" />
        <p className="event-info"><span>Date:</span> {new Date(eventDetails.date).toLocaleDateString()}</p>
        <p className="event-info"><span>Location:</span> {eventDetails.location}</p>
        <p className="event-info"><span>Time:</span> {eventDetails.time}</p>
        <p className="event-info"><span>Organization:</span> {eventDetails.organizationDetails}</p>
    </div>
  );
};

export default EventDetail;
