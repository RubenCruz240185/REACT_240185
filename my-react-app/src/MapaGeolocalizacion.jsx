import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '350px'
};

function MapaGeolocalizacion() {
    const [ubicacion, setUbicacion] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError('Geolocalización no disponible en este navegador');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (err) => {
                setError(err.message || 'Error al obtener la ubicación');
            },
            { enableHighAccuracy: true }
        );
    }, []);

    if (error) return <div>Error geolocalización: {error}</div>;
    if (!ubicacion) return <div>Obteniendo ubicación...</div>;

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={ubicacion} zoom={15}>
                <Marker position={ubicacion} />
            </GoogleMap>
        </LoadScript>
    );
}

export default MapaGeolocalizacion;