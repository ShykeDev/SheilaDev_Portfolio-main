import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BG_GRADIENT from "./assets/wave.png";

const App = () => {
  return (
    <div className="bg-background">
      <div
        style={{
          backgroundImage: `url(${BG_GRADIENT})`,
          backgroundPosition: `50% 50%`,
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
