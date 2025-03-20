import React from 'react';

function Localizacion() {
    return (
        <div className='localizacion'>
            <img src="./Img/mapa.webp" alt="Mapa interactivo de la region" />
            <div className='zonas'>
                <div className='parque'>Parque Infantil</div>
                <div className='campas'>Campas Deportivas</div>
                <div className='granja'>Establos y Granja</div>
                <div className='pistas'>Pistas de sky</div>
                <div className='rutas'>Rutas y Miradores</div>
            </div>
        </div>
    );
}
export default Localizacion; 