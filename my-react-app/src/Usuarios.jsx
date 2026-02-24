import { useEffect, useState } from 'react';
import api from './Services/api';
import './Usuarios.css';

const formularioInicial = {
  nombre: '',
  apellidos: '',
  direccion: '',
  telefono: '',
  correo: '',
  username: '',
  password: '',
};

function normalizarUsuario(usuario, index = 0) {
  return {
    localId: `${usuario.id ?? 'api'}-${index}-${Date.now()}`,
    id: usuario.id,
    nombre: usuario?.name?.firstname ?? usuario.nombre ?? '',
    apellidos: usuario?.name?.lastname ?? usuario.apellidos ?? '',
    direccion:
      typeof usuario?.address === 'object'
        ? `${usuario.address.street ?? ''} ${usuario.address.number ?? ''} ${usuario.address.city ?? ''}`.trim()
        : usuario?.direccion ?? '',
    telefono: usuario?.phone ?? usuario?.telefono ?? '',
    correo: usuario?.email ?? usuario?.correo ?? '',
    username: usuario?.username ?? '',
    password: usuario?.password ?? '',
  };
}

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, setFormulario] = useState(formularioInicial);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState('');
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get('/users');
        const lista = Array.isArray(response.data)
          ? response.data.map((u, i) => normalizarUsuario(u, i))
          : [];
        setUsuarios(lista);
      } catch {
        setError('No se pudieron cargar usuarios desde la API.');
      } finally {
        setCargando(false);
      }
    };

    obtenerUsuarios();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const limpiarFormulario = () => {
    setFormulario(formularioInicial);
    setEditando(null);
  };

  const handleEditar = (usuario) => {
    setFormulario({
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      correo: usuario.correo,
      username: usuario.username,
      password: usuario.password,
    });
    setEditando(usuario.localId);
  };

  const handleEliminar = (localId) => {
    setUsuarios((prev) => prev.filter((u) => u.localId !== localId));
    if (editando === localId) {
      limpiarFormulario();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGuardando(true);
    setError('');

    const payload = {
      email: formulario.correo,
      username: formulario.username,
      password: formulario.password,
      name: {
        firstname: formulario.nombre,
        lastname: formulario.apellidos,
      },
      address: {
        city: formulario.direccion,
        street: formulario.direccion,
        number: 1,
        zipcode: '00000',
        geolocation: {
          lat: '0',
          long: '0',
        },
      },
      phone: formulario.telefono,
    };

    try {
      if (editando) {
        const usuarioActual = usuarios.find((u) => u.localId === editando);
        if (usuarioActual?.id) {
          await api.put(`/users/${usuarioActual.id}`, payload);
        }

        setUsuarios((prev) =>
          prev.map((u) =>
            u.localId === editando
              ? {
                  ...u,
                  ...normalizarUsuario({
                    ...u,
                    ...payload,
                    id: u.id,
                  }),
                  localId: u.localId,
                }
              : u
          )
        );
      } else {
        const response = await api.post('/users', payload);
        const nuevo = normalizarUsuario(response.data ?? payload, usuarios.length + 1);
        nuevo.localId = `local-${Date.now()}`;

        // Cada registro nuevo se agrega y la tabla crece en tiempo real.
        setUsuarios((prev) => [nuevo, ...prev]);
      }

      limpiarFormulario();
    } catch {
      setError('No se pudo guardar el registro en la API.');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <section className="usuarios-section">
      <h2>Usuarios Registrados</h2>

      <form className="usuarios-form" onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required />
        <input name="apellidos" placeholder="Apellidos" value={formulario.apellidos} onChange={handleChange} required />
        <input name="direccion" placeholder="Dirección" value={formulario.direccion} onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" value={formulario.telefono} onChange={handleChange} required />
        <input name="correo" type="email" placeholder="Correo" value={formulario.correo} onChange={handleChange} required />
        <input name="username" placeholder="Username" value={formulario.username} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formulario.password} onChange={handleChange} required />
        <button type="submit" disabled={guardando}>
          {guardando ? 'Guardando...' : editando ? 'Actualizar' : 'Registrar'}
        </button>
      </form>

      {error ? <p className="usuarios-error">{error}</p> : null}
      {cargando ? <p>Cargando usuarios...</p> : null}

      <div className="tabla-wrapper">
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
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.localId}>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellidos}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.username}</td>
                <td>{usuario.password}</td>
                <td>
                  <button className="btn-editar" type="button" onClick={() => handleEditar(usuario)}>
                    Editar
                  </button>
                </td>
                <td>
                  <button className="btn-eliminar" type="button" onClick={() => handleEliminar(usuario.localId)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Usuarios;
