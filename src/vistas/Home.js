import React from "react";
import Boton from "../components/boton/Boton";
import { useNavigate } from "react-router-dom";
import "../components/boton/Boton.css";
const Home = () => {
  const navigate = useNavigate();
  const volverPagar = () => {
    navigate("/pagar");
  };
  return (
    <Boton texto="Volver a Pagar" 
    accion={volverPagar} 
    className="botonH" />
  );
};

export default Home;
