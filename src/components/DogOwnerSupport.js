import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Guest.css'; 

function DogOwnerSupport() {
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        email: email,
        inquiry: inquiry,
        status: { "status": "Unsolved" },
        date: new Date(), // Make sure to send the date in ISO format
      };

      const response = await axios.post('http://localhost:6070/api/support', payload);
      toast.success('Inquiry sent successfully!'); // Display success toast
      console.log('Inquiry submitted:', response.data);
      setEmail('');
      setInquiry('');
      
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error('Failed to send inquiry.'); // Display error toast
    }
  };


  return (
    
    <div className="support-form-container">
      <ToastContainer position="top-center" />
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

export default DogOwnerSupport;