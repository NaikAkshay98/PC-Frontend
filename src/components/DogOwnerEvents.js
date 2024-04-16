import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import UserEventsList from '../components/DogOwnerEventsList.js';
import '../assets/DogOwner.css';

function DogOwnerEvents() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:6070/api/events');
        const fetchedEvents = response.data.map(event => ({
          ...event,
          date: new Date(event.date) // Assuming 'date' is the correct property
        }));
        setAllEvents(fetchedEvents);
        setEvents(fetchedEvents); // Initially show all events
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle the error appropriately
      }
    };

    fetchEvents();
  }, []);

  const onDateChange = (newDate) => {
    setDate(newDate);
    filterEventsByDate(newDate);
  };

  const filterEventsByDate = (selectedDate) => {
    const filtered = allEvents.filter(event => isSameDay(event.date, selectedDate));
    setEvents(filtered);
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="event-page">
      <div className="calendar-container">
        <h3>Events Calendar</h3>
        <Calendar
          onChange={onDateChange}
          value={date}
          className="react-calendar" // This class name is for custom styling
        />
      </div>
      <div className="event-list-container">
        <UserEventsList events={events} />
      </div>
    </div>
  );
}

export default DogOwnerEvents;