import React from "react";
import Image from "next/image";
import { Card } from "@mui/material";
import { FaMagic, FaUser } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import CardCustom from "../custom/CardCustom";
import ButtonCustom from "../custom/ButtonCustom";
const HeroMB = () => {
  return (
    <section id="home-mobile" className="home-section-mb">
      <div className="columns-mb">
        <div className="column-1">
          <div className="welcome-message">
            <h1>Hi, I&apos;m Maria Carrion</h1>

            <hr></hr>
            <Image
              src="/images/profile.jpg"
              alt="profile"
              className="profile-img"
              width={300}
              height={300}
              style={{}}
            />
            <p>
              A Marketing and Communications expert passionate about creating
              impactful campaigns and sustainable solutions. With{" "}
              <strong>
                over a decade of experience across Australia and Ecuador
              </strong>
              , I specialise in brand strategy, stakeholder engagement, and
              crisis management.
            </p>
          </div>

          <article className="featured-highlights">
            <h3>Featured Highlights</h3>
            <hr></hr>
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
          <div className="call-to-action">
            <ButtonCustom label="Explore My Portfolio" variant="primary" />
            <ButtonCustom label="Download My CV" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMB;
