import PropTypes from'prop-types';
import AcercaDe from './AcercaDe.jsx';
import Contacto from './Contacto.jsx';
import Sucursales from './Sucursales.jsx';
import Galeria from './Galeria.jsx'
import './ContenedorTarjetas.css';


function ContenedorTarjetas({vista}) {
    const vistas = {
        "Inicio": <Inicio/>,
        "AcercaDe": <AcercaDe/>,
        "Contacto": <Contacto/>,
        "Sucursales": <Sucursales/>,
        "Galeria": <Galeria/>
        
    }
    return (
        <div className="ContenedorDiv">
            {vistas[vista] || vistas["Inicio"]}
        </div>
        );
    }
    
function Tarjeta(props) { 
    return ( 
    <div className="Tarjeta"> 
    <img src={props.imagen} alt={props.titulo}/> 
    <h3>{props.titulo}</h3> 
    <p>{props.descripcion}</p>
     <a href="#">Ver más</a> 
     </div> 
     ); 
    }
function Inicio(){
    return(
        <>
        <div className="ContenedorTarjetas">
            <div className="tarjetas">
            <Tarjeta titulo="Java" descripcion="Lenguaje de programación orientado a objetos" imagen="https://ovacen.com/wp-content/uploads/2018/02/vinilos-para-paredes.jpg.webp"/>
            <Tarjeta titulo="Python" descripcion="Lenguaje de programación interpretado" imagen="https://images.pexels.com/photos/35900109/pexels-photo-35900109.jpeg?_gl=1*qqvy7b*_ga*NTc3MDUyOTEyLjE3NTk1MDk3MDU.*_ga_8JE65Q40S6*czE3NzA0MDUzMzYkbzMkZzEkdDE3NzA0MDUzNjAkajM2JGwwJGgw"/>
            <Tarjeta titulo="JavaScript" descripcion="Lenguaje de programación del lado del cliente"/>
            <Tarjeta titulo="C++" descripcion="Lenguaje de programación compilado"/>
       </div>
       </div>
       </>
    );
}

ContenedorTarjetas.propTypes = {
    vista: PropTypes.string.isRequired,
};
export default ContenedorTarjetas;
