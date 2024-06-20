import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Contactanos.css'; // Importar hoja de estilos personalizada

const Contactanos = () => {
  return (
    <Container className="mt-5 p-4" style={{ backgroundColor: '#3bb6b2', borderRadius: '8px' }}>
      <h2 className="text-white">Formulario de atención</h2>
      <p className="text-white">Ingresa tus datos y nuestro equipo te contactará a la brevedad.</p>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formNombre">
              <Form.Label className="text-white">NOMBRE:</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formApellido">
              <Form.Label className="text-white">Apellido:</Form.Label>
              <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formCorreo">
              <Form.Label className="text-white">Correo principal:</Form.Label>
              <Form.Control type="email" placeholder="Correo principal" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formWhatsApp">
              <Form.Label className="text-white">WhatsApp:</Form.Label>
              <Form.Control type="text" placeholder="WhatsApp" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formConsulta">
          <Form.Label className="text-white">Escribe tu consulta:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escribe tu consulta" />
        </Form.Group>
        <Button variant="light" type="submit" className="mt-3">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contactanos;