import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import '../styles/ContactoPage.css';


const ContactoPage = (props) => {
    return (
        <main className='holder contacto'>
            <div>

                <form action='' method='' className='formulario'>
                    <h2>CONTACTO</h2>

                    {/* <label for='nombre'>Nombre </label> */}
                    <input type='text' name='Nombre' placeholder='Nombre' />


                    {/* <label for='email'> Email   </label> */}
                    <input type='text' name='Email' placeholder='Email' />


                    {/* <label for='telefono'>Telefono </label> */}
                    <input type='text' name='Telefono' placeholder='Telefono' />


                    {/* <label for='mensaje'>Mensaje </label> */}
                    {/* <input type='text' name='Mensaje' placeholder='Mensaje'/> */}
                    <textarea name='mensaje' placeholder='Mensaje' />
                    <p class='acciones'><input type='submit' value='ENVIAR' />
                    </p>

                </form>

            </div>
            <div class='datos'>
                <h2>Otras vias de comunicación</h2>
                <p>Felices que nos contacte para contarnos que trae en mente</p>
                <ul>
                    <li>+57 3056893245</li>
                    <li>HABLEMOS@parvadas.com</li>

                </ul>

            </div>

            <div className='redes'>
            <FontAwesomeIcon icon={faLinkedinIn} size='3x' width={'5cm'} />
            <FontAwesomeIcon icon={faInstagram} size='3x' width={'5cm'}/>
            <FontAwesomeIcon icon={faFacebookF} size='3x'width={'5cm'}/>
                              
            </div>

        </main>

    );
}
export default ContactoPage;