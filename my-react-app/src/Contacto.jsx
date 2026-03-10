function Contacto({CambiarVista}){
    return (
        <div className="container">
            <h2>Contacto</h2>
            <p>¿Tienes una colección para vender o buscas un disco en particular? Contáctanos:</p>
            <p>Teléfono: +1 555-987-6543</p>
            <p>Email: ventas@vinilosydiscos.com</p>
            <p>Horario: Lunes a Viernes 10:00 - 19:00</p>
            <p>
                ¿Ya tienes cuenta? <button className="link-button" onClick={() => CambiarVista("Login")}>Inicia sesión</button>
            </p>
        </div>
    );
}

export default Contacto;