import miLogo from './assets/Logos/kyle.png';
import linkedin from './assets/LogosRedes/linkedin.png';
import instagram from './assets/LogosRedes/instagram.png';
import github from './assets/LogosRedes/github.png';
import './Encabezado.css';
import PropTypes from'prop-types';
import Clima from './Clima';
import { useAuth } from './AuthContext';

function Encabezado({CambiarVista}) {
    return (
        <div className="Encabezado">
            <div>
                <Logo/>
                <Menu CambiarVista={CambiarVista}/>
                <Redes/>
            </div> 
        </div>
    );
}

function Logo(){
    return (
        <div className="Logo">
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}
function Menu({CambiarVista}){
    const {isLoggedIn, logout} = useAuth();
    const handleLogout = () => {
        logout();
        CambiarVista("Inicio");
    };
    return (
    <div className="menuDiv">
        <ul>
            <li onClick={() => CambiarVista("Inicio")}>Inicio</li>
            <li onClick={() => CambiarVista("AcercaDe")}>Acerca de</li>
            <li onClick={() => CambiarVista("Productos")}>Productos</li>
            {isLoggedIn ? (
                <>
                    <li onClick={() => CambiarVista("Usuarios")}>Usuarios</li>
                    <li onClick={() => CambiarVista("Carrito")}>Carrito</li>
                    <li onClick={() => CambiarVista("Categorias")}>Categorías</li>
                    <li onClick={handleLogout}>Cerrar sesión</li>
                </>
            ) : (
                <li onClick={() => CambiarVista("Login")}>Login</li>
            )}
            <li onClick={() => CambiarVista("Galeria")}>Galeria</li>
            <li onClick={() => CambiarVista("Sucursales")}>Sucursales</li>
            <li onClick={() => CambiarVista("Contacto")}>Contacto</li>
        </ul>
    </div>
    );
}
function Redes(){
    return(
        <div className="redesDiv">
            <ul>
                <li><img src={instagram} alt="instagram"/></li>
                <li><img src={github} alt="github"/></li>
                <li><img src={linkedin} alt="linkedin"/></li>
            </ul>
            <Clima/>
        </div>
    )
}
Encabezado.propTypes = {
    CambiarVista : PropTypes.func.isRequired,
};
Menu.propTypes = {
    CambiarVista : PropTypes.func.isRequired,
};
export default Encabezado;
