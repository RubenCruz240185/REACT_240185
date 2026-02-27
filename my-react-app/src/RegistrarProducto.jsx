import { useState } from "react";
import api from "./Services/api";
import './RegistrarProducto.css';

function RegistrarProductos(){
    const [productos, setProductos] = useState({
        titulo: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });

    const handleChange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            await api.post('/products', productos);
                alert('Producto registrado exitosamente');
                console.log('Producto registrado:', productos); 
                setProductos({
                titulo: '',
                price: '',
                description: '',
                image: '',
                category: ''
            });
        } catch (error) {
            console.error('Error al registrar el producto:', error);
        }
}
    return(
        <div className="registro-container">
            <div className="registro-card">
                <h2>Registrar productos</h2>
                <form>
                    <label>Titulo:</label>
                    <input type="text" name="titulo" />

                    <label>Precio:</label>
                    <input type="number" name="price" />

                    <label>Descripcion:</label>
                    <input type="text" name="description" />

                    <label>Imagen:</label>
                    <input type="text" name="image" />

                    <label>Categoria:</label>
                    <input type="text" name="category" />

                    <button type="submit">Registrar Producto</button>
                </form>
            </div> 
        </div>
    )
}

export default RegistrarProductos;