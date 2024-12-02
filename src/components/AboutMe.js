import React from 'react';
import Map from './custom/Maps';

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-me-content">
     
          <div className="about-me-introduction">
            <h3 className="content-title">Introduction</h3>
            <hr></hr>
            <p>
              I am a dedicated professional with a strong background in communications, 
              sustainability, and stakeholder engagement. My career is driven by a passion 
              for innovation and creating meaningful social impact through my work.
            </p>
          </div>
          <div className="about-me-snapshot">
            <h3 className="content-title">Snapshot</h3>
            <ul className="snapshot-list">
              <li><strong>Location:</strong> Sydney, Australia</li>
              <li><strong>Languages:</strong> Fluent in Spanish and English</li>
              <li>
                <strong>Skills:</strong> Strategic planning, crisis management, public 
                relations, copywriting, and digital marketing
              </li>
            </ul>
          </div>
          <div className="about-me-socials">
  <h3 className="content-title">Let's Connect</h3>
  <ul className="social-links">
    <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    <li><a href="mailto:your-email@example.com">Email</a></li>
  </ul>
</div>
        </div>
      </div>
      {/* Agregar el componente de mapa aquí */}
      <div className="about-me-map">
            <h3 className="content-title">Where I Am</h3>
            <Map />
          </div>
    </section>
  );
};

export default AboutMe;
