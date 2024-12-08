import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import HeroMB from "@/components/Mobile/HeroMB";
import AboutMeMB from "@/components/Mobile/AboutMeMB";
import PortfolioMB from "@/components/Mobile/PortfolioMB";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    // Limpiar el evento cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="main-content-pc">
        <Hero />
        <AboutMe />
        <Portfolio />
      </div>
      {isMobile && (
        <div className="main-content-mobile">
          <HeroMB />
          <AboutMeMB />
          <PortfolioMB />
        </div>
      )}
    </div>
  );
}
