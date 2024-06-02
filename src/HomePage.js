import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <nav className="sub-nav">
        <button onClick={() => navigate('profile')}>Profile</button>
        <button onClick={() => navigate('settings')}>Settings</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
