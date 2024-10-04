import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContactCard() {
  return (
    <Card style={{ width: '24rem' }} text='dark' border='light'>
      <Card.Img variant="bottom" src="family-gabe-wedding.jpg" />
      <Card.Body>
        <Card.Title>Connect with me</Card.Title>
        <Card.Text>
          Send me a message or connect with me on these networks!
        </Card.Text>
        <a href="https://www.linkedin.com/in/grant-tracey-4b475088">
        <img src='104493_linkedin_icon.png'/>
        </a>
        <a href="https://github.com/gtracey24">
        <img src='211904_social_github_icon.png' />
        </a>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;