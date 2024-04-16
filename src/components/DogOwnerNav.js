import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Capture.png';
import '../assets/App.css'; 

function DogOwnerNav() {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Retrieve the first name from local storage or state management
    const storedData = localStorage.getItem('dogOwnerData'); // assuming this is how you store the user data
    if (storedData) {
      const userData = JSON.parse(storedData);
      setFirstName(userData.firstName); // make sure the 'firstName' field is saved in localStorage
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/DogOwnerHomePage" className="navbar-brand" activeClassName="active">
          <img src={logo} alt="Pawsome Care Logo" className="navbar-logo"/>
          <span className="navbar-text">Pawsome Care</span>
        </NavLink>
      </div>
      
      <NavLink to="/DogOwnerViewCaretakerPage" className="nav-item" activeClassName="active">View Caretakers</NavLink>
      <NavLink to="/DogOwnerEventPage" className="nav-item" activeClassName="active">Events</NavLink>
      <NavLink to="/DogOwnerSupportPage" className="nav-item" activeClassName="active">Support</NavLink>
      <NavLink to="/DogOwnerBookAppointmentPage" className="nav-item" activeClassName="active">Book Appointments</NavLink>
      <NavLink to="/DogOwnerViewAppointmentPage" className="nav-item" activeClassName="active">View Appointments</NavLink>
      <NavLink to="/DogOwnerProfilePage" className="nav-item-right" activeClassName="active">
        {firstName ? `Hello, ${firstName}` : 'Dog Owner'}
      </NavLink>
    </nav>
  );
}

export default DogOwnerNav;
