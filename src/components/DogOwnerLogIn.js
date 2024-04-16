import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../assets/DogOwner.css'; 

const DogOwnerSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Added state to store login error messages
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:6070/api/dogowners/login', loginData);
      console.log('Login successful', response.data);
      console.log(loginData);

      // Store the user data or token in the local storage or state management system
      localStorage.setItem('dogOwnerEmail', email);

      setLoading(false); // Stop loading
      history.push('/DogOwnerHomePage');
    } catch (error) {
      setLoading(false); // Stop loading on error
      const message = error.response?.data?.message || 'Login failed';
      setError(message);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleLogin} className="signin-form">
        <h2>Dog Owner Sign In</h2>
        {error && <p className="error-message">{error}</p>} {/* Display any login errors */}
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

export default DogOwnerSignIn;
