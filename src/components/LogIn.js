import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/Guest.css';

const LogIn = () => {
  return (
    <div className="register-container">
      <h2 className="register-title">LogIn As</h2>
      <Link to="/DogOwnerLogInPage" className="register-button">Dog Owner</Link>
      <div className="separator">
        <span className="separator-text">OR</span>
      </div>
      <Link to="/CaretakerLogInPage" className="register-button">Care Taker</Link>
    </div>
  )
}

export default LogIn;
