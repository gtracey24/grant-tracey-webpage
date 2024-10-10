import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project_card_well_coffee from '../assets/project_card_well_coffee.png'

function WellCoffeeProjectCard() {
  return (
    <Card style={{ width: '18rem' }} text='dark' class='  font-family: "Libre Franklin", sans-serif;'>
      <Card.Img variant="top" src={project_card_well_coffee} alt="Well Coffee inventory app image" />
      <Card.Body>
        <Card.Title>Well Coffee Inventory App</Card.Title>
        <Card.Text>
          A fully featured inventory app built by four developers that serves as my capstone project 
          for the LaunchCode Web Development program.
        </Card.Text>
        <a href='https://youtu.be/QogPuY8nQNY?si=Kz-axGO7QK7RmAdR' target='_blank'>
        <Button variant="primary">Video Demo</Button>
        </a>
        <a href='https://github.com/gtracey24/well-coffee' target='_blank'>
        <Button variant="secondary">GitHub</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default WellCoffeeProjectCard;