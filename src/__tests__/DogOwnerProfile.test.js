import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DogOwnerProfile from '../components/DogOwnerProfile'; // Adjust the import path as necessary

describe('DogOwnerProfile Component', () => {
  it('should display owner name, email, phone, and about information correctly and validate email format', () => {
    // Assume the component is rendered with an initial email value for testing purposes
    // This setup depends on how your component is implemented to receive and display initial values
    const mockInitialValues = {
      name: 'Jane Doe', // Example name
      email: 'jane.doe@example.com', // Example email for format validation
      phone: '123-456-7890', // Example phone number
      about: 'Dog lover and enthusiast' // Example about text
    };

    render(<DogOwnerProfile initialValues={mockInitialValues} onLogout={() => {}} />);

    // Verify Name field
    const nameInput = screen.getByLabelText('Name:');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue(mockInitialValues.name);

    // Verify Email field and format
    const emailInput = screen.getByLabelText('Email:');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue(mockInitialValues.email);

    // Check if email format is correct (contains "@" and ".")
    expect(emailInput.value).toMatch(/.+@.+\..+/);

    // Verify Phone field
    const phoneInput = screen.getByLabelText('Phone:');
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveValue(mockInitialValues.phone);

    // Verify About You field
    const aboutTextArea = screen.getByLabelText('About You:');
    expect(aboutTextArea).toBeInTheDocument();
    expect(aboutTextArea).toHaveValue(mockInitialValues.about);
  });
});
