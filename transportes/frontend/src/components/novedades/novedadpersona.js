import React from 'react';

const Novedadpersona = (props) => {
    const { nombre, apellido, edad, puesto, img_id, body } = props;

    return (
        <div className='personas'>          
            <h3>{nombre}</h3>
            <h3>{apellido}</h3>
            <h4>{edad}</h4>
            <h5>{puesto}</h5>
            <imagen src={img_id} alt=''/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default Novedadpersona;