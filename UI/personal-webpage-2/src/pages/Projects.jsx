import "../App.css";
import React from "react";
import projects_white from "../assets/projects_white.png";
import Footer from "../components/Footer";
import WellCoffeeProjectCard from "../components/WellCoffeeProjectCard";

function Projects() {
  return (
    <>
      <div className="magicpattern">
        <div className="projects-container">
          <div className="projects-title">
            <img src={projects_white} />
          </div>
          <WellCoffeeProjectCard />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
