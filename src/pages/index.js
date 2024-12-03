import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <div className="main-content">
        <Hero />
        <AboutMe />
      </div>
    </div>
  );
}
