import React from 'react';
import '../style.css';

const About = () => {
  return (
    <div className="about-us-page">
      <header className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission and what drives us forward.</p>
      </header>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide outstanding services and solutions that exceed expectations. We strive to innovate and create unique experiences that foster long-term relationships with our clients.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where our products and services improve lives, making it easier for businesses and individuals to achieve their goals and unlock their full potential.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a dedicated team of professionals with diverse backgrounds, all working together to make a difference. Each team member brings a wealth of experience and a passion for what we do.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
