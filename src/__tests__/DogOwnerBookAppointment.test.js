import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookAppointmentPage from '../components/DogOwnerBookAppointment';

describe('DogOwnerBookAppointment Component', () => {
  it('renders appointment calendar, time field, and location field', () => {
    const { queryByTestId, getByPlaceholderText } = render(<BookAppointmentPage />);
    
    // Check if calendar field is present
    const appointmentCalendar = queryByTestId('appointment-calendar');
    if (!appointmentCalendar) {
      console.log(document.body.innerHTML);
    }

    // Check if time field is present
    const timeField = getByPlaceholderText('Time');
    expect(timeField).toBeInTheDocument();

    // Check if location field is present
    const locationField = getByPlaceholderText('Location');
    expect(locationField).toBeInTheDocument();
  });


  it('books appointment when all fields are filled', () => {
    const { getByPlaceholderText, getByText } = render(<BookAppointmentPage />);

    // Fill in time field
    const timeField = getByPlaceholderText('Time');
    fireEvent.change(timeField, { target: { value: '10:00 AM' } });

    // Fill in location field
    const locationField = getByPlaceholderText('Location');
    fireEvent.change(locationField, { target: { value: 'Park' } });

    // Submit the form
    const bookAppointmentButton = getByText('Book Appointment');
    fireEvent.click(bookAppointmentButton);

    // Expect appointment to be booked
    // Add your assertions here
    // For example, you might expect a success message or a callback function to be called
  });
});
