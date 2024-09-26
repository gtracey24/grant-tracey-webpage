import "../App.css";
import React from "react";
import Footer from "../components/Footer";

function Blogs() {
  return (
    <div className="magicpattern">
      <div className="main-container">
        <div className="about">
          <div className="about-title">
            <img src="about-me-white.png" alt="about me" className="name" />
            <img
              src="family-avatar.png"
              alt="Tracey family"
              className="avatar-round"
            />
          </div>
          <p>
            One of the most dramatic changes in my life came in 2017 when my
            wife and I learned that we would become parents of our first child.
            Since then, we've grown to a six-person household and are exepcting
            another beautiful addition in January of 2025 (did you ever watch
            7th Heaven?). With this change in responsibility, I felt the need to
            explore the tech world for employment. Tech has always played some
            part in my work and while it takes a certain amount of skill, I have
            found that the way I deal with people is far more important. Having
            spent 8+ years in the non-profit sector, I've worked on projects
            with people from all walks of life. As I transition into the world
            of software development, my aim is to take on any project with
            people in mind first.
          </p>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
