// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Novedadpersona from '../components/novedades/novedadpersona';


const NosotrosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);
    return (
        <main className='holder'>
            <div className='historia'>
                <h2>Nuestra Historia</h2>
                <p>Creada por apasionados del Marketing, somos una consultora boutique de Marketing con sentido</p>
                <p>Iniciamos nuestro vuelo en Argentina y el mundo es nuestra casa</p>


            </div>
            <div className='staff'>
                <h2>Staff</h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(persona => <Novedadpersona key={persona.id}
                        nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} puesto={persona.puesto} imagen={persona.imagen} />)

                )}
                <div className='persona'>
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