import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import logo from '../assets/logo.png'

function PrecisionCard() {
  return (
    <Card style={{ width: '16rem' }} text='dark' class='  font-family: "Libre Franklin", sans-serif;'>
      <Card.Img variant="top" src={logo} alt="Williams Precise Remodels" />
      <Card.Body>
        <Card.Title>Williams Precise Remodels</Card.Title>
        <Card.Text>
          A business website for Williams Precise Remodels. Built with HTML and CSS.
        </Card.Text>
        <a href='https://www.williamspreciseremodels.com/' target='_blank'>
        <Button variant="primary">Web Site</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default PrecisionCard;