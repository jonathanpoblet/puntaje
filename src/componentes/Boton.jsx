import React from 'react';
import '../styles/Boton.css'

const Boton = (props) => {
    return (
        <button className='boton' onClick={() => props.sumarPuntos()}>
            {props.children}
        </button>

        
    );
}

export default Boton;
