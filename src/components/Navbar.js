import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <header className="header-navbar">
      <ul>
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About Me' },
          { id: 'portfolio', label: 'Portfolio' },
          { id: 'skills', label: 'Skills' },
          { id: 'testimonials', label: 'Testimonials' },
          { id: 'blog', label: 'Blog' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeLink === item.id ? 'active' : ''}
              onClick={() => handleSetActive(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
