import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/Caretaker.css';

const CaretakerSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    fetch('https://pawsomecare-backend-afa4879f8915.herokuapp.com/api/caretakers/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then(data => {
      console.log('Login successful', data);
      history.push('/CaretakerHomePage'); 
    })
    .catch(error => {
      console.error('Login failed:', error);
      alert('Login failed: ' + error.message);
    });
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleLogin} className="signin-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signin-button">SIGN IN</button>
      </form>
    </div>
  );
};

export default CaretakerSignIn;
