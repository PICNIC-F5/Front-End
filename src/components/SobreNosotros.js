import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from './Logo';
import Boton from "./boton/Boton";
import Mapa from "./Mapa";

const SobreNosotros = () => {
  const navigate = useNavigate();
  
  const volverHome = () => navigate("/home");
  const volverInicio = () => navigate("/");
  const volverPagar = () => navigate("/pagar");
  
  return (
    <div className="sobreNosotros-container">
      <header className="header">
        <Logo />
        <Boton 
          texto="Emergencias"
          accion={() => alert("Emergencia activada. En seguida llegará la ayuda")}
          className="botonE"
        /> 
      </header>

      <section className='mapa-section'>
        <Mapa />
      </section>

      <article className="text-section">
        {/* Aquí puedes agregar texto o cualquier otro contenido que necesites */}
      </article>

      <Boton 
        texto="Home" 
        accion={volverHome} 
        className="botonH" 
      />

      <Boton 
        texto="Pagar" 
        accion={volverPagar} 
        className="botonH" 
      />

      <Boton 
        texto="Inicio"
        accion={volverInicio}
        className="botonH" 
        />
        <Boton  
        texto="Home" 
        accion={volverHome} 
        className="botonH" 
        />
        </div>

     

      
      
  );
};

export default SobreNosotros;
