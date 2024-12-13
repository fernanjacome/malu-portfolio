import Contact from "@/components/Contatc";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
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

  // Usamos useInView para detectar si la sección está en vista
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

  const { ref: testimonialRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar
          isMobile={isMobile}
          activeSectionAPI={{
            hero: heroInView,
            about: abtInView,
            portfolio: portfolioInView,
            skills: skillsInView,
            testimonials: testimonialsInView,
            contact: contactInView,
          }}
        />

        {isMobile ? (
          <div className="main-content-mobile">
            <div
              ref={heroRef}
              className={`transition-opacity duration-1000 ${
                heroInView ? "fade-in" : "opacity-0"
              }`}
            >
              <HeroMB />
            </div>
            <div
              ref={abtRef}
              className={`transition-opacity duration-1000 ${
                abtInView ? "fade-in" : "opacity-0"
              }`}
            >
              <AboutMeMB />
            </div>
            <div
              ref={portfolioRef}
              className={`transition-opacity duration-1000 ${
                portfolioInView ? "fade-in" : "opacity-0"
              }`}
            >
              <PortfolioMB />
            </div>
            <div
              ref={skillsRef}
              className={`transition-opacity duration-1000 ${
                skillsInView ? "fade-in" : "opacity-0"
              }`}
            >
              <SkillsMB />
            </div>
          </div>
        ) : (
          <div className="main-content-pc">
            <div
              ref={heroRef}
              className={`transition-opacity duration-1000 ${
                heroInView ? "fade-in" : "opacity-0"
              }`}
            >
              <Hero />
            </div>
            <div
              ref={abtRef}
              className={`transition-opacity duration-1000 ${
                abtInView ? "fade-in" : "opacity-0"
              }`}
            >
              <AboutMe />
            </div>
            <div
              ref={portfolioRef}
              className={`transition-opacity duration-1000 ${
                portfolioInView ? "fade-in" : "opacity-0"
              }`}
            >
              <Portfolio />
            </div>
            <div
              ref={skillsRef}
              className={`transition-opacity duration-1000 ${
                skillsInView ? "fade-in" : "opacity-0"
              }`}
            >
              <Skills />
            </div>
            <div
              ref={testimonialRef}
              className={`transition-opacity  ${
                testimonialsInView ? "fade-in" : "opacity-0"
              }`}
            >
              <Testimonials />
            </div>
            <div
              ref={contactRef}
              className={`transition-opacity  ${
                contactInView ? "fade-in" : "opacity-0"
              }`}
            >
              <Contact />
            </div>
          </div>
        )}
        <Footer />
      </Suspense>
    </div>
  );
}
