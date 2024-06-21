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
      <h3 id="faq">PREGUNTAS FRECUENTES</h3>
      {[
        { question: "¿TIENEN OTRA SEDE?", answer: "Actualmente solo contamos con nuestra sede en San miguel pero a guturo estaremonos expandiendo para estar más cerca a nuestros pacientes y darles mayor comodidad." },
        { question: "¿CUALES SON SUS HORARIOS DE ATENCIÓN?", answer: "Nuestra atención es de Lunes a Sábado de 9:30 am - 6:30 pm." },
        { question: "¿CUANTOS AÑOS DE EXPERIENCIA TIENEN?", answer: "Contamos con 4 años de experiencia en nuestro trabajo y aemás de los años de experiencias con los que cuentan nuestros trabajadores ene el rubro de la tomografía" },
        { question: "¿CUENTAN CON DESCUENTO DE SEGURO?", answer: "Actualmente no contamos con afiliaciones de seguros" },
        { question: "¿EN CUANTO TIEMPO ESTA LA RADIOGRAFÍA O TOMOGRAFÍA?", answer: "Las radiografías estan listas en 10 minutos y tomografías en 20 minutos" },
        { question: "¿EN CUANTO TIEMPO ESTA EL INFORME Y SE LE ENVIA AL DOCTOR?", answer: "El informe siempre es enviado al doctor del paciente con un plazo de tiempo de un día habil" }
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
            <hr></hr>
          {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;