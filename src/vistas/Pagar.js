import React from "react";
import Boton from "../components/boton/Boton";
import { useNavigate } from "react-router-dom";
import "../components/boton/Boton.css";

const Pagar = () => {
  const navigate = useNavigate();
  const volverHome = () => {
    navigate("/");
  };
    return (
      <Boton 
      texto="Volver a Home" 
      accion={volverHome} 
      className="botonH" />
    );
  };


export default Pagar;
