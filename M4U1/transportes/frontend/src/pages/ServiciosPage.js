import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../styles/ServiciosPage.css';

function ServiciosPage() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="./img/creativity.png" />
        <Card.Body>
          <Card.Title>Innovación</Card.Title>
          <Card.Text>
            Pensamos fuera de la caja
          </Card.Text>
        </Card.Body>
        </Card>
      <Card>
        <Card.Img variant="top" src="./img/palomo.png" />
        <Card.Body>
          <Card.Title>Comunicación</Card.Title>
          <Card.Text>
          Crear contenido y darlo a conocer al mundo
          </Card.Text>
        </Card.Body>
        </Card>
      <Card>
        <Card.Img variant="top" src="./img/target.png" />
        <Card.Body>
          <Card.Title>Estrategia</Card.Title>
          <Card.Text>
          Para la creación de Marca
          </Card.Text>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="./img/social-media.png" />
        <Card.Body>
          <Card.Title>Digital</Card.Title>
          <Card.Text>
          Tu presencia Digital
          </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>
  );
}

export default ServiciosPage;