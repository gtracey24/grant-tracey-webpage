import React, { useRef, useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  Card,
  CardGroup,
  Modal,
  Col,
  Row,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

export const Contact = () => {
  const form = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s9s2w3r", "template_2vtycxe", form.current, {
        publicKey: "rYhlVvk0LIuhOYGlR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          handleShow();
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="magicpattern">
        <div className="contact-main-container">
          <CardGroup>
            <Card
              style={{ width: "24rem" }}
              text="light"
              border="light"
              bg="dark"
            >
              <Card.Body>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Label>Name</Form.Label>
                  <br />
                  <Form.Control
                    name="from_name"
                    placeholder="Enter Name"
                    required
                    type="text"
                  />
                  <br />
                  <Form.Label>Email</Form.Label>
                  <br />
                  <Form.Control
                    name="email_id"
                    placeholder="Enter Email"
                    required
                    type="email"
                  />
                  <br />
                  <Form.Label>Message</Form.Label>
                  <br />
                  <Form.Control
                    name="message"
                    placeholder="Enter Message"
                    as="textarea"
                    rows={4}
                    required
                    type="email"
                  />
                  <br />
                  <Button type="submit" value="Send">
                    Submit
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Message Sent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Thanks for the message. I'll be in touch!
                    </Modal.Body>
                    <Modal.Footer>
                      {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button> */}
                    </Modal.Footer>
                  </Modal>
                </Form>
              </Card.Body>
            </Card>
            <ContactCard />
          </CardGroup>
        </div>
      </div>
    </>
  );
};

export default Contact;
