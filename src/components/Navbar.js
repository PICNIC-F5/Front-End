import React from "react";
import { useNavigate } from "react-router-dom"; // Usamos useNavigate para cambiar de rutas
import Boton from "./boton/Boton"; // Componente Botón

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-buttons">
      <Boton texto="Home" accion={() => navigate("/")} className="botonH" />
      <Boton texto="Pagar" accion={() => navigate("/pagar")} className="botonH" />
      <Boton texto="Sobre Nosotros" accion={() => navigate("/sobreNosotros")} className="botonH" />
    </nav>
  );
};

export default Navbar;
