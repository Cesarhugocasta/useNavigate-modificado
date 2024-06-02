import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './index.css';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>My React App</h1>
      <nav className="main-nav">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/details')}>Details</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
