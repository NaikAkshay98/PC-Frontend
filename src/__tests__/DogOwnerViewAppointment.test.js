import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DogOwnerViewAppointment from '../components/DogOwnerViewAppointment';

describe('ViewAppointments Component', () => {
  it('displays only pending requests after clicking on the Pending button', () => {
      render(<DogOwnerViewAppointment />);

      // Click the "Pending" filter button
      fireEvent.click(screen.getByTestId('filter-pending'));

      // Check that only appointments with a status of "Pending" are displayed
      // Adjust the test to look for elements with test IDs starting with 'status-'
      const pendingAppointments = screen.getAllByTestId((content, element) =>
          element.tagName.toLowerCase() === 'span' && element.dataset.testid.startsWith('status-') && element.textContent === 'Pending'
      );

      expect(pendingAppointments).toHaveLength(1); // Assuming there's 1 pending appointment in your mock data
  });
});