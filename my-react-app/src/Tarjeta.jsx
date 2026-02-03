function Tarjeta({ titulo, descripcion, imagen }) {
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-img" />
            <div className="tarjeta-contenido">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Tarjeta;