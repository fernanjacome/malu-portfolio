import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Estado para determinar si es móvil

  // Verificar el tamaño de la ventana y actualizar el estado de isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir el umbral para "móvil" en 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifica el tamaño al cargar

    return () => window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar
  }, []);

  const handleSetActive = (section) => {
    setActiveLink(section);
    setMenuOpen(false);

    // Modificar el ID de la sección si estamos en modo móvil
    const sectionId = isMobile ? `${section}-mobile` : section;
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
              href={`#${isMobile ? `${item.id}-mobile` : item.id}`}
              className={activeLink === item.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault(); // Prevenir la navegación predeterminada
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
