import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductById } from '../data/products';
import './Checkout.css';

function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  if (!product) {
    return (
      <div className="checkout">
        <p>Producto no encontrado</p>
        <button onClick={() => navigate('/')}>Volver al Inicio</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with a payment processor like Stripe, PayPal, etc.
    alert('¡Pedido realizado! (Esta es una demo - integra con tu procesador de pagos)');
    // navigate('/success');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="checkout">
      <button className="back-btn" onClick={() => navigate(`/product/${id}`)}>
        ← Volver al Producto
      </button>
      <div className="checkout-content">
        <div className="checkout-form-section">
          <h1>Checkout</h1>
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Código Postal</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="country">País</label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-order-btn">
              Completar Pedido - {product.price.toFixed(2)}€
            </button>
          </form>
        </div>
        <div className="checkout-summary">
          <h2>Resumen del Pedido</h2>
          <div className="summary-item">
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </div>
            <p className="summary-price">{product.price.toFixed(2)}€</p>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>{product.price.toFixed(2)}€</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
