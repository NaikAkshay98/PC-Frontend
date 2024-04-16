import React, { useState, useEffect } from 'react';
import '../assets/DogOwner.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DogOwnerProfile() {
  const [ownerProfile, setOwnerProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    photo: '',
    aboutDog: '', // Added field for aboutDog
    dogName: '',  // Added field for dogName
  });

  const history = useHistory();
  const handleLogout = () => {
    history.push('/SignInPage'); 
  };

  useEffect(() => {
    // Retrieve the logged-in dog owner's email from local storage
    const dogOwnerEmail = localStorage.getItem('dogOwnerEmail');
      
    if (!dogOwnerEmail) {
      console.error('No dog owner email found');
      history.push('/SignInPage');
      return;
    }
    
    // Fetch the dog owner's profile data using their email
    axios.get(`http://localhost:6070/api/dogowners/profile/${encodeURIComponent(dogOwnerEmail)}`)
      .then(response => {
        console.log('Fetched owner details:', response.data); // Add this to see what's returned
        setOwnerProfile(prevState => ({ ...prevState, ...response.data }));
      })
      .catch(error => {
        console.error('Failed to fetch owner details:', error);
        // Optionally handle the error, e.g., by displaying a message
      });
  }, [history]);
  
  

  return (
    <div className="profile-page">
      
      <div className="profile-section">
        <label>Name:</label>
        <input type="text" value={`${ownerProfile.firstName} ${ownerProfile.lastName}`} readOnly />
        
        <label>Email:</label>
        <input type="email" value={ownerProfile.email} readOnly />
        
        <label>Phone:</label>
        <input type="tel" value={ownerProfile.phone} readOnly />
        
        
        {/* Fields for dog details */}
        <label>Dog Name:</label>
        <input type="text" value={ownerProfile.dogName} readOnly />

        <label>About Dog:</label>
        <textarea value={ownerProfile.aboutDog} readOnly />


        <button className="update-button">Update</button>
      
      </div>
    
        
      
      <div>
      <button onClick={handleLogout} className="logout-button">Logout</button>  
      </div>
      
    </div>
  );
}

export default DogOwnerProfile;