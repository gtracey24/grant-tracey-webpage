import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WellCoffeeProjectCard() {
  return (
    <Card style={{ width: '18rem' }} text='dark'>
      <Card.Img variant="top" src="project-card-well-coffee.png" />
      <Card.Body>
        <Card.Title>Well Coffee Inventory App</Card.Title>
        <Card.Text>
          A fully featured inventory app built by four developers that serves as my capstone project 
          for the LaunchCode Web Development program.
        </Card.Text>
        <Button variant="primary">Video Demo</Button>
        <Button variant="secondary">GitHub</Button>
      </Card.Body>
    </Card>
  );
}

export default WellCoffeeProjectCard;