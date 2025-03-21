import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "./boton/Boton";
import Logo from './Logo';
import Tabla from './Tabla';

function Pagar() {
  const [contador, setContador] = useState(0);
  const navigate = useNavigate();
  
  const volverHome = () => navigate("/home");
  const volverInicio = () => navigate("/");
  const sobreNosotros = () => navigate("/sobreNosotros");

  const sumar = () => {
    setContador(contador + 1);
  };
  
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div className='tabla-container'>
      <header className="header">
        <Logo />
        <Boton 
          texto="Emergencias"
          accion={() => alert("Emergencia activada. En seguida llegará la ayuda")}
          className="botonE"
        />
      </header>

      <section className="tabla">
        <Tabla contador={contador} />
        </section>
      <Boton
        texto="Home" 
        accion={volverHome} 
        className="botonH" 
      />

      <Boton 
        texto="Inicio"
        accion={volverInicio}
        className="botonH"
      />

      <Boton 
        texto="Sobre Nosotros"
        accion={sobreNosotros}
        className="botonH"
      />
    </div>
  );
}

export default Pagar;
        
     
     
        
    

      


