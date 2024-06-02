import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<HomePage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="details" element={<DetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
