import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ContactForm from "./ContactForm";

const NavButtons = () => {
  return (
    <>
      <Button variant="link" size="sm">HOME</Button>
      <Button variant="link" size="sm">ABOUT</Button>
      <ContactForm />
  </>
  );
};

export default NavButtons;
