import React from "react";
import "./css/custom.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './style.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to great experiences starts here!</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </header>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Explore our amazing feature set to help you succeed.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>We provide cutting-edge tools for seamless operation.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Benefit from our 24/7 support and guidance at every step.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
