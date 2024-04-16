import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../assets/DogOwner.css';

function BookAppointmentPage() {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleDateChange = (newDate) => {
    setAppointmentDate(newDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(appointmentDate, time, location);
  };

  return (
    <div className="book-appointment-container">
      <Calendar onChange={handleDateChange} value={appointmentDate} />
      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <button type="submit" className="book-appointment-button">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointmentPage;