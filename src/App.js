import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Boton from './components/Boton';
import Pagar from './vistas/Pagar';
import Localizacion from './components/Mapa';
import Carrusel from './components/carrusel/Carrusel';
import Home from './vistas/Home';



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
    estilo={{ backgroundColor:"rgb(103, 180, 72)" , color: "black", borderRadius: "35px", width: '50px', height: "50px", fontSize: "30px", fontWeight: "bold"}}
        /> 
        <Boton 
    texto="-"
    accion={restar}
    estilo={{ backgroundColor:"rgb(103, 180, 72)" , color: "black", borderRadius: "35px", fontSize: "30px", fontWeight: "bold", width: '50px', height: "50px"}}
        /> 
        <Boton 
    texto="Pagar"
    accion="pagar"
    estilo={{ backgroundColor:"rgb(103, 180, 72)" , color: "black", borderRadius: "15px", width: '300px', height: "50px", fontSize: "30px", fontWeight: "bold"}}
        /> 

         <Boton 
    texto="Emergencias"
    accion="emergencias"
    estilo={{ backgroundColor: "red" , color: "black", borderRadius: "15px", width: '300px', height: "50px", fontSize: "30px", fontWeight: "bold"}}
        /> 
    <Routes>  {/* Usamos Routes para envolver las rutas */}
      <Route path="/" element={<Home />} />  {/* Ruta principal que muestra el componente Home */}
      <Route path="/pagar" element={<Pagar />} />  {/* Ruta para la vista de pagar */}
    </Routes>
  </div>
  );
}

export default App;