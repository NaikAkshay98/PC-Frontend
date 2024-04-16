import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/Caretaker.css';

const CaretakerRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(''); // Optional
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Ensure passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password, // Ensure that your backend handles password encryption
      phone,
      photo // This is optional
    };

    fetch('https://pawsomecare-backend-afa4879f8915.herokuapp.com/api/caretakers/register', { // Update the endpoint to the caretaker registration
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (response.headers.get("content-type")?.includes("application/json")) {
        return response.json();
      } else {
        // If not JSON, just return the text response
        return response.text().then(text => {
          throw new Error('Received non-JSON response from server: ' + text);
        });
      }
    })
    .then(data => {
      console.log('Registration successful', data);
      history.push(`/CaretakerUploadCertificate/${data.id}`); // Update the navigation path to include caretakerId
      alert('Registration successful!');
    })
    .catch(error => {
      console.error('Registration failed:', error);
      alert('Registration failed: ' + error.message);
    });
  };

  return (
    <div>
      <div className="signup-form-container">
        <h2>Caretaker Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input 
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input 
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input 
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input 
            type="text"
            placeholder="Photo URL (optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default CaretakerRegistration;
