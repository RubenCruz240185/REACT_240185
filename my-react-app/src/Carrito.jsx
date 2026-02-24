import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import api from './Services/api';
import './Carrito.css';

function Carrito({ carritoLocal }) {
  const [carritosApi, setCarritosApi] = useState([]);
  const [catalogo, setCatalogo] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarCarritos = async () => {
      try {
        const [resCarritos, resProductos] = await Promise.all([
          api.get('/carts'),
          api.get('/products'),
        ]);

        const carritos = Array.isArray(resCarritos.data) ? resCarritos.data : [];
        const productos = Array.isArray(resProductos.data) ? resProductos.data : [];

        const productosPorId = productos.reduce((acc, producto) => {
          acc[producto.id] = producto;
          return acc;
        }, {});

        setCarritosApi(carritos);
        setCatalogo(productosPorId);
      } catch {
        setError('No se pudieron cargar los carritos de la API.');
      } finally {
        setCargando(false);
      }
    };

    cargarCarritos();
  }, []);

  const carritosCombinados = useMemo(() => {
    const lista = [...carritosApi];

    if (carritoLocal.length > 0) {
      lista.unshift({
        id: 'local',
        date: new Date().toISOString(),
        local: true,
        products: carritoLocal.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
      });
    }

    return lista;
  }, [carritosApi, carritoLocal]);

  if (cargando) return <p>Cargando carritos...</p>;

  return (
    <section className="carrito-section">
      <h2>Carrito de compras</h2>
      {error ? <p className="carrito-error">{error}</p> : null}

      <div className="carrito-grid">
        {carritosCombinados.map((carrito) => (
          <article className="carrito-card" key={`${carrito.id}-${carrito.date}`}>
            <p className="carrito-id">{carrito.local ? 'Local' : `#${carrito.id}`}</p>
            <p className="carrito-date">{carrito.date}</p>
            <h3>Productos</h3>

            <ul>
              {(carrito.products || []).map((producto) => {
                const info = catalogo[producto.productId];
                const nombre = info?.title ? info.title : `Producto #${producto.productId}`;

                return (
                  <li key={`${carrito.id}-${producto.productId}`}>
                    {nombre} - Cantidad: {producto.quantity}
                  </li>
                );
              })}
            </ul>

            <button type="button">Comprar</button>
          </article>
        ))}
      </div>
    </section>
  );
}

Carrito.propTypes = {
  carritoLocal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Carrito;
