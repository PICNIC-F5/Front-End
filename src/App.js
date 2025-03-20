import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Logo from './components/Logo';
import Boton from './components/Boton';
import Pagar from './components/Pagar';
import Localizacion from './components/Mapa';
import Carrusel from './components/carrusel/Carrusel';
import Tabla from './components/Tabla';
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
        <Router>
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
                {/* EMERGENCIAS */}
         <Boton 
    texto="Emergencias"
    accion="emergencias"
    estilo={{ 
        position: "absolute", 
        top: "1rem", 
        right: "5rem",
        width: "9rem",
        height: "7rem",
        background:"transparent",
        backgroundImage: "url('/Img/emergenciaBTN.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        border: "none",
        fontSize: "0",
    }}
        /> 
    </div> 
            <Routes>
                <Route path="/pagar" element={<Pagar />} />
                <Route path="/" element={
                    <div />
                    
                } />
            </Routes>
        </Router>
    );
 };


export default App;
        
        
        
        


