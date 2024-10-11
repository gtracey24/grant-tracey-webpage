import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCardTemplate() {
  return (
    <Card style={{ width: '18rem' }} text='dark'>
      <Card.Img variant="top" src="project-card-template.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardTemplate;