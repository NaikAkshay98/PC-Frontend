
import React, { useState } from 'react';
import '../assets/DogOwner.css'; 

const mockAppointments = [
  { id: 1, name: 'Request A', status: 'Pending', expires: '60 mins' },
  { id: 2, name: 'Request B', status: 'Declined', date: '23th Jan 2024' },
  { id: 3, name: 'Request C', status: 'Accepted', date: '31th Jan 2024' }
];

function ViewAppointments() {
    const [filter, setFilter] = useState('all'); 

  const filteredAppointments = mockAppointments.filter(appointment => {
    return filter === 'all' || appointment.status.toLowerCase() === filter;
  });


  return (
    <div className="appointments-page">
        
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('accepted')}>Accepted</button>
        <button onClick={() => setFilter('declined')}>Declined</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>


      {filteredAppointments.map((appointment) => (
        <div key={appointment.id} className={`appointment ${appointment.status.toLowerCase()}`}>
          <span className="appointment-name">{appointment.name}</span>
          <span className="appointment-status">{appointment.status}</span>
          {appointment.expires ? (
            <span className="appointment-expires">Expires in {appointment.expires}</span>
          ) : (
            <span className="appointment-date">Date: {appointment.date}</span>
          )}
          <button className="preview-request">Preview Request</button>
        </div>
      ))}
    </div>
  );
}

export default ViewAppointments;