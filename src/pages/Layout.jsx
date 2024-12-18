import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import gt_name_200_50_black from "../assets/gt_name_200_50_black.png";
import Grant_Tracey_Resume_Dev from "../assets/Grant_Tracey_Resume_Dev.pdf";

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="nav">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">
              <img src={gt_name_200_50_black} alt="Grant Tracey logo" />
            </Navbar.Brand>
            <Navbar.Text className="dark">SOFTWARE DEVELOPER | </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Nav.Link as={Link} to="/">HOME</Nav.Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Nav.Link as={Link} to="/projects">PROJECTS</Nav.Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Nav.Link href={Grant_Tracey_Resume_Dev} target="_blank">
                    RESUM&#201;
                  </Nav.Link>
                </motion.div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
