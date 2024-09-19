import "../App.css";
import NavButtons from "./NavButtons";
import React from "react";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="magicpattern">
      <div className="main-container">
        <div className="nav">
          <NavButtons />
        </div>
        <div className="title-container">
          <img src="gt-name-white.png" alt="name" className="name" />
          <img
            src="grant-chelsea-fall.jpg"
            alt="Grant Tracey"
            className="avatar"
          />
        </div>
        <div className="statement-container">
          <motion.div initial={{ opacity: 0 }} whileInView={{opacity: 1}}>
          In a tech-based world,
          <br /> we need to focus on
          <div className="smooth-gradient-text">people.</div>
          </motion.div>
        </div>
        <div className="people-container">
        <motion.div initial={{ opacity: 0 }} whileInView={{opacity: 1}} whileHover={{ scale: 1.5 }} transition = {{ delay: 0.3}}>
          <img
            src="people-missions.png"
            alt="Grant with missions group"
            className="people-img"
          />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{opacity: 1}} whileHover={{ scale: 1.5 }} transition = {{ delay: 0.3}}>
          <img
            src="people-onward.png"
            alt="Grant with church group"
            className="people-img"
          />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{opacity: 1}} whileHover={{ scale: 1.5 }} transition = {{ delay: 0.3}}>
          <img
            src="people-covid.png"
            alt="Grant with group wearing masks"
            className="people-img"
          />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{opacity: 1}} transition = {{ delay: 0.3}} >
        <div className="bio">
          <p>
            Having spent 8+ years in the non-profit sector, I've worked on
            projects with people from all walks of life. As I transition into
            the world of software development, my aim is to take on any project
            with people in mind first. Once that is established, success is
            guaranteed.
          </p>
        </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
