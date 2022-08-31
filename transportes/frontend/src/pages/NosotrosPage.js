// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Novedadpersona from '../components/novedades/novedadpersona';
import '../styles/NosotrosPage.css'


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
           
            <div className='holder'>          
                <h2>Staff</h2>
                <div className='personas'>
                    <div className='persona'>
                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            novedades.map(persona => <Novedadpersona key={persona.id}
                                nombre={persona.nombre} apellido={persona.apellido} 
                                edad={persona.edad} puesto={persona.puesto} 
                                imagen={persona.img_id}/>)
                        )}
                    </div>

                </div>

            </div>
        </main>
    );
}
export default NosotrosPage;