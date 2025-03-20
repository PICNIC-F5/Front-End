import React, {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Logo from './components/Logo';
import Boton from './components/boton/Boton';
import Pagar from './vistas/Pagar';
import Localizacion from './components/Mapa';
import Carrusel from './components/carrusel/Carrusel';
import Home from './vistas/Home';
import './App.css';

const App = () => {
    const [contador, setContador] = useState(0);

    

    const sumar = () => {
        setContador(contador +1);
    };
    
    const restar = () => {
        setContador(contador -1);
    };
    
    return (
        
        <div className='App'>
        <Logo />
        <Carrusel />
        <Localizacion />
        <Boton 
    texto="+"
    accion={sumar}
    className="botonR"
        /> 
        <Boton 
    texto="-"
    accion={restar}
    className="botonR"
        /> 
         <Boton 
    texto="Emergencias"
    accion={() => alert("Emergencia activada. En seguida llegara la ayuda")}
    className="botonE"
        /> 
  

    <Routes>  {/* Usamos Routes para envolver las rutas */}
      <Route path="/" element={<Home />} />  {/* Ruta principal que muestra el componente Home */}
      <Route path="/pagar" element={<Pagar />} />  {/* Ruta para la vista de pagar */}
    </Routes>
  </div>
   
  );
}

export default App;