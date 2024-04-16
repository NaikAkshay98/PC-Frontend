import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Capture.png';
import { useHistory } from 'react-router-dom';
import '../assets/App.css'; 
const CaretakerNav = () => {
  
  const history = useHistory();
  const handleLogout = () => {
    history.push('/SignInPage'); 
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/CaretakerHomePage" className="navbar-brand">
          <img src={logo} alt="Pawsome Care Logo" className="navbar-logo"/>
          <span className="navbar-text">Pawsome Care</span>
        </NavLink>
      </div>
      
        <div className="navbar-links">
          <NavLink to="CaretakerAppointmentPage" >Appointment Request</NavLink>
          <NavLink to="/CaretakerSchedulePage" >Schedule</NavLink>
          <NavLink to="/CaretakerSupportPage" >Support</NavLink>
          <NavLink to="/CaretakerProfilePage" >Caretaker A</NavLink>
        </div>
        
        
    </nav>
  );
};

export default CaretakerNav;