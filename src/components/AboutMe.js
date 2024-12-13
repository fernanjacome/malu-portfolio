import React from "react";

import Image from "next/image";
const AboutMe = () => {
  return (
    <section id="about" className="about-me-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-me-content">
          <div className="about-me-column1">
            <div className="about-me-introduction">
              <h3 className="content-title">Introduction</h3>
              <hr></hr>
              <p>
                I am a dedicated professional with a strong background in
                communications, sustainability, and stakeholder engagement. My
                career is driven by a passion for innovation and creating
                meaningful social impact through my work.
              </p>
            </div>
            <div className="about-me-snapshot">
              <h3 className="content-title">Snapshot</h3>
              <hr></hr>
              <ul className="snapshot-list">
                <li>
                  <strong>Location:</strong> Sydney, Australia
                </li>
                <li>
                  <strong>Languages:</strong> Fluent in Spanish and English
                </li>
                <li>
                  <strong>Skills:</strong> Strategic planning, crisis
                  management, public relations, copywriting, and digital
                  marketing
                </li>
              </ul>
            </div>
          </div>
          <div className="about-me-socials">
            <div className="about-me-socialcontent">
              <ul className="social-links">
                <li>
                  <Image
                    src="/icons/linkedin.png"
                    alt="profile"
                    className="svg-socials"
                    width={25}
                    height={25}
                  />
                  <a
                    href="https://www.linkedin.com/in/marialuisacarrion/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  {" "}
                  <Image
                    src="/icons/twitter.png"
                    alt="profile"
                    className="svg-socials"
                    width={25}
                    height={25}
                  />
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <Image
                    src="/icons/mail.png"
                    alt="profile"
                    className="svg-socials"
                    width={25}
                    height={25}
                  />
                  <a href="mailto:your-email@example.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Agregar el componente de mapa aquí */}
      {/* <div className="about-me-map">
        
      <hr ></hr>
        <h3 className="content-title">Where I Am</h3>
        <Map />
      </div> */}
    </section>
  );
};

export default AboutMe;
