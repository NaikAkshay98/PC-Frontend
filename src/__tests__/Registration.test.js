import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Registration from '../components/Registration'; // Adjust the import path as needed

describe('Registration Component', () => {
  test('navigates to DogOwnerRegistrationPage on clicking Dog Owner', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Registration />
      </Router>
    );

    fireEvent.click(getByTestId('dog-owner-link'));

    // Expecting the history to navigate to /DogOwnerRegistrationPage
    expect(history.location.pathname).toBe('/DogOwnerRegistrationPage');
  });

  test('navigates to CaretakerRegistrationPage on clicking Care Taker', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Registration />
      </Router>
    );

    fireEvent.click(getByTestId('caretaker-link'));

    // Expecting the history to navigate to /CaretakerRegistrationPage
    expect(history.location.pathname).toBe('/CaretakerRegistrationPage');
  });
});
