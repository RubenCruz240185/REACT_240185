import Mapa from './Mapa';

const cardWrap = {
    display: 'flex',
    gap: '18px',
    flexWrap: 'wrap',
    marginTop: 12,
    alignItems: 'flex-start'
};

const cardStyle = {
    flex: '1 1 320px',
    maxWidth: 360,
    minWidth: 260,
    padding: 14,
    borderRadius: 8,
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff'
};

function Sucursales() {
    const sucursales = [
        {
            id: 1,
            name: 'Centro',
            address: 'Calle Vinyl 12 (Cabina de escucha)',
            lat: 20.234814,
            lng: -97.922487,
            phone: '+52 229 123 4567',
            hours: 'Lun-Vie 10:00-19:00, Sáb 10:00-15:00',
            services: ['Cabina de escucha', 'Compra/Venta', 'Tasación']
        },
        {
            id: 2,
            name: 'Mercado Retro',
            address: 'Avenida Disco 45 (Compra/venta)',
            lat: 20.2355,
            lng: -97.9220,
            phone: '+52 229 987 6543',
            hours: 'Lun-Dom 11:00-18:00',
            services: ['Ediciones limitadas', 'Accesorios']
        },
        {
            id: 3,
            name: 'Barrio Norte',
            address: 'Plaza Colección 3 (Taller y restauración)',
            lat: 20.2335,
            lng: -97.9235,
            phone: '+52 229 555 0123',
            hours: 'Lun-Vie 09:30-18:30',
            services: ['Restauración', 'Limpieza', 'Montaje de tornamesas']
        }
    ];

    return (
        <div style={{ padding: 16 }}>
            <h2>Nuestras Sucursales</h2>
            <p>Visítanos en cualquiera de nuestras tiendas para escuchar discos en cabinas de escucha y recibir valoración de colecciones.</p>

            <div style={cardWrap}>
                {sucursales.map((s) => (
                    <div key={s.id} style={cardStyle}>
                        <h3 style={{ margin: '4px 0' }}>{s.name}</h3>
                        <p style={{ margin: '0 0 6px 0', color: 'rgba(0,0,0,0.85)', fontWeight: 600 }}>{s.address}</p>
                        <p style={{ margin: '0 0 8px 0', color: 'rgba(0,0,0,0.65)' }}>Tel: {s.phone}</p>
                        <p style={{ margin: '0 0 8px 0', color: 'rgba(0,0,0,0.65)' }}>Horario: {s.hours}</p>
                        <p style={{ margin: '0 0 8px 0', color: 'rgba(0,0,0,0.65)' }}>Servicios: {s.services.join(' · ')}</p>
                        <div style={{ width: '100%', height: 160, marginTop: 6 }}>
                            <Mapa lat={s.lat} lng={s.lng} height={'160px'} nombre_sucursal={s.name} />
                        </div>
                        <a href={`https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`} target="_blank" rel="noreferrer" style={{ marginTop: 8, color: '#1e88e5', fontWeight: 600 }}>Abrir en Google Maps</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sucursales;