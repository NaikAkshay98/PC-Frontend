// EventList.js for react-router-dom version 5
import React from 'react';
import { useHistory } from 'react-router-dom';

function EventList({ events }) {
  const history = useHistory();

  const onEventClick = (eventId) => {
    history.push(`/events/${eventId}`);
  };

  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event" onClick={() => onEventClick(event.id)}>
          <h3>{event.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default EventList;
