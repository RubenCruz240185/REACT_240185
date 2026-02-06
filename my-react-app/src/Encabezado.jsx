import miLogo from './assets/Logos/kyle.png';
import linkedin from './assets/LogosRedes/linkedin.png';
import instagram from './assets/LogosRedes/instagram.png';
import github from './assets/LogosRedes/github.png';
import './Encabezado.css';
import PropTypes from'prop-types';

function Encabezado({cambiarVista}) {
    return (
        <div className="Encabezado">
            <div>
                <Logo/>
                <Menu cambiarVista={cambiarVista}/>
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
function Menu({cambiarVista}){
    return (
    <div className="menuDiv">
        <ul>
            <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
            <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
            <li onClick={() => cambiarVista("Conatcto")}>Contacto</li>
            <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
            <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
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
        </div>
    )
}
Encabezado.propTypes = {
    cambiarVista : PropTypes.func.isRequired
}
Menu.propTypes = {
    cambiarVista : PropTypes.func.isRequired
}
export default Encabezado;