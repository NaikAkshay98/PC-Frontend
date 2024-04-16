// AdminEmailSupport.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminEmailSupport from '../components/AdminEmailSupport';

describe('AdminEmailSupport Component', () => {
  it('renders search field and search button', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <AdminEmailSupport />
      </Router>
    );

    // Check if search field is present
    const searchField = getByPlaceholderText('Search Case ID or Status');
    expect(searchField).toBeInTheDocument();

    // Check if search button is present
    const searchButton = getByText('Search');
    expect(searchButton).toBeInTheDocument();
  });

  it('displays only one case when searched by ID', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Router>
        <AdminEmailSupport />
      </Router>
    );

    // Enter ID in the search field
    const searchField = getByPlaceholderText('Search Case ID or Status');
    fireEvent.change(searchField, { target: { value: '558834' } });

    // Click on the search button
    const searchButton = getByText('Search');
    fireEvent.click(searchButton);

    // Check if only one case with ID 558834 is displayed
    expect(queryByText('Case ID: 558834')).toBeInTheDocument();
    expect(queryByText('Case ID: 558835')).not.toBeInTheDocument();
  });
});
