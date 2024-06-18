import { Accordion } from 'react-bootstrap';
import FAQItem from './FAQItem';

const FAQ = ({ faqs }) => {
  return (
    <Accordion defaultActiveKey="0">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          eventKey={index.toString()}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </Accordion>
  );
};

export default FAQ;