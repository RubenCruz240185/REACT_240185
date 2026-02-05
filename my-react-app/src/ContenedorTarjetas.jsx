import './ContenedorTarjetas.css';
import tarjeta from './assets/react.svg';

function ContenedorTarjetas() {
    return (
        <div className="ContenedorTarjeta">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
        </div>
    )
}
function Tarjeta() { 
    return ( 
    <div className="Tarjeta"> 
    <img src={tarjeta} alt="Imagen de la tarjeta" /> 
    <h3>Tarjeta</h3> 
    <p>Hola, que haces?</p>
     <a href="#">Ver más</a> 
     </div> 
     ); 
    }

export default ContenedorTarjetas;
