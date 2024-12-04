import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/custom/Portfolio";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <div className="main-content">
        <Hero />
        <AboutMe />
        <Portfolio />
      </div>
    </div>
  );
}
