import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Preguntas = () => {
    // Estado para controlar qué pregunta está abierta
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);

    // Array de preguntas y respuestas (aquí podrías obtener estos datos de una API o de otra fuente)
    const preguntasRespuestas = [
        {
            pregunta: '¿Qué es React?',
            respuesta: 'React es una biblioteca de JavaScript para construir interfaces de usuario.'
        },
        {
            pregunta: '¿Cómo se instala Bootstrap en un proyecto de React?',
            respuesta: 'Bootstrap se puede instalar usando npm o yarn. Debes importar el archivo CSS en tu proyecto.'
        },
        {
            pregunta: '¿Qué es un componente en React?',
            respuesta: 'Un componente en React es una pieza reutilizable de la interfaz de usuario, generalmente escrita en JavaScript.'
        }
    ];

    // Función para manejar el clic en una pregunta
    const togglePregunta = (index) => {
        if (preguntaAbierta === index) {
            // Si la pregunta está abierta, la cerramos
            setPreguntaAbierta(null);
        } else {
            // Si la pregunta está cerrada, la abrimos
            setPreguntaAbierta(index);
        }
    };

    return (
        <Accordion>
            {preguntasRespuestas.map((item, index) => (
                <Card key={index}>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey={index.toString()}
                            onClick={() => togglePregunta(index)}
                            aria-controls={`respuesta-${index}`}
                            aria-expanded={preguntaAbierta === index}
                        >
                            {item.pregunta}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body id={`respuesta-${index}`}>
                            {item.respuesta}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    );
};

export default Preguntas;