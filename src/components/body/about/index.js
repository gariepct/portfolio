import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋, I am,
         <br /> <span className="info-name">Connor Gariepy</span>.
         <br /> I have experience working as a full-stack software engineer.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/connor.jpg")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
