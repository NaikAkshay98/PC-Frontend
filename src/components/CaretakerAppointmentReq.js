import React, { useState } from 'react';
import '../assets/Caretaker.css';

const mockRequests = [
  { id: 1, name: 'Request A', status: 'Pending', statusDate: 'Expires in 60 mins' },
  { id: 2, name: 'Request B', status: 'Declined', statusDate: 'Declined on 23th Jan 2024' },
  { id: 3, name: 'Request C', status: 'Accepted', statusDate: 'Accepted on 30th Jan 2024' }
];

const statusFilters = ['All', 'Accepted', 'Declined', 'Pending'];

const CaretakerAppointmentReq = () => {
    const [filter, setFilter] = useState('All');
  
  const filteredRequests = filter === 'All' ? mockRequests : mockRequests.filter(request => request.status === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };



  const handlePreviewRequest = (requestId) => {
    console.log('Previewing request:', requestId);
  };

  return (
    <div className="appointment-requests-container">
      <div className="filters">
        {statusFilters.map(status => (
          <button
            key={status}
            onClick={() => handleFilterChange(status)}
            className={`filter-button ${filter === status ? 'active' : ''}`}
          >
            {status}
          </button>
        ))}
      </div>
  
      <div >
        {filteredRequests.map(request => ( 
          <div key={request.id} className="request-card">
            <span className="request-name">{request.name}</span>
            <span className={`request-status ${request.status.toLowerCase()}`}>{request.status}</span>
            <span className="request-date">{request.statusDate}</span>
            <button onClick={() => handlePreviewRequest(request.id)} className="preview-request-button">
              Preview Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default CaretakerAppointmentReq;