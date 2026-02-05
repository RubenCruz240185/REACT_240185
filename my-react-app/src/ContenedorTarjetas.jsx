import './ContenedorTarjetas.css';
import tarjeta from './assets/react.svg';

function ContenedorTarjetas() {
    return (
        <div className="ContenedorTarjeta">
            <Tarjeta titulo="Java" descripcion="Lenguaje de programación orientado a objetos"/>
            <Tarjeta titulo="Python" descripcion="Lenguaje de programación interpretado"/>
            <Tarjeta titulo="JavaScript" descripcion="Lenguaje de programación del lado del cliente"/>
            <Tarjeta titulo="C++" descripcion="Lenguaje de programación compilado"/>
        </div>
    )
}
function Tarjeta(props) { 
    return ( 
    <div className="Tarjeta"> 
    <img src={tarjeta} alt="Imagen de la tarjeta" /> 
    <h3>{props.titulo}</h3> 
    <p>{props.descripcion}</p>
     <a href="#">Ver más</a> 
     </div> 
     ); 
    }

export default ContenedorTarjetas;
