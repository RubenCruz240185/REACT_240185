import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from './Services/api';
import './Productos.css';
import ProductCard from './ProductCard.jsx';
import RegistrarProductos from './RegistrarProducto.jsx';
import { useAuth } from './AuthContext.jsx';

function Productos({ onAgregarCarrito }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const { isLoggedIn } = useAuth();

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

    useEffect(() => {
        obtenerProductos();
    }, []);

    const handleEliminarProducto = async (id) => {
        try {
            await api.delete(`/products/${id}`);
            setProductos((prev) => prev.filter((producto) => producto.id !== id));
            if (productoSeleccionado?.id === id) {
                setProductoSeleccionado(null);
            }
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };

    if (cargando) return <p>Cargando productos...</p>;

    return (
        <div className="Productos">
            {isLoggedIn ? (
                <RegistrarProductos
                    productoEditado={productoSeleccionado}
                    limpiarSeleccion={setProductoSeleccionado}
                    onActualizacionExitosa={obtenerProductos}
                />
            ) : null}
            <h2>Productos Destacados</h2>
            {productos.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                <div className="productos-grid">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-item">
                            <ProductCard
                                producto={producto}
                                onAgregarCarrito={onAgregarCarrito}
                            />
                            {isLoggedIn ? (
                                <div className="producto-acciones">
                                    <button
                                        className="btn-editar-producto"
                                        type="button"
                                        onClick={() => setProductoSeleccionado(producto)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn-eliminar-producto"
                                        type="button"
                                        onClick={() => handleEliminarProducto(producto.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ) : null}
                        </div>
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
