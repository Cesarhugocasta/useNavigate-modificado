import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the contact page. Here you can find ways to get in touch with us.</p>
      <button onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default ContactPage;
