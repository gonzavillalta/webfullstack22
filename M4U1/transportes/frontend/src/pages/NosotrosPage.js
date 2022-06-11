import React from 'react';
const NosotrosPage = (props) => {
    return (
        <main className='holder'>
            <div className='historia'>
                <h2>Nuestra Historia</h2>
                <p>Creada por apasionados del Marketing, somos una consultora boutique de Marketing con sentido</p>
                <p>Iniciamos nuestro vuelo en Argentina y el mundo es nuestra casa</p>
         

            </div>
            <div className='staff'>
                <h2>Staff</h2>
                <div className='personas'>
                    <img src='img/palomo.png' width="100" alt='Palomo'></img>
                    <h5>Juan Palomo</h5>
                    <h6>Director Creativo</h6>
                    <p>Apasionado del Marketing Digital</p>
                </div>
            </div>

        </main>
           
    );
}
export default NosotrosPage;