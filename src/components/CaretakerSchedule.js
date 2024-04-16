import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import '../assets/Caretaker.css'; 

const mockAppointments = [
  { id: 1, owner: 'Dog Owner A', location: 'Seneca college, North York, Toronto', timings: 'Thu 11th Feb 2pm - 4pm', pay: '$32' },
  { id: 2, owner: 'Dog Owner A', location: 'Seneca college, North York, Toronto', timings: 'Thu 11th Feb 7pm - 9pm', pay: '$32' }
];

const ScheduleComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="schedule-container">
      <div className="calendar-container">
        <Calendar onChange={onChange} value={value} />
        <button className="add-update-schedule-button">Add/Update Schedule</button>
      </div>
      <div className="appointments-container">
        {mockAppointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
            <h3>{appointment.owner}</h3>
            <p>Location: {appointment.location}</p>
            <p>Timings: {appointment.timings}</p>
            <p>Pay: {appointment.pay}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleComponent;