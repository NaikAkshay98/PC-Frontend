import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/Guest.css';

const Registration = () => {
  return (
    <div className="register-container">
      <h2 className="register-title">Register As</h2>
      <Link to="/DogOwnerRegistrationPage" className="register-button">Dog Owner</Link>
      <div className="separator">
        <span className="separator-text">OR</span>
      </div>
      <Link to="/CaretakerRegistrationPage" className="register-button">Care Taker</Link>
    </div>
  )
}

export default Registration;
