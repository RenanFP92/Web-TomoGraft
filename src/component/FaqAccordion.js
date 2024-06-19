import { useState, useRef } from 'react';
import './FaqAccordion.css';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {[
        { question: "¿Pregunta frecuente 1?", answer: "Respuesta a la pregunta frecuente 1." },
        { question: "¿Pregunta frecuente 2?", answer: "Respuesta a la pregunta frecuente 2." },
        { question: "¿Pregunta frecuente 3?", answer: "Respuesta a la pregunta frecuente 3." }
      ].map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            {item.question}
          </div>
          <div
            ref={el => contentRefs.current[index] = el}
            className={`accordion-body ${activeIndex === index ? 'active' : ''}`}
            style={{
              maxHeight: activeIndex === index ? `${contentRefs.current[index].scrollHeight}px` : '0'
            }}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;