import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileForm({ caretakerId }) {
  const [profileData, setProfileData] = useState({
    bio: '',
    yearsOfExperience: '',
  });

  useEffect(() => {
    // Optionally initialize form for profile update
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/caretakers/${caretakerId}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    if (caretakerId) {
      fetchProfile();
    }
  }, [caretakerId]);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/caretakers/${caretakerId}/updateProfile`, profileData);
      alert('Profile updated successfully');
      // Handle response or perform additional actions
    } catch (error) {
      console.error('Profile update failed: ', error.response ? error.response.data : error);
      alert('Profile update failed: ' + (error.response ? error.response.data.message : 'Server error'));
    }
  };

  return (
    <div>
      <h2>{caretakerId ? 'Update Profile' : 'Create Profile'}</h2>
      <form onSubmit={handleSubmit}>
        {/* Form inputs for bio and years of experience */}
        {/* ... */}
        <button type="submit">{caretakerId ? 'Update Profile' : 'Create Profile'}</button>
      </form>
    </div>
  );
}

export default ProfileForm;
