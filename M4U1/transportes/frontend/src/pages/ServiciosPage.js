import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ServiciosPage() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src='img/creativity.png' width='75' alt='cerebro creativo' />
                <Card.Body>
                    <Card.Title>Innovacion</Card.Title>
                    <Card.Text>
                        Pensamos fuera de la caja
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src='img/palomo.png' width="75" alt='Palomo' />
                <Card.Body>
                    <Card.Title>Comunicación</Card.Title>
                    <Card.Text>
                        Crear contenido y darlo a conocer al mundo
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src='img/target.png' width="75" alt='Target' />
                <Card.Body>
                    <Card.Title>Estrategia</Card.Title>
                    <Card.Text>
                        Para la creación de Marca
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src='img/social-media.png' width="75" alt='social media' />
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
