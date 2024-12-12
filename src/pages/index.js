import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState, Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";

// Utilizamos React.lazy para cargar los componentes de manera diferida
const Hero = lazy(() => import("@/components/Hero"));
const AboutMe = lazy(() => import("@/components/AboutMe"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const HeroMB = lazy(() => import("@/components/Mobile/HeroMB"));
const AboutMeMB = lazy(() => import("@/components/Mobile/AboutMeMB"));
const PortfolioMB = lazy(() => import("@/components/Mobile/PortfolioMB"));
const Skills = lazy(() => import("@/components/Skills"));
const SkillsMB = lazy(() => import("@/components/Mobile/SkillsMB"));

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: abtRef, inView: abtInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: portfolioRef, inView: portfolioInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Establecer las clases CSS para la animación de fade-in
  const heroClassName = heroInView ? "fade-in" : "opacity-0";
  const abtClassName = abtInView ? "fade-in" : "opacity-0";
  const portfolioClassName = portfolioInView ? "fade-in" : "opacity-0";
  const skillsClassName = skillsInView ? "fade-in" : "opacity-0";

  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar isMobile={isMobile} />

        {isMobile ? (
          <div className="main-content-mobile">
            <div
              ref={heroRef}
              className={`transition-opacity duration-1000 ${heroClassName}`}
            >
              <HeroMB />
            </div>
            <div
              ref={abtRef}
              className={`transition-opacity duration-1000 ${abtClassName}`}
            >
              <AboutMeMB />
            </div>
            <div
              ref={portfolioRef}
              className={`transition-opacity duration-1000 ${portfolioClassName}`}
            >
              <PortfolioMB />
            </div>
            <div
              ref={skillsRef}
              className={`transition-opacity duration-1000 ${skillsClassName}`}
            >
              <SkillsMB />
            </div>
          </div>
        ) : (
          <div className="main-content-pc">
            <div
              ref={heroRef}
              className={`transition-opacity duration-1000 ${heroClassName}`}
            >
              <Hero />
            </div>
            <div
              ref={abtRef}
              className={`transition-opacity duration-1000 ${abtClassName}`}
            >
              <AboutMe />
            </div>
            <div
              ref={portfolioRef}
              className={`transition-opacity duration-1000 ${portfolioClassName}`}
            >
              <Portfolio />
            </div>
            <div
              ref={skillsRef}
              className={`transition-opacity duration-1000 ${skillsClassName}`}
            >
              <Skills />
            </div>
          </div>
        )}
        <Footer />
      </Suspense>
    </div>
  );
}
