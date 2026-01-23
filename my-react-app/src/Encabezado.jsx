import logo from './assets/Logos/kyle.png';
import linkedin from './assets/LogosRedes/linkedin.png';
import instagram from './assets/LogosRedes/instagram.png';
import github from './assets/LogosRedes/github.png';
import './Encabezado.css';
function Encabezado(){
    return (
        <div>
            <Logo/>
            <Menu/>
            <Redes/>
            <h2>Bienvenido al hot-dog rush</h2>
        </div>
    );
}
function Logo(){
    return(<div>
            <img src={logo} alt="ReactLogo"/>
            
        </div>
    )
}
function Menu(){
    return(
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Fotos</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    )
}
function Redes(){
    return(
        <nav>
            <ul>
                <img src={instagram} alt="instagram"/>
                <img src={github} alt="github"/>
                <img src={linkedin} alt="linkedin"/>
            </ul>
        </nav>
    )
}
export default Encabezado