import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
   </div> 
   
  );
}
