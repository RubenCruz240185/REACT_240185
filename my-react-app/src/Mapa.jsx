import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '350px'
};

function Mapa( {lat, lng, nombre_sucursal}) {
    const {isoLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    if (loadError) return <div>Error al cargar el mapa</div>;
    if (!isoLoaded) return <div>Cargando mapa...</div>;

    const center = {lat, lng};
    return (
        <div>
            <h2>{nombre_sucursal}</h2>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
}
export default Mapa;