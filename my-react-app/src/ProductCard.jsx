import './Productos.css';

function ProductCard({producto}){
  const precio = typeof producto.price === 'number' ? `$${producto.price}` : producto.price;
  return (
    <div className="producto-card">
      <div className="producto-media">
        <img src={producto.image} alt={producto.title} />
      </div>
      <div className="producto-body">
        <h3>{producto.title}</h3>
        <p className="precio">{precio}</p>
      </div>
    </div>
  );
}

export default ProductCard;
