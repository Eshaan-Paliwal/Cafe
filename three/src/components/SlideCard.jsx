import React from 'react';

const SlideCard = ({ product, onAddToCart }) => {
  return (
    <div className="slide-card-container">
      <div className="slide-card">
        <div className="slide-card-front">
          <div className="menu-card-image">
            <img 
              src={product.image} 
              alt={product.name}
              className="menu-item-image"
            />
          </div>
          <div className="menu-card-content">
            <div className="menu-card-header">
              <h4>{product.name}</h4>
              <span className="price">{product.price}</span>
            </div>
            <p>{product.description}</p>
            <div className="hover-prompt">
              <span>Hover for details</span>
            </div>
          </div>
          
          {/* Green overlay that slides away on hover */}
          <div className="slide-overlay"></div>
        </div>
        
        {/* Details section that slides up on hover */}
        <div className="slide-details">
          <h4>{product.name}</h4>
          <div className="details-section">
            <p className="details-text">{product.details}</p>
            <div className="product-info">
              <p><strong>Ingredients:</strong> {product.ingredients}</p>
              <p><strong>Calories:</strong> {product.calories}</p>
            </div>
          </div>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
