import React from "react";
import AboutHero from "./AboutComponents/AboutHero";
import Count from "./AboutComponents/Count";
import Partner from "./AboutComponents/Partner";
import Mission from "./AboutComponents/Mission";
import Vision from "./AboutComponents/Vision";
import Category from "./AboutComponents/Category";
import Mentors from "./AboutComponents/Mentors";
import AboutGallery from "./AboutComponents/AboutGallery";
import Employe from "../Home/HomeComponents/Employe";
import Concerns from "../Home/HomeComponents/Concerns";
import OurTeam from "../Our Team/OurTeam";

const About = () => {
  return (
    <div>
      <AboutHero></AboutHero>
      <Count></Count>
      {/* <Partner></Partner> */}
      <Concerns/>
      <Category></Category>
      <Mission></Mission>
      <OurTeam />

      {/* <Mentors></Mentors> */}
      {/* <AboutGallery></AboutGallery> */}
    </div>
  );
};

export default About;
