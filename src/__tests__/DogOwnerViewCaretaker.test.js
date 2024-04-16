// DogOwnerViewCaretaker.test.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewCaretakers from '../components/DogOwnerViewCaretaker';

describe('DogOwnerViewCaretaker Component', () => {
  it('each caretaker should have image, name, review, rating, bio, and rate fields', () => {
    const { getByTestId } = render(
      <Router>
        <ViewCaretakers />
      </Router>
    );

    // Check if all fields are present for each caretaker
    const caretaker1 = getByTestId('caretaker-1');
    const caretaker2 = getByTestId('caretaker-2');
    const caretaker3 = getByTestId('caretaker-3');

    // Caretaker 1
    const caretakerImage1 = getByTestId('caretaker-image-1');
    const caretakerName1 = getByTestId('caretaker-name-1');
    const caretakerRating1 = getByTestId('caretaker-rating-1');
    const caretakerBio1 = getByTestId('caretaker-bio-1');
    const caretakerRate1 = getByTestId('caretaker-rate-1');

    expect(caretaker1).toBeInTheDocument();
    expect(caretakerImage1).toBeInTheDocument();
    expect(caretakerName1).toBeInTheDocument();
    expect(caretakerRating1).toBeInTheDocument();
    expect(caretakerBio1).toBeInTheDocument();
    expect(caretakerRate1).toBeInTheDocument();

    // Caretaker 2
    const caretakerImage2 = getByTestId('caretaker-image-2');
    const caretakerName2 = getByTestId('caretaker-name-2');
    const caretakerRating2 = getByTestId('caretaker-rating-2');
    const caretakerBio2 = getByTestId('caretaker-bio-2');
    const caretakerRate2 = getByTestId('caretaker-rate-2');

    expect(caretaker2).toBeInTheDocument();
    expect(caretakerImage2).toBeInTheDocument();
    expect(caretakerName2).toBeInTheDocument();
    expect(caretakerRating2).toBeInTheDocument();
    expect(caretakerBio2).toBeInTheDocument();
    expect(caretakerRate2).toBeInTheDocument();

    // Caretaker 3
    const caretakerImage3 = getByTestId('caretaker-image-3');
    const caretakerName3 = getByTestId('caretaker-name-3');
    const caretakerRating3 = getByTestId('caretaker-rating-3');
    const caretakerBio3 = getByTestId('caretaker-bio-3');
    const caretakerRate3 = getByTestId('caretaker-rate-3');

    expect(caretaker3).toBeInTheDocument();
    expect(caretakerImage3).toBeInTheDocument();
    expect(caretakerName3).toBeInTheDocument();
    expect(caretakerRating3).toBeInTheDocument();
    expect(caretakerBio3).toBeInTheDocument();
    expect(caretakerRate3).toBeInTheDocument();
  });
});
