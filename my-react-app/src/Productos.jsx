import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from './Services/api';
import './Productos.css';
import ProductCard from './ProductCard.jsx';
import RegistrarProductos from './RegistrarProducto.jsx';

function Productos({ onAgregarCarrito }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await api.get('/products');
                setProductos(response.data);
            }
            catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setCargando(false);
            }
        };
        obtenerProductos();
    }, []);

    if (cargando) return <p>Cargando productos...</p>;

    return (
        <div className="Productos">
            <RegistrarProductos/>
            <h2>Productos Destacados</h2>
            {productos.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                <div className="productos-grid">
                    {productos.map((producto) => (
                        <ProductCard
                            key={producto.id}
                            producto={producto}
                            onAgregarCarrito={onAgregarCarrito}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

Productos.propTypes = {
    onAgregarCarrito: PropTypes.func.isRequired,
};

export default Productos;
