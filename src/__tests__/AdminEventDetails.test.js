import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminEventDetails from '../components/AdminEventDetails';

describe('AdminEventDetails Component', () => {
  it('uploads image, event name, event description, location, link, and timing fields', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <AdminEventDetails />
      </Router>
    );

    // Upload Image
    const uploadImageInput = getByPlaceholderText('Upload Image');
    fireEvent.change(uploadImageInput, { target: { value: 'image.png' } });
    expect(uploadImageInput.value).toBe('image.png');

    // Event Name
    const eventNameInput = getByPlaceholderText('Event Name');
    fireEvent.change(eventNameInput, { target: { value: 'Test Event' } });
    expect(eventNameInput.value).toBe('Test Event');

    // Event Description
    const eventDescriptionInput = getByPlaceholderText('Event Description');
    fireEvent.change(eventDescriptionInput, { target: { value: 'Test Description' } });
    expect(eventDescriptionInput.value).toBe('Test Description');

    // Location
    const locationInput = getByPlaceholderText('Location');
    fireEvent.change(locationInput, { target: { value: 'Test Location' } });
    expect(locationInput.value).toBe('Test Location');

    // Link
    const linkInput = getByPlaceholderText('Link');
    fireEvent.change(linkInput, { target: { value: 'https://example.com' } });
    expect(linkInput.value).toBe('https://example.com');

    // Timings
    const timingsInput = getByPlaceholderText('Timings');
    fireEvent.change(timingsInput, { target: { value: 'Test Timings' } });
    expect(timingsInput.value).toBe('Test Timings');
  });

  it('each displayed event should have preview and delete button', async () => {
    const { getAllByText, getByText } = render(
      <Router>
        <AdminEventDetails />
      </Router>
    );

    // Check if preview and delete buttons are present for each displayed event
    const previewButtons = getAllByText('Preview');
    const deleteButtons = getAllByText('Delete');
    expect(previewButtons.length).toBeGreaterThan(0);
    expect(deleteButtons.length).toBeGreaterThan(0);
  });
});
