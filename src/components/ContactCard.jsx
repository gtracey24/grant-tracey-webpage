import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import linkedin_icon from '../assets/linkedin_icon.png';
import github_icon from '../assets/github_icon.png';
import family_gabe_wedding from '../assets/family_gabe_wedding.jpg';
import white_shirt from "../assets/white_shirt.png";

function ContactCard() {
  return (
    <Card style={{ width: '24rem' }} text='dark' border='none'>
      <Card.Img variant="bottom" src={white_shirt} alt='Grants profile image'/>
      <Card.Body>
        <Card.Title>Connect with me</Card.Title>
        <Card.Text>
          Send me a message or connect with me on these networks!
        </Card.Text>
        <a href="https://www.linkedin.com/in/grant-tracey-4b475088" target='_blank'>
        <img src={linkedin_icon} alt="linkin icon"/>
        </a>
        <a href="https://github.com/gtracey24" target='_blank' >
        <img src={github_icon} alt="github icon"/>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;