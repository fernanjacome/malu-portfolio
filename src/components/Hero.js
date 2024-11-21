import React from "react";
import Image from "next/image";
import { Card } from "@mui/material";
import CardCustom from "./custom/CardCustom";
import { FaMagic, FaUser } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <section id="home" className="home-section">
      <div className="column-1">
        <div className="welcome-message">
          <h1>Hi, I'm Maria Carrion</h1>

          <p>
            A Marketing and Communications expert passionate about creating
            impactful campaigns and sustainable solutions. With over a decade of
            experience across Australia and Ecuador, I specialise in brand
            strategy, stakeholder engagement, and crisis management.
          </p>
        </div>

        <article className="featured-highlights">
          <h3>Featured Highlights</h3>
          <div className="cards-featured">
            <CardCustom
              description="Led the rebranding of CDC NSW bus depots."
              icon={FaMagic}
            />
            <CardCustom
              description="Introduced electric mobility to Ecuador through strategic marketing."
              icon={MdElectricCar}
            />
            <CardCustom
              description="Coordinated a School Safety program for CDC NSW."
              icon={FaShieldAlt}
            />
          </div>
        </article>
      </div>
      <div className="column-2">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          className="profile-img"
          width={300}
          height={300}
          style={{}}
        />
        <div className="call-to-action">
          <a href="#portfolio" class="btn">
            Explore My Portfolio
          </a>
          <a href="path/to/cv.pdf" download className="btn-secondary">
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
