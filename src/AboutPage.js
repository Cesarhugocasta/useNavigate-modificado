import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page. Here you can learn more about our application.</p>
      <button onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default AboutPage;
