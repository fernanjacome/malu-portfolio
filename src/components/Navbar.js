import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveLink(section);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu toggled:", menuOpen);
  };

  return (
    <header className="header-navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About Me" },
          { id: "portfolio", label: "Portfolio" },
          { id: "skills", label: "Skills" },
          { id: "testimonials", label: "Testimonials" },
          { id: "blog", label: "Blog" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeLink === item.id ? "active" : ""}
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
