import React from 'react';
const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='creatividadimg'>
                <img src='img/creativity.png' width='75' alt='cerebro creativo' />
            </div>
            <div className='columns'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos a nuestro sitio Web</h2>
                    <p>Esta es una prueba del diseño del sitio web</p>
                    <p>Este es el diseño de 2 columnas que estamos probando</p>
                </div>

                <div className='testimonios'>
                        <h2>Testimonios</h2>
                        <div className='testimonio'>
                            <span class='cita'>Simplemente Excelente</span>
                            <span class='autor'>Juan Perez - Emprendedor.com</span>
                        </div>
                </div>

            </div>


        </main>

    );
}
export default HomePage;