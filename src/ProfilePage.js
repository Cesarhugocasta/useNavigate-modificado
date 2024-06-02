import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the profile page. Here you can view and edit your profile information.</p>
      <button onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default ProfilePage;
