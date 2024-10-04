import "../App.css";
import React from "react";
import ProjectCardTemplate from "../components/ProjectCardTemplate";
import Footer from "../components/Footer";
import WellCoffeeProjectCard from "../components/WellCoffeeProjectCard";

function Projects() {
  return (
    <div className="magicpattern">
      <div className="projects-title">
        <img src="projects-white.png" />
      </div>
      <div className="projects-container">
        <div className="projects-cards">
          <WellCoffeeProjectCard />
          {/* <ProjectCardTemplate />
          <ProjectCardTemplate />
          <ProjectCardTemplate />
          <ProjectCardTemplate /> */}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Projects;
