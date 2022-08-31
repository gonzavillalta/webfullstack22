//  
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import '../styles/ContactoPage.css';


const ContactoPage = (props) => {

    const initialForm = {
        Nombre: '',
        Email: '',
        Telefono: '',
        mensaje: ''
    }

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);

const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
        ...oldData,
        [name]: value
    }));
}

const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await
    axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
        setFormData(initialForm)
    }
}

    return (
        <main className='holder'>
            <div>
                <form action='/contacto' method='post' className='formulario' onSubmit={handleSubmit}>
                    <h2>CONTACTO</h2>

                    {/* <label for='nombre'>Nombre </label> */}
                    <input type='text' name='Nombre'  value={formData.nombre} onChange={handleChange} 
                    placeholder='Nombre' />


                    {/* <label for='email'> Email   </label> */}
                    <input type='text' name='Email' value={formData.Email} onChange={handleChange}  
                    placeholder='Email' />


                    {/* <label for='telefono'>Telefono </label> */}
                    <input type='text' name='Telefono' value={formData.Telefono} onChange={handleChange}
                    placeholder='Telefono' />


                    {/* <label for='mensaje'>Mensaje </label> */}
                    <textarea name='mensaje' value={formData.mensaje} onChange={handleChange} 
                    placeholder='Mensaje' />
                    
                    <p class='acciones'><input type='submit' value='ENVIAR' />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
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
                <FontAwesomeIcon icon={faInstagram} size='3x' width={'5cm'} />
                <FontAwesomeIcon icon={faFacebookF} size='3x' width={'5cm'} />

            </div>

        </main>

    );
}
export default ContactoPage;