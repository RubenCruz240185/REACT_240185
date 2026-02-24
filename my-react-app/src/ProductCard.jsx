import PropTypes from 'prop-types';
import './Productos.css';

function ProductCard({ producto, onAgregarCarrito }) {
  const precio = typeof producto.price === 'number' ? `$${producto.price}` : producto.price;

  return (
    <div className="producto-card">
      <div className="producto-media">
        <img src={producto.image} alt={producto.title} />
      </div>
      <div className="producto-body">
        <h3>{producto.title}</h3>
        <p className="precio">{precio}</p>
        <button
          className="agregar-carrito"
          type="button"
          onClick={() => onAgregarCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAgregarCarrito: PropTypes.func.isRequired,
};

export default ProductCard;
