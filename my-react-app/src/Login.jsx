import React, { useState } from "react";
import "./Login.css";
import api from "./Services/api";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        setLoading(true);

        try {
            const res = await api.get("/users");
            const users = res.data;
            const user = users.find(
                u => u.username === usuario && u.password === contraseña
            );
            if (user) {
                // Solicitar token
                const loginRes = await api.post("/auth/login", {
                    username: usuario,
                    password: contraseña
                });
                console.log("Token:", loginRes.data.token);
                setSuccess(true);
            } else {
                setError("Usuario o contraseña incorrectos.");
            }
        } catch (err) {
            setError("Error al conectar con el servidor.");
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <h3>Iniciar sesión</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        name="usuario"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="contraseña"
                        value={contraseña}
                        onChange={e => setContraseña(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-btn" disabled={loading}>
                    {loading ? "Accediendo..." : "Acceder"}
                </button>
                {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
                {success && <div style={{ color: "green", marginTop: 10 }}>¡Acceso exitoso!</div>}
                <div style={{ marginTop: "10px" }}>
                    <a href="#">Olvidé mi contraseña</a>
                    <span> | </span>
                    <a href="#">Crear cuenta</a>
                </div>
            </form>
        </div>
    );
}

export default Login;
