import { useEffect, useState } from "react";
import api from "./Services/api";
import "./RegistrarProducto.css";

function RegistrarProductos({ productoEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [productos, setProductos] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });

    useEffect(() => {
        if (productoEditado) {
            setProductos({
                title: productoEditado.title ?? '',
                price: productoEditado.price ?? '',
                description: productoEditado.description ?? '',
                image: productoEditado.image ?? '',
                category: productoEditado.category ?? ''
            });
            return;
        }

        setProductos({
            title: '',
            price: '',
            description: '',
            image: '',
            category: ''
        });
    }, [productoEditado]);

    const handleChange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (productoEditado?.id) {
                const response = await api.put(`/products/${productoEditado.id}`, productos);
                console.log('Producto actualizado:', response.data);
                alert('Producto actualizado exitosamente');
                limpiarSeleccion?.(null);
            } else {
                const response = await api.post('/products', productos);
                console.log('Producto registrado:', response.data);
                alert('Producto registrado exitosamente');
            }

            setProductos({
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''
            });

            onActualizacionExitosa?.();
        } catch (error) {
            console.error('Error al registrar el producto:', error);
            alert('No se pudo guardar el producto');
        }
    }
    
    return(
        <div className="registro-container">
            <div className="registro-card">
                <h2>{productoEditado ? 'Actualizar producto' : 'Registrar productos'}</h2>
                <form className="registro-form" onSubmit={handleSubmit}>
                    <label>Titulo:</label>
                    <input type="text" name="title" value={productos.title} onChange={handleChange} required />

                    <label>Precio:</label>
                    <input type="number" name="price" value={productos.price} onChange={handleChange} required />

                    <label>Descripcion:</label>
                    <input type="text" name="description" value={productos.description} onChange={handleChange} required />

                    <label>Imagen:</label>
                    <input type="text" name="image" value={productos.image} onChange={handleChange} required />

                    <label>Categoria:</label>
                    <input type="text" name="category" value={productos.category} onChange={handleChange} required />

                    <div className="registro-acciones">
                        <button type="submit">{productoEditado ? 'Actualizar producto' : 'Registrar producto'}</button>
                        {productoEditado ? (
                            <button
                                type="button"
                                className="btn-cancelar-producto"
                                onClick={() => limpiarSeleccion?.(null)}
                            >
                                Cancelar
                            </button>
                        ) : null}
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default RegistrarProductos;