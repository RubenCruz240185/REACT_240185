import miLogo from './assets/Logos/kyle.png';
import linkedin from './assets/LogosRedes/linkedin.png';
import instagram from './assets/LogosRedes/instagram.png';
import github from './assets/LogosRedes/github.png';
import './Encabezado.css';

function Encabezado() {
    return (
        <div className="Encabezado">
            <div>
                <Logo/>
                <Menu/>
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

function Menu(){
    return (
    <div className="menuDiv">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>   
            <li><a href="#">Sucursales</a></li>
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
export default Encabezado