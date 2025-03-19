import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      setName(storedUser.name || '');
      setEmail(storedUser.email || '');
    }
  }, []);

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-content">
        <h1>Personal Details</h1>
        <div className="profile-card">
          <div className="profile-item">
            <label>Name:</label>
            <p>{name}</p>
          </div>
          <div className="profile-item">
            <label>Email:</label>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;