import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import cv from "../../assets/cv.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span> Hi! I’m Mahamudha Sultana, </span> Full-Stack Developer.
      </h1>
      <p>
        I am a passionate Full-Stack Developer specializing in building
        responsive and scalable web applications with Django, React, and
        Tailwind CSS. I focus on creating clean, practical, and user-friendly
        solutions while continuously exploring new technologies.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            Connect With Me{" "}
          </AnchorLink>{" "}
        </div>
        <a
          href={cv}
          download="cv.pdf"
          target="blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
