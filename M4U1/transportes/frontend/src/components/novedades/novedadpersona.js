import React from 'react';

const Novedadpersona = (props) => {
    const { nombre, apellido, edad, puesto, imagen, body } = props;

    return (
        <div className='novedades'>
            <h2>{nombre}</h2>
            <h2>{apellido}</h2>
            <h3>{edad}</h3>
            <h4>{puesto}</h4>
            <img src='{imagen}'alt=''/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default Novedadpersona;