import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail({ getProductById, buyButtonText = 'Comprar Ahora' }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="product-detail">
        <p>Product not found</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleBuyNow = () => {
    navigate(`/checkout/${product.id}`);
  };

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Volver al Inicio
      </button>
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <span className="product-detail-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-detail-price">{product.price.toFixed(2)}€</p>
          <p className="product-detail-description">{product.description}</p>
          <button className="buy-now-btn-large" onClick={handleBuyNow}>
            {buyButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
