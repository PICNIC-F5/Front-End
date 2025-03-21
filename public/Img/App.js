import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Cambio aquí
import Home from './components/Home'; // Cambié la ruta
import Pagar from './components/Pagar';
import SobreNosotros from ',/components/sobreNosotros';
import Boton from './components/boton/Boton.css'; // Cambié la rut
import Logo from './components/Logo';
import Carrusel from ' // Cambié la ruta

function App() {
  return (
    
      <div className="app-container">
        <header className="header">
          <Logo />
          <Boton 
            texto="Emergencias" 
            accion={() => alert("Emergencia activada. En seguida llegará la ayuda")}
            className="botonE" 
          />
        </header>

        <Carrusel /> {/* Aquí se coloca el carrusel en el header o donde lo necesites */}
      <Boton 
        texto="Sobre Nosotros"
        accion={sobreNosotros}
        className="botonH"
        />
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
  </div>
  )
}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagar" element={<Pagar />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
        </Routes>
      

export default App;
