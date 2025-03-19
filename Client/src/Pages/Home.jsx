import React from 'react';
import Navbar from '../Components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Job Application Tracker</h1>
          <p>Organize, track, and manage your job applications with ease.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Track Applications</h3>
            <p>Easily keep track of all your job applications in one place.</p>
          </div>
          <div className="feature-card">
            <h3>Stay Organized</h3>
            <p>Manage deadlines, interviews, and follow-ups effortlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Analytics</h3>
            <p>Get insights into your job search progress.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 Job Application Tracker. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;