import React from 'react';
import { useNavigate } from 'react-router-dom';

const Boton = ({ accion, texto, estilo}) => {
    const navigate = useNavigate();

const handleClick = () => {
    if (accion === "pagar") {
        requestIdleCallback(() => {
        navigate('/pagar');
    });
    } else if (accion === "emergencias") {
        alert("Llamada a emergencias. La ayuda esta en camino");

    };
};
return(
   <button onClick={handleClick} style={estilo}>
        {texto}
    </button>
    );
};

export default Boton;
