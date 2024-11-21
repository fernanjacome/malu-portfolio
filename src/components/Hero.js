import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Maria Carrion - Hughes
        </h1>
        <p className="hero-subtitle">
          CREATIVE MARCOMS PROFESSIONAL <br />
          Specialised in Sustainability, Zero Emission Transport, <br />
          and Community Engagement
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="hero-btn primary-btn">Explore Portfolio</a>
          <a href="#contact" className="hero-btn secondary-btn">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
