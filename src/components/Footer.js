import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Maria Luisa Carrion. All Rights Reserved.</p>
        <nav className="footer-nav">
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#portfolio" className="footer-link">
            Portfolio
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
