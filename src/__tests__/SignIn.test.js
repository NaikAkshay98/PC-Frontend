import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from '../components/SignIn'; // Adjust the import path to where your SignIn component is located

// Mock useHistory
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts except useHistory
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('SignIn Component', () => {
  beforeEach(() => {
    // Clear the mock's history before each test
    mockHistoryPush.mockClear();
  });

  test('redirects to AdminHomePage on successful admin login', () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    fireEvent.change(getByLabelText('User Name:'), { target: { value: 'a' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'a' } });
    fireEvent.click(getByText('SIGN IN'));

    // Expecting the history.push function to have been called with '/AdminHomePage'
    expect(mockHistoryPush).toHaveBeenCalledWith('/AdminHomePage');
  });
});
