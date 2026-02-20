import { useEffect, useState } from 'react';
import api from './Services/api';
import './Productos.css';
import ProductCard from './ProductCard.jsx';

function Productos(){
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

    if (cargando) return <p>Cargando productos...</p>

  return (
    <div className="Productos">
        <h2>Productos Destacados</h2>
        {productos.length === 0 ? (
            <p>No hay productos disponibles.</p>
        ) : (
            <div className="productos-grid">
                {productos.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        )}
    </div>
  );
}

export default Productos;
