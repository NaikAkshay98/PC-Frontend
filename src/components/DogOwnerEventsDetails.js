import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EventDetails() {
  const [eventDetails, setEventDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:6070/api/events/${id}`);
        setEventDetails(response.data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!eventDetails) {
    return <div>Loading...</div>; // or some loading spinner
  }

  return (
    <div className="event-detail-page">
      <h1>{eventDetails.title}</h1>
      {/* Add other event details here */}
      <p>{eventDetails.description}</p>
    </div>
  );
}

export default EventDetails;
