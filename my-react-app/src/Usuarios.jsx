import './Usuarios.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarUsuario from './RegistrarUsuario';
import { useAuth } from './AuthContext.jsx';

function Usuario() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const { isLoggedIn } = useAuth();
            const obtenerUsuarios = async () => {
            try{
                const response = await api.get('/users');
                setUsuarios(response.data);
            }catch(error){
                console.error('error al obtener usuarios', error);
            }finally{
                setCargando(false);
            }
        };
    useEffect(() => {
        obtenerUsuarios();
    },[]);

    if(cargando) return <p>Cargando usuarios.......</p>;

    return (
        <div className="usuarios">
            {isLoggedIn ? (
                <RegistrarUsuario 
                usuarioEditado={usuarioSeleccionado}
                limpiarSeleccion={setUsuarioSeleccionado}
                onActualizacionExitosa={obtenerUsuarios}
                />
            ) : null}

            <h1>Usuarios Registrados</h1>
            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Username</th>
                        <th>Password</th>
                        {isLoggedIn ? <th>Editar</th> : null}
                        {isLoggedIn ? <th>Eliminar</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.name.firstname}</td>
                            <td>{usuario.name.lastname}</td>
                            <td>{usuario.address.street} {usuario.address.number} {usuario.address.city} {usuario.address.zipcode}</td>
                            <td>{usuario.phone}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.password}</td>
                            {isLoggedIn ? <td><button className="editar" onClick={() => setUsuarioSeleccionado(usuario)}>Editar</button></td> : null}
                            {isLoggedIn ? <td><button className="eliminar">Eliminar</button></td> : null}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuario;
