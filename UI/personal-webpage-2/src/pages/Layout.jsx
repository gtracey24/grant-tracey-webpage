import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src="gt-name-200-50-black.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Nav.Link href="/">HOME</Nav.Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Nav.Link href="/contact">CONTACT</Nav.Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
              <Nav.Link href="/projects">PROJECTS</Nav.Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Nav.Link href="Grant Tracey Resume-Dev.pdf" target="_blank">
                  RESUME
                </Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
