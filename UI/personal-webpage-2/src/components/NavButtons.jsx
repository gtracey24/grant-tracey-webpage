import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ContactForm from "./ContactForm";

const NavButtons = () => {
  return (
    <>
  
      {/* <img src="gt-name-white.png" alt="name" className="nav-name" /> */}
      <Button variant="link" size="sm" style={{fontFamily: "Libre Franklin"}}>HOME</Button>
      <Button variant="link" size="sm" style={{fontFamily: "Libre Franklin"}}>PROJECTS</Button>
      <Button variant="link" size="sm" style={{fontFamily: "Libre Franklin"}}><a href="Grant Tracey Resume-Dev.pdf" target="_blank">RESUME</a></Button>
      <ContactForm />

  </>
  );
};

export default NavButtons;
