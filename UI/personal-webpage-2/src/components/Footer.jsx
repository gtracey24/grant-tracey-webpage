import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <>
      <Button variant="link" size="sm" style={{fontFamily: "Libre Franklin"}}><a href="https://www.linkedin.com/in/grant-tracey-4b475088/" target="_blank">LinkedIn</a></Button>
   |
      <Button variant="link" size="sm" style={{fontFamily: "Libre Franklin"}}><a href="https://github.com/gtracey24" target="_blank">GitHub</a></Button>
  </>
  );
};

export default Footer;
