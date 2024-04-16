// CaretakerRegistration.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import CaretakerRegistration from '../components/CaretakerRegistration';

describe('CaretakerRegistration Component', () => {
  it('renders username field, password field, confirm password field, and signup button', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <CaretakerRegistration />
      </Router>
    );

    // Check if username field is present
    const usernameField = getByPlaceholderText('User Name');
    expect(usernameField).toBeInTheDocument();

    // Check if password field is present
    const passwordField = getByPlaceholderText('Password');
    expect(passwordField).toBeInTheDocument();

    // Check if confirm password field is present
    const confirmPasswordField = getByPlaceholderText('Confirm Password');
    expect(confirmPasswordField).toBeInTheDocument();

    // Check if signup button is present
    const signupButton = getByText('SIGN UP');
    expect(signupButton).toBeInTheDocument();
  });

  it('registers user when all fields are filled', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <CaretakerRegistration />
      </Router>
    );

    // Fill in username field
    const usernameField = getByPlaceholderText('User Name');
    fireEvent.change(usernameField, { target: { value: 'testUser' } });

    // Fill in password field
    const passwordField = getByPlaceholderText('Password');
    fireEvent.change(passwordField, { target: { value: 'testPassword' } });

    // Fill in confirm password field
    const confirmPasswordField = getByPlaceholderText('Confirm Password');
    fireEvent.change(confirmPasswordField, { target: { value: 'testPassword' } });

    // Submit the form
    const signupButton = getByText('SIGN UP');
    fireEvent.click(signupButton);

    // You can add your assertions here to check if the signup logic is executed
    // For example, you can check if the user is redirected to the correct page after signup
  });

  it('does not register user if password and confirm password fields do not match', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <CaretakerRegistration />
      </Router>
    );

    // Fill in username field
    const usernameField = getByPlaceholderText('User Name');
    fireEvent.change(usernameField, { target: { value: 'testUser' } });

    // Fill in password field
    const passwordField = getByPlaceholderText('Password');
    fireEvent.change(passwordField, { target: { value: 'testPassword' } });

    // Fill in confirm password field with a different value
    const confirmPasswordField = getByPlaceholderText('Confirm Password');
    fireEvent.change(confirmPasswordField, { target: { value: 'differentPassword' } });

    // Submit the form
    const signupButton = getByText('SIGN UP');
    fireEvent.click(signupButton);

    // You can add your assertions here to check if the signup logic is not executed
    // For example, you can check if the user is not redirected to the next page
  });
});
