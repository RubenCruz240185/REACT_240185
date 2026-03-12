import PropTypes from'prop-types';
import AcercaDe from './AcercaDe.jsx';
import Contacto from './Contacto.jsx';
import Sucursales from './Sucursales.jsx';
import Galeria from './Galeria.jsx'
import Productos from './Productos.jsx';
import Usuarios from './Usuarios.jsx';
import Carrito from './Carrito.jsx';
import Login from './Login.jsx';
import RegistrarUsuario from './RegistrarUsuario.jsx';
import './ContenedorTarjetas.css';
import Mapa from './Mapa';
import Categorias from './Categorias';


function ContenedorTarjetas({vista, carritoLocal, agregarAlCarrito, CambiarVista}) {
    const vistas = {
        "Inicio": <Inicio/>,
        "AcercaDe": <AcercaDe/>,
        "Contacto": <Contacto CambiarVista={CambiarVista} />,
        "Sucursales": <Sucursales/>,
        "Galeria": <Galeria/>,
        "Productos": <Productos onAgregarCarrito={agregarAlCarrito} />,
        "Usuarios": <Usuarios/>,
        "Carrito": <Carrito carritoLocal={carritoLocal} />,
        "Login": <Login CambiarVista={CambiarVista} />,
        "RegistrarUsuario": <RegistrarUsuario CambiarVista={CambiarVista} />,
        "Categorias": <Categorias />
        
    }
    return (
        <div className="ContenedorDiv">
            {vistas[vista] || vistas["Inicio"]}
        </div>
        );
    }
    
function Tarjeta(props) {
    const { imagen, titulo, descripcion, lat, lng, mapHeight = '140px' } = props;
    return (
        <div className="Tarjeta">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            {typeof lat === 'number' && typeof lng === 'number' ? (
                <div style={{ width: '100%', marginTop: 8 }}>
                    <Mapa lat={lat} lng={lng} height={mapHeight} />
                </div>
            ) : null}
        </div>
    );
}
function Inicio(){
    return(
        <>
        <div className="ContenedorTarjetas">
            <div className="tarjetas">
                        <Tarjeta
                            titulo="Vinilos clásicos"
                            descripcion="Ediciones originales y reediciones remasterizadas: rock, jazz, soul y más."
                            imagen="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60"
                        />
                        <Tarjeta
                            titulo="CDs coleccionables"
                            descripcion="Ediciones limitadas, bonus tracks y cajas de colección para amantes del formato compacto."
                            imagen="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60"
                        />
                        <Tarjeta
                            titulo="Singles (45 RPM)"
                            descripcion="Discos sencillos y rarezas para completar tu colección de singles."
                            imagen="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=60"
                        />
                        <Tarjeta
                            titulo="Accesorios & tornamesas"
                            descripcion="Agujas, fundas, limpiadores y tornamesas para disfrutar mejor tus discos."
                            imagen="https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=800&q=60"
                        />
       </div>
       </div>
       </>
    );
}

ContenedorTarjetas.propTypes = {
    vista: PropTypes.string.isRequired,
    carritoLocal: PropTypes.arrayOf(PropTypes.object).isRequired,
    agregarAlCarrito: PropTypes.func.isRequired,
    CambiarVista: PropTypes.func.isRequired,
};
export default ContenedorTarjetas;
