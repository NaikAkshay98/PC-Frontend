import React, { useState } from 'react';
import '../assets/Guest.css'; 

function CaretakerSupport() {
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    
    <div className="support-form-container">
      <form className="support-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Email Support</h3>  
          <label htmlFor="email">From</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Inquiry</label>
          <textarea
            id="inquiry"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">SEND</button>
      </form>
    </div>
  );
}

export default CaretakerSupport;