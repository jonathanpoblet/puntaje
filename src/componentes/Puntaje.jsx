import React from 'react';
import '../styles/Puntaje.css'

const Puntaje = ({ puntaje }) => {
    return (
        <div className= {puntaje >= 0 ? 'puntaje' : 'puntaje-negativo'}>
            {puntaje}
        </div>
    );
}

export default Puntaje;
