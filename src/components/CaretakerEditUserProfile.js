import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CaretakerEditUserProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    about: '',
    yearsOfExperience: '',
    certificate: '',
  });
  const history = useHistory();

  useEffect(() => {
    // Fetch the current user details to populate the form
    // This is similar to what was done in UserProfile but now we're populating form fields
    fetch('http://localhost:6070/api/caretakers/user-details') // Use the correct endpoint
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated profile back to the server
    fetch('http://localhost:6070/api/caretakers/update-profile', { // Adjust the endpoint as needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      alert('Profile updated successfully!');
      history.push('/user-profile'); // Redirect to the profile display page
    })
    .catch(error => {
      console.error('Profile update failed:', error);
      alert('Profile update failed: ' + error.message);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for editing the profile, similar to CaretakerProfile but pre-populated with current details */}
    </form>
  );
};

export default CaretakerEditUserProfile;
