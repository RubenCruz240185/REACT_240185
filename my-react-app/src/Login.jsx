import React, { useState } from "react";
import "./Login.css";
import api from "./Services/api";
import { useAuth } from "./AuthContext";

function Login({CambiarVista}) {
    const { login } = useAuth();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
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
                u => u.username === usuario && u.password === contrasena
            );
            if (user) {
                const loginRes = await api.post("/auth/login", {
                    username: usuario,
                    password: contrasena
                });
                const token = loginRes.data.token;
                if (token) {
                    login(token);
                    setSuccess(true);
                    CambiarVista && CambiarVista("Inicio");
                } else {
                    setError("No se recibió token del servidor.");
                }
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
                        name="contrasena"
                        value={contrasena}
                        onChange={e => setContrasena(e.target.value)}
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
                    <button type="button" className="link-button" onClick={() => CambiarVista && CambiarVista("RegistrarUsuario")}>Crear cuenta</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
