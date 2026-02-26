function RegistrarProductos(){
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