import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../styles/ServiciosPage.css';

function ServiciosPage() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src='img/creativity.png' alt='cerebro creativo' />
                <Card.Body>
                    <h1>Innovacion</h1>
                    <p>
                        Pensamos fuera de la caja
                    </p>
                    <Button variant="primary">Conoce Más</Button>
                </Card.Body>
            </Card>
            

            <Card>
                <Card.Img variant="top" src='img/palomo.png' alt='Palomo' />
                <Card.Body>
                    <h1>Comunicación</h1>
                    <p>
                        Crear contenido y darlo a conocer al mundo
                    </p>
                    <Button variant="primary">Conoce Más</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src='img/target.png'   alt='Target' />
                <Card.Body>
                   
                <div className='d-grid gap-2'>
                <Button variant="danger" size='lg'>Estrategia</Button>{' '}
                </div>
                    
                    <p>
                        Para la creación de Marca
                    </p>
                    
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src='img/social-media.png' alt='social media' />
                <Card.Body>
                    <h1>Digital</h1>
                    <p>
                        Tu presencia Digital
                    </p>
                    <Button variant="primary">Conoce Más</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}
export default ServiciosPage;


// const ServiciosPage = (props) => {
// return (
    //     <section className='holder'>
    //         <h2>Nuestros Servicios</h2>
    //         <div className='servicios'>
    //             <div className='estrategia'>
    //                 <img src='img/creativity.png' width='75' alt='cerebro creativo' />
    //                 <h3>Estrategia</h3>
    //                 <p>Para la creacion de Marca</p>
    //             </div>
    //             <div className='comunicacion'>
    //                 <img src='img/palomo.png' width="75" alt='Palomo'></img>
    //                 <h3>comunicación</h3>
    //                 <p>Presencia en las redes</p>
    //             </div>
    //         </div>
    //     </section>
    // );
