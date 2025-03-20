import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';



//creación de root para redenderizar aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'));
//remderizamos el componente
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);