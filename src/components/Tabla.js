import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Tabla = () => {
    const [comida, setComida] = useState([
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
        {id:1, nombre:"L", precio:12, cantidad:0},
    ])

    const [bebida,setBebida] = useState([
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
        {id:1, nombre:"B", precio:4, cantidad:0},
    ]);
    
    const manejarCantidad = (producto, tipo) => {
        if (tipo === 'sumar') {
           if(producto.cantidad < 3) {
                producto.cantidad += 1;
            }
        } else if (tipo === 'restar' && producto.cantidad >0) {
            producto.cantidad -= 1;
        }
        setComida([...comida]);
        setBebida([...bebida]);
};

const calcularTotal = () => {
    const totalComida = comida.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const totalBebida = bebida.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    
    return totalComida + totalBebida;

};

const navigate = useNavigate();
const pagar = () => {
    navigate('/pagar', {state: {total: calcularTotal() } });
};

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
                        {bebida.map((item) => (
                        <div key={item.id}>
                        <img src=" " alt={item.nombre} style={{ width: '50px', height: '50px' }} />
                        <p>{item.nombre}</p>
                        <boton sumar />
                        <boton restar />
                     
                        </div>
                        ))}
                    </td>

                    <td>
                        {comida.map((item) => (
                            <div key={item.id}>
                                <img src=" " alt={item.nombre} style={{ width: '50px', height: '50px' }} />
                                <p>{item.nombre}</p>
                                <boton sumar />
                                <boton restar />

                            </div>
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
        <boton pagar/>
    </div>

);
};
export default Tabla;