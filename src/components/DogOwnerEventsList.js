import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/DogOwner.css';

function DogOwnerEventsList({ events = [] }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <Link key={event.id} to={`/events/${event.id}`}>
          <div className="event">
          <h3>{`${event.title} ${event.date.toDateString()}`}</h3>

            {/* You may want to display the event date or other information here */}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DogOwnerEventsList;
