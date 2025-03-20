import React from 'react';
import './Boton.css';


const Boton = ({ accion, texto, className }) => {
    return(
       <button onClick={accion} className= {className}>
            {texto}
        </button>
        );
    };
    
    export default Boton;
   


