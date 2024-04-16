import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Mock the module containing Homepage and AboutUsPage components
jest.mock('../pages/Homepage', () => {
  return {
    __esModule: true,
    default: () => <div>Mock Homepage</div>
  };
});

jest.mock('../pages/AboutUsPage', () => {
  return {
    __esModule: true,
    default: () => <div>Mock AboutUsPage</div>
  };
});

describe('App Routing', () => {
  test('renders Homepage component on default route', () => {
    window.history.pushState({}, '', '/');
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText('Mock Homepage')).toBeInTheDocument();
  });

  test('renders AboutUsPage component on /AboutUsPage route', () => {
    window.history.pushState({}, '', '/AboutUsPage');
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText('Mock AboutUsPage')).toBeInTheDocument();
  });
});
export default App;
