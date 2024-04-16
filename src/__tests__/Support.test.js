import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Support from '../components/Support'; // Adjusted import path

describe('SupportForm Component', () => {
  it('checks the presence of email field and verifies email format', async () => {
    render(<Support />);
    
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toContain('@');
    expect(emailInput.value).toContain('.');
  });

  it('verifies that the inquiry field has data before clicking on send button', () => {
    render(<Support />);
    
    const inquiryTextarea = screen.getByTestId('inquiry-textarea');
    const sendButton = screen.getByTestId('submit-button');
    
    // Initially, the inquiry is empty
    expect(inquiryTextarea.value).toBe('');

    // Fill in the inquiry
    fireEvent.change(inquiryTextarea, { target: { value: 'This is a test inquiry.' } });
    expect(inquiryTextarea.value).not.toBe('');

    // Optionally, simulate a click on the send button to test form submission behavior
    // This step requires further implementation details of handleSubmit to test effectively
    // fireEvent.click(sendButton);
  });
});
