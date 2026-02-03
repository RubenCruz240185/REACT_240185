import './ContenedorTarjetas.css';
import Tarjeta from './Tarjeta';
import imagenDefault from './assets/react.svg';

function ContenedorTarjetas() {
    return (
        <div className="contenedor-tarjeta">
            <Tarjeta 
                titulo="Tarjeta 1" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={imagenDefault}
            />
            <Tarjeta 
                titulo="Tarjeta 2" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={imagenDefault}
            />
            <Tarjeta 
                titulo="Tarjeta 3" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={imagenDefault}
            />
            <Tarjeta 
                titulo="Tarjeta 4" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={imagenDefault}
            />
        </div>
    )
}

export default ContenedorTarjetas;
