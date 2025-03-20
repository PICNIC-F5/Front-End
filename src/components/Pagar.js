import React from 'react';
import Boton from './Boton';
import { useNavigate } from 'react-router-dom';

const Pagar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h4>Compromisos </h4> {/* <h1> Compromisos </h1>  */}
            <Boton texto="Volver" accion={() => navigate("/")} />
        </div>
    );
};

export default Pagar;