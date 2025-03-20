import React, { useState } from 'react';


return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Comida</th>

                    <th>Bebida</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {comida.map((item) => (
                            <div key={item.id}>
                                <img src={item.imagen} alt={item.nombre} style={{ width: '50px', height: '50px' }} />
                                <p>{item.nombre}</p>
                                <Boton accion="sumar" />
                                <Boton accion="restar" />

                            </div>
                            
                        ))}
                    </td>
                    <td>
                        {bebida.map((item) => (
                            <div key={item.id}>
                                <img src={item.imagen} alt={item.nombre} style={{ width: '50px', height: '50px' }} />
                                <p>{item.nombre}</p>
                                <Boton accion="sumar" />
                                <Boton accion="restar" />

                            </div>
                            
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
        <boton pagar/>
    </div>

);

export default Tabla;