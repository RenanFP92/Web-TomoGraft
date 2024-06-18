import { Accordion, Card, Button } from 'react-bootstrap';

const FAQItem = ({ eventKey, question, answer }) => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
          {question}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          {answer}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FAQItem;