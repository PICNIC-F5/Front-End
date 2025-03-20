import { useNavigate } from 'react-router-dom';

const Boton = ({ accion, texto, estilo}) => {
    const navigate = useNavigate();

const handleClick = () => {
    if (accion === "pagar") {
        navigate('/pagar');
    } else if (accion === "/emergencias") {
        alert("Llamada a emergencias. La ayuda esta en camino");
    } else if (accion === "/volver") {
        navigate(-1);
    }
};
return(
   <button onClick={handleClick} style={estilo}>
        {texto}
    </button>
    );
};

export default Boton;
