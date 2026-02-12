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
     </div> 
     ); 
    }
function Inicio(){
    return(
        <>
        <div className="ContenedorTarjetas">
            <div className="tarjetas">
            <Tarjeta titulo="Vinilos clásicos" descripcion="Ediciones originales y reediciones remasterizadas: rock, jazz, soul y más." imagen="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60"/>
            <Tarjeta titulo="CDs coleccionables" descripcion="Ediciones limitadas, bonus tracks y cajas de colección para amantes del formato compacto." imagen="https://unsplash.com/photos/a-pile-of-books-sitting-on-top-of-a-wooden-table-6-6OBSLyPw"/>
            <Tarjeta titulo="Singles (45 RPM)" descripcion="Discos sencillos y rarezas para completar tu colección de singles." imagen="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=60"/>
            <Tarjeta titulo="Accesorios & tornamesas" descripcion="Agujas, fundas, limpiadores y tornamesas para disfrutar mejor tus discos." imagen="https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=800&q=60"/>
       </div>
       </div>
       </>
    );
}

ContenedorTarjetas.propTypes = {
    vista: PropTypes.string.isRequired,
};
export default ContenedorTarjetas;
