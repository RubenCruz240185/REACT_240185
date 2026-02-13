import './Informacion.css';
import MapaGeolocalizacion from './MapaGeolocalizacion';
function ContenedorInformacion(){
    return(
        <Informacion />
    )
}

function Informacion(){
  return(
       <div className="Info">
            <h3>Servicios</h3>
            <p>Ofrecemos compra y venta de vinilos y CDs, tasación profesional de colecciones, limpieza y restauración de discos, y montaje/ajuste de equipos hi‑fi y tornamesas.</p>
            <MapaGeolocalizacion /> 
        </div>    
    );  
}
        

export default ContenedorInformacion;