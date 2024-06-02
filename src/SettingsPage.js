import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Settings Page</h2>
      <p>This is the settings page. Here you can adjust your preferences and settings.</p>
      <button onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default SettingsPage;
