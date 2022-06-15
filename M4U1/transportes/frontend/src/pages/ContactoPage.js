import React from 'react';
const ContactoPage = (props) => {
    return (
        <main className='holder contacto'>
            <div>
                <h2>Contacto Rápido</h2>
                <form action='' method='' className='formulario'>
                    <p>
                        <label for='nombre'>Nombre </label>
                        <input type='text' name=''/>
                    </p>
                    <p>
                        <label for='email'> Email   </label>
                        <input type='text' name=''/>
                    </p>
                    <p>
                        <label for='telefono'>Telefono </label>
                        <input type='text' name=''/>
                    </p>
                    <p>
                        <label for='mensaje'>Mensaje </label>
                        <input type='text' name=''/>
                    </p>
                    <p class='acciones'><input type='submit' value='enviar'/>

                    </p>

                </form>

            </div>
            <div class='datos'>
                <h2>Otras vias de comunicación</h2>
                <p>Felices que nos contacte para contarnos que trae en mente</p>
                <ul>
                    <li>Telefono: +57 3056893245</li>
                    <li>Email: hablemos@parvadas.com</li>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>

            </div>

        </main>

    );
}
export default ContactoPage;