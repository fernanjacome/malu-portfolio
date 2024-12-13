import React, { useState, useEffect } from "react";

const Navbar = ({ activeSectionAPI, isMobile }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = [
      {
        id: "home",
        element: document.getElementById(isMobile ? "home-mobile" : "home"),
      },
      {
        id: "about",
        element: document.getElementById(isMobile ? "about-mobile" : "about"),
      },
      {
        id: "portfolio",
        element: document.getElementById(
          isMobile ? "portfolio-mobile" : "portfolio"
        ),
      },
      {
        id: "skills",
        element: document.getElementById(isMobile ? "skills-mobile" : "skills"),
      },
      {
        id: "testimonials",
        element: document.getElementById(
          isMobile ? "testimonials-mobile" : "testimonials"
        ),
      },
      {
        id: "contact",
        element: document.getElementById(
          isMobile ? "contact-mobile" : "contact"
        ),
      },
    ];
    const visibilityThreshold = 90;
    sections.forEach((section) => {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();

        const sectionHeight = rect.bottom - rect.top;
        const visibleHeight =
          Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
        const visiblePercentage = (visibleHeight / sectionHeight) * 100;

        if (visiblePercentage >= visibilityThreshold) {
          setActiveLink(section.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (section) => {
    setActiveLink(section);
    setMenuOpen(false);

    const sectionId = isMobile ? `${section}-mobile` : section;
    const element = document.getElementById(sectionId);

    if (element) {
      const yOffset = -document.querySelector(".header-navbar").offsetHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${isMobile ? `${item.id}-mobile` : item.id}`}
              className={activeLink === item.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleSetActive(item.id);
              }}
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
