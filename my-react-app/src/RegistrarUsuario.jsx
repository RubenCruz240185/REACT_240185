import { useEffect, useState } from "react";
import api from "./Services/api";
import "./RegistrarUsuario.css";

function RegistrarUsuario({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (usuarioEditado) {
            setUsername(usuarioEditado.username);
            setEmail(usuarioEditado.email);
            setPassword(usuarioEditado.password);
        } else {
            resetForm();
        }
    }, [usuarioEditado]);
    
    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = {
            username,
            email,
            password
        };
        try {
            if (usuarioEditado) {
                const respuesta = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
                console.log('Usuario actualizado:', respuesta.data);
                alert('Usuario actualizado exitosamente');
                limpiarSeleccion();
            } else {
                const respuesta = await api.post('/users', nuevoUsuario);
                console.log('Usuario registrado:', respuesta.data);
                alert('Usuario registrado exitosamente');
                resetForm();
            }
            
            if (onActualizacionExitosa) {
                onActualizacionExitosa();
            }
        } 
        catch (error) {
            console.error('Error al registrar el usuario', error);
            alert('Error al registrar el usuario');
        }
    }

    return (
        <div className="registrar-container">
            <div className="registrar-card">
                <h1 className="registrar-titulo">{usuarioEditado ? 'Actualizar Usuario' : 'Registrar Usuario'}</h1>
                <p className="registrar-subtitulo">Completa los campos para {usuarioEditado ? 'actualizar' : 'registrar'} un nuevo usuario.</p>
                
                <form className="registrar-form" onSubmit={handleSubmit}>
                    <div className="registrar-campo">
                        <label htmlFor="username">Username</label>
                        <input 
                            id="username"
                            type="text" 
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ej: juanperez"
                            required
                        />
                    </div>

                    <div className="registrar-campo">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ej: usuario@email.com"
                            required
                        />
                    </div>

                    <div className="registrar-campo">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            id="password"
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="registrar-acciones">
                        <button className="btn-registrar" type="submit">
                            {usuarioEditado ? 'Actualizar usuario' : 'Registrar usuario'}
                        </button>
                        {usuarioEditado && (
                            <button 
                                className="btn-cancelar" 
                                type="button" 
                                onClick={limpiarSeleccion}
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrarUsuario;