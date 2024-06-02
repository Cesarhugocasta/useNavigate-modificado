import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Details Page</h2>
      <p>Welcome to the details page!</p>
      <button onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default DetailsPage;
