import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/Admin.css'; 

const EventsDetails = () => {
  const [events, setEvents] = useState([]);
  const [previewedEventId, setPreviewedEventId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:6070/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    time: '',
    image: '',
    organizationDetails: ''
  });

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = async () => {
    try {
      const response = await axios.post('http://localhost:6070/api/events', newEvent);
      console.log('Event added:', response.data);
      setEvents([...events, response.data]);
      setNewEvent({
        title: '',
        date: '',
        location: '',
        time: '',
        image: '',
        organizationDetails: ''
      });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handlePreviewEvent = (eventId) => {
    setPreviewedEventId(prevId => prevId === eventId ? null : eventId);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:6070/api/events/${eventId}`);
      console.log('Event deleted:', eventId);
      setEvents(currentEvents => currentEvents.filter(event => event._id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
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
      <div className="event-form">
        <input type="text" placeholder="Event Title" name="title" value={newEvent.title} onChange={handleInputChange} />
        <input type="datetime-local" placeholder="Event Date and Time" name="date" value={newEvent.date} onChange={handleInputChange} />
        <input type="text" placeholder="Event Location" name="location" value={newEvent.location} onChange={handleInputChange} />
        <input type="text" placeholder="Event Timing" name="time" value={newEvent.time} onChange={handleInputChange} />
        <input type="text" placeholder="Image URL" name="image" value={newEvent.image} onChange={handleInputChange} />
        <textarea placeholder="Organization Details" name="organizationDetails" value={newEvent.organizationDetails} onChange={handleInputChange} />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
        <div className="events-list">
        {events.map(event => (
            <div key={event._id} className="event">
              <span>{event.title}</span>
              <button onClick={() => handlePreviewEvent(event._id)}>Preview</button>
              <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
              {previewedEventId === event._id && (
                <div className="event-details-dropdown">
                  <div><strong>Title:</strong> {event.title}</div>
                  <div><strong>Date:</strong> {event.date}</div>
                  <div><strong>Location:</strong> {event.location}</div>
                  <div><strong>Time:</strong> {event.time}</div>
                  <div><strong>Details:</strong> {event.organizationDetails}</div>
                  <img src={event.image} alt={event.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventsDetails;